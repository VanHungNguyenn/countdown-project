import HeroSection from './components/hero'
import PersonalEvent from './components/personal-event'
import ReasonSection from './components/reason'
import UpcomingDays from './components/upcoming-day'

const HomePage = () => {
	return (
		<div className='flex flex-col gap-20'>
			<HeroSection />
			<UpcomingDays />
			<ReasonSection />
			<PersonalEvent />
		</div>
	)
}

export default HomePage
