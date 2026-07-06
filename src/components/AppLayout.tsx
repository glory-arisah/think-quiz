import store from '@/app/store'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
	return (
		<Provider store={store}>
			<Outlet />
		</Provider>
	)
}

export default AppLayout
