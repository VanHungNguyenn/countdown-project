import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const EventsPagination = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t">
      <p className="text-sm text-muted-foreground">
        Showing <b>8</b> of <b>24</b> events
      </p>

      <div className="flex items-center gap-2">
        <Button size="icon" variant="outline">
          <ChevronLeft size={16} />
        </Button>
        <Button size="icon">1</Button>
        <Button size="icon" variant="outline">
          2
        </Button>
        <Button size="icon" variant="outline">
          3
        </Button>
        <span className="px-2 text-muted-foreground">…</span>
        <Button size="icon" variant="outline">
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  )
}

export default EventsPagination
