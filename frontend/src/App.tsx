import { ROUTE_PATH } from '@/constants'
import LoginPage from '@/pages/login-example'
import NotFoundPage from '@/pages/not-found'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { MainLayout } from './components/layouts'
import AboutPage from './pages/about'
import HomePage from './pages/homepage'
import AllEventsPage from './pages/all-events'

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path={ROUTE_PATH.HOME} element={<HomePage />} />
					<Route path={ROUTE_PATH.ABOUT} element={<AboutPage />} />
					<Route path={ROUTE_PATH.ALL_EVENTS} element={<AllEventsPage />} />
					<Route
						path={ROUTE_PATH.AUTH.LOGIN}
						element={<LoginPage />}
					/>
				</Route>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Router>
	)
}

export default App
