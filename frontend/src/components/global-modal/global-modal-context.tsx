import { createContext, useCallback, useState } from 'react'

export type GlobalModalStore = {
	component: React.ElementType
}

interface GlobalModalContextProps {
	showGlobalModal: (component: React.ElementType) => void
	closeGlobalModal: () => void
	closeAllModals: () => void
}

const GlobalModalContext = createContext<GlobalModalContextProps | null>(null)

const push = (item: GlobalModalStore) => (array: GlobalModalStore[]) =>
	[...array, item]
const pop = (array: GlobalModalStore[]) => array.slice(0, array.length - 1)

const GlobalModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [modals, setModals] = useState<GlobalModalStore[]>([])

	const showGlobalModal = useCallback((component: React.ElementType) => {
		setModals(push({ component: component }))
	}, [])
	const closeGlobalModal = () => setModals(pop)
	const closeAllModals = () => setModals([])

	return (
		<GlobalModalContext.Provider
			value={{ showGlobalModal, closeGlobalModal, closeAllModals }}
		>
			{children}
			{modals.map((modal, index) => {
				const Modal = modal.component
				return <Modal key={index} />
			})}
		</GlobalModalContext.Provider>
	)
}

export { GlobalModalProvider }

export default GlobalModalContext
