import { Button } from '@/components/ui/button'
import { ROUTE_PATH } from '@/constants'
import { Bell, CalendarPlus, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

const EventCard = () => {
	return (
		<article className='group relative flex flex-col bg-white dark:bg-background-dark/50 rounded-xl overflow-hidden border hover:border-primary/30 hover:-translate-y-1 transition-all'>
			{/* Badge */}
			<span className='absolute top-3 left-3 z-10 rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-white'>
				In 5 days
			</span>

			{/* Image */}
			<div className='relative aspect-[4/3] overflow-hidden'>
				<div
					className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
					style={{
						backgroundImage:
							'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAy1D7oBhRjfm9xER7Bz6B8bTcwlMlGoKzTpOpbiyqhoA-9E8_WoFprHjxoLbanvWu_AeZ-d0ePaOnilTZC7s_mA6EwarMqSr0fSlo6ybDQs_G5pCNLn1J0MyQolRg4W81b0Hffha7hDIBELa9YF7WVZwwfaA2U6MijuuaC4tTIRWByEqR1fqnQG0si_8jMlvf3z-GZNkEYbpVtF5hKu57AnDQxF-dzCBWto6XjiZ-H7xMFNr9uOTWJgCZDZ89W0HfwVW8vpvV3uUT")',
					}}
				/>

				{/* Hover actions */}
				<div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition'>
					<Button size='icon' variant='secondary'>
						<CalendarPlus size={18} />
					</Button>
					<Button size='icon' variant='secondary'>
						<Bell size={18} />
					</Button>
					<Button size='icon' variant='secondary'>
						<Eye size={18} />
					</Button>
				</div>
			</div>

			{/* Content */}
			<div className='p-5 flex flex-col flex-1'>
				<span className='text-xs font-semibold uppercase text-primary'>
					Public Holiday
				</span>
				<Link to={ROUTE_PATH.DETAIL_EVENT}>
					<h3 className='text-lg font-bold mt-1 group-hover:text-primary transition'>
						Giỗ Tổ Hùng Vương
					</h3>
				</Link>

				<p className='text-sm text-muted-foreground mb-3'>
					April 18, 2024
				</p>

				<div className='mt-auto pt-3 border-t text-xs text-muted-foreground'>
					Lunar: 10/03 (Giáp Thìn)
				</div>
			</div>
		</article>
	)
}

export default EventCard
