import { ROUTE_PATH } from '@/constants'
import { cn } from '@/libs'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '../ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

const NAV_ITEMS = [
	{ to: ROUTE_PATH.HOME, label: 'Home' },
	{ to: ROUTE_PATH.ABOUT, label: 'About' },
	{ to: ROUTE_PATH.ALL_EVENTS, label: 'All Events' },
]

const Header = () => {
	return (
		<div className='fixed top-0 left-0 right-0 bg-white border-b border-solid border-black/10 dark:border-white/10 shadow-sm z-10'>
			<div className='max-w-7xl mx-auto flex items-center justify-between whitespace-nowrap px-4 py-4'>
				<Link to={ROUTE_PATH.HOME}>
					<div className='flex items-center gap-4 text-[#181111] dark:text-white'>
						<h2 className='text-lg font-bold tracking-[-0.015em]'>
							<span className='text-primary'>NVH.</span>Countdown
						</h2>
					</div>
				</Link>

				<div className='hidden md:flex flex-1 justify-end items-center gap-8'>
					<NavigationMenu>
						<NavigationMenuList className='gap-6'>
							{NAV_ITEMS.map((item) => (
								<NavigationMenuItem key={item.to}>
									<NavigationMenuLink asChild>
										<Link
											to={item.to}
											className={cn(
												'text-sm font-medium text-gray-700',
												'hover:text-primary transition-colors'
											)}
										>
											{item.label}
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>

					<Button>Add Event</Button>
				</div>

				<div className='md:hidden'>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant='ghost' size='icon'>
								<Menu />
							</Button>
						</SheetTrigger>

						<SheetContent side='right' className='w-72'>
							<nav className='flex flex-col gap-4 mt-12 p-4 items-center'>
								{NAV_ITEMS.map((item) => (
									<Link
										key={item.to}
										to={item.to}
										className='text-sm font-medium text-gray-700 hover:text-primary'
									>
										{item.label}
									</Link>
								))}

								<Button className='mt-4 w-full'>
									Add Event
								</Button>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</div>
	)
}

export default Header
