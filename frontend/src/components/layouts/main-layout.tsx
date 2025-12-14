import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import Header from '../header'

export function MainLayout() {
	return (
		<>
			<Header />
			<div className='max-w-7xl mx-auto px-4 pt-[72px]'>
				<Outlet />
				<Footer />
			</div>
		</>
	)
}
