import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '@/components/AppLayout'
import LandingPage from '@/components/LandingPage'

const router = createBrowserRouter([
	{
		element: <AppLayout />,
	},
	{
		path: '/',
		element: <LandingPage />,
	},
])

export default router
