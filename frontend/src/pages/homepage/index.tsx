
import HeroSection from './components/hero'
import PersonalEvent from './components/personal-event'
import UpcomingDays from './components/upcoming-day'

const HomePage = () => {
	return (
		<div className='flex flex-col gap-20'>
			<HeroSection />
			<UpcomingDays />
			<PersonalEvent />
		</div>
	)
}

export default HomePage
