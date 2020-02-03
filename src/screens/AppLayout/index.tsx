import React from 'react'

/* Components */
import Routes from '../../config/Routes'
import Header from './Header'

function AppLayout(): JSX.Element {
	return (
		<div className='main'>
			<Header />
			<Routes />
		</div>
	)
}

export default AppLayout
