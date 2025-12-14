import { getTimeRemaining } from '@/utils'
import { useEffect, useState } from 'react'

const TET_2026 = new Date('2026-02-17T00:00:00')

const HeroSection = () => {
	const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(TET_2026))

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeRemaining(TET_2026))
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	return (
		<section className='relative w-full mt-10'>
			{/* Background */}
			<div
				className='relative flex min-h-[520px] items-center justify-center bg-cover bg-center bg-no-repeat px-4 rounded-xl'
				style={{
					backgroundImage:
						'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.65)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAepAXg0vI4aMdsmoBq9MrQzWo74Np84s8RjIMryD6EicmRjBI7OXBSb2iTnfaHixM8QgWgNr3InlyUDE0Z-KvX8h5It48i7UW3jDZhC0FWtriNFJDE-cqO_wEqNU0506uEvjY_PLEYqJY9L4kBnrjqiPdkgBiXCEGK1_UAD8HrOpMwN1gvDFIf489DlZ1Q_J8LgpQRHApFZ8-j3BaABKyFfJxz5cWInU1ljLaixGVzIJvjXxfFQyK9lL0CrWRNJAp_jolLhCvjOXnO")',
				}}
			>
				<div className='w-full max-w-4xl text-center text-white'>
					{/* Title */}
					<h1 className='text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl'>
						Tết Nguyên Đán 2026
					</h1>

					{/* Subtitle */}
					<p className='mt-3 text-sm text-white/90 sm:text-base md:text-lg'>
						The most important celebration in Vietnamese culture.
					</p>

					{/* Countdown */}
					<div className='mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4'>
						{[
							{ label: 'Days', value: timeLeft.days },
							{ label: 'Hours', value: timeLeft.hours },
							{ label: 'Minutes', value: timeLeft.minutes },
							{ label: 'Seconds', value: timeLeft.seconds },
						].map((item) => (
							<div
								key={item.label}
								className='flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/20 px-4 py-4 shadow-lg'
							>
								<span className='text-3xl font-bold sm:text-4xl'>
									{item.value}
								</span>
								<span className='text-xs text-white/90 sm:text-sm'>
									{item.label}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
