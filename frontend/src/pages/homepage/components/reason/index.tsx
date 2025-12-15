import { Flag, StickyNoteIcon, Timer } from 'lucide-react'
import type { ReactNode } from 'react'

interface ReasonItem {
	id: string
	icon: ReactNode
	title: string
	description: string
	iconBgClass: string
	iconTextClass: string
}

const reasons: ReasonItem[] = [
	{
		id: 'accurate-countdowns',
		icon: <Timer />,
		title: 'Accurate Countdowns',
		description:
			'Precision down to the second. We sync with global atomic clocks to ensure you never miss a moment.',
		iconBgClass: 'bg-primary/10',
		iconTextClass: 'text-primary',
	},
	{
		id: 'vietnam-first-holidays',
		icon: <Flag />,
		title: 'Vietnam-First Holidays',
		description:
			'Dedicated to the Vietnamese Lunar calendar. We accurately calculate Tet and other traditional festivals.',
		iconBgClass: 'bg-blue-500/10',
		iconTextClass: 'text-blue-500',
	},
	{
		id: 'smart-reminders',
		icon: <StickyNoteIcon />,
		title: 'Smart Reminders',
		description:
			'Get notified via email or push notifications at exactly the right time before your important events.',
		iconBgClass: 'bg-green-500/10',
		iconTextClass: 'text-green-500',
	},
]

const ReasonSection = () => {
	return (
		<section className='py-12 md:py-20'>
			<div className='text-center mb-12'>
				<h2 className='text-2xl md:text-3xl font-bold text-[#181111] dark:text-white'>
					Why use <span className='text-primary'>NVH.</span>Countdown?
				</h2>
			</div>

			<div className='grid md:grid-cols-3 gap-8 px-4'>
				{reasons.map((reason) => (
					<div
						key={reason.id}
						className='flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-colors'
					>
						<div
							className={`size-16 rounded-2xl flex items-center justify-center mb-2 ${reason.iconBgClass} ${reason.iconTextClass}`}
						>
							<span className='material-symbols-outlined text-3xl'>
								{reason.icon}
							</span>
						</div>

						<h3 className='text-lg font-bold text-[#181111] dark:text-white'>
							{reason.title}
						</h3>

						<p className='text-gray-500 dark:text-gray-400 leading-relaxed'>
							{reason.description}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default ReasonSection
