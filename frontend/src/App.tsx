import { ROUTE_PATH } from '@/constants'
import NotFoundPage from '@/pages/not-found'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { MainLayout } from './components/layouts'
import AboutPage from './pages/about'
import HomePage from './pages/homepage'
import LoginPage from './pages/login'
import SignUpPage from './pages/sign-up'

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path={ROUTE_PATH.HOME} element={<HomePage />} />
					<Route path={ROUTE_PATH.ABOUT} element={<AboutPage />} />
					<Route
						path={ROUTE_PATH.AUTH.LOGIN}
						element={<LoginPage />}
					/>
					<Route
						path={ROUTE_PATH.AUTH.SIGNUP}
						element={<SignUpPage />}
					/>
				</Route>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Router>
	)
}

export default App
