import type { Invoice } from '@/api/demo/invoice-api';
import ConfirmModal from '@/components/confirm-modal';
import useGlobalModal from '@/components/global-modal/use-global-modal';
import { SelectAllCheckbox, type SelectAllCheckboxRef } from '@/components/select-all-checkbox';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useVirtualizer } from '@tanstack/react-virtual';
import { memo, useEffect, useRef } from 'react';

const columnTemplate = '50px repeat(4, 1fr)'; //

interface DemoTableListProps {
  data: Invoice[];
}

function DemoTableList({ data }: DemoTableListProps) {
  const { showGlobalModal } = useGlobalModal();

  // refs
  const selectAllRef = useRef<SelectAllCheckboxRef | null>(null);
  const btnDeleteRef = useRef<HTMLButtonElement | null>(null);
  const btnEditRef = useRef<HTMLButtonElement | null>(null);
  const tableWrapperRef = useRef<HTMLTableElement>(null);
  const selectedRowIds = useRef<string[]>([]);

  // effects
  useEffect(() => {
    if (btnDeleteRef.current) {
      btnDeleteRef.current.disabled = true;
    }

    if (btnEditRef.current) {
      btnEditRef.current.disabled = true;
    }
  }, []);

  useEffect(() => {
    rowVirtualizer.measure();
  }, [data]);

  // functions
  function updateSelectAllVisual() {
    let state: boolean | 'indeterminate' = false;

    const total = data.length;
    const selected = selectedRowIds.current.length;
    const btn = selectAllRef.current;
    if (btn) {
      if (selected === 0) state = false;
      else if (selected === total) state = true;
      else state = 'indeterminate';

      btn.setChecked(state);
    }
  }

  function updateStatusControlBar() {
    const totalSelectedRow = selectedRowIds.current.length;
    if (btnDeleteRef.current) {
      if (totalSelectedRow > 0) {
        btnDeleteRef.current.disabled = false;
      } else {
        btnDeleteRef.current.disabled = true;
      }
    }

    if (btnEditRef.current) {
      if (totalSelectedRow === 1) {
        btnEditRef.current.disabled = false;
      } else {
        btnEditRef.current.disabled = true;
      }
    }
  }

  // events
  function handleSelectRowChange(checkedState: boolean, rowIndex: number) {
    if (checkedState) {
      selectedRowIds.current.push(data[rowIndex].id);
    } else {
      selectedRowIds.current = selectedRowIds.current.filter((id) => id !== data[rowIndex].id);
    }
    rowVirtualizer.measure();

    // update SelectAllCheckbox
    updateSelectAllVisual();

    // update btnDelete
    updateStatusControlBar();
  }

  function handleToggleSelectAll(newState: true | false) {
    selectAllRef.current?.setChecked(newState);

    if (newState) {
      selectedRowIds.current = data.map((invoice) => invoice.id);
    } else {
      selectedRowIds.current = [];
    }

    // re-render
    rowVirtualizer.measure();
    updateStatusControlBar();
  }

  function handleDeleteClick() {
    showGlobalModal(() => <ConfirmModal message="Are you sure to delete?" onConfirm={() => console.log('delete')} />);
  }

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => tableWrapperRef.current,
    estimateSize: () => 37, // height of each row
    overscan: 5,
  });

  return (
    <>
      <div className="mb-4">
        <div className="flex justify-end gap-2">
          <Button variant="default" className="bg-yellow-500 hover:bg-sky-400">
            Add
          </Button>
          <Button ref={btnEditRef} disabled>
            Edit
          </Button>
          <Button
            ref={btnDeleteRef}
            variant="default"
            className="bg-red-900 hover:bg-red-800"
            onClick={handleDeleteClick}
          >
            Delete
          </Button>
        </div>
      </div>

      <div ref={tableWrapperRef} className="flex-grow overflow-auto bg-[#999] text-center">
        <div className="atable">
          <div
            className="atable-row hover:!bg-table-head sticky top-0 z-10 bg-table-head"
            style={{ gridTemplateColumns: columnTemplate }}
          >
            <div className="atable-head">
              <SelectAllCheckbox
                className="mx-auto border-gray-600"
                ref={selectAllRef}
                onCheckedChange={handleToggleSelectAll}
              />
            </div>
            <div className="atable-head">Invoice</div>
            <div className="atable-head">Status</div>
            <div className="atable-head">Method</div>
            <div className="atable-head">Amount</div>
          </div>
          <div
            style={{
              height: rowVirtualizer.getTotalSize(),
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const row = data[virtualRow.index];
              return (
                <div
                  key={row.id}
                  className="atable-row"
                  style={{
                    gridTemplateColumns: columnTemplate,
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transform: `translateY(${virtualRow.start}px)`,
                    height: 37,
                  }}
                >
                  <div className="atable-cell justify-center">
                    <Checkbox
                      className="border-gray-600"
                      checked={selectedRowIds.current.includes(row.id)}
                      onCheckedChange={(checkedState: boolean) => handleSelectRowChange(checkedState, virtualRow.index)}
                    />
                  </div>
                  <div className="atable-cell">{row.invoice}</div>
                  <div className="atable-cell">{row.paymentStatus}</div>
                  <div className="atable-cell">{row.paymentMethod}</div>
                  <div className="atable-cell justify-end">{row.totalAmount}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(DemoTableList);
