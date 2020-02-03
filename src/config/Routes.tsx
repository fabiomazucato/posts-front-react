import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

/* screens */
import PostList from '../screens/Posts/List'
import PostCreate from '../screens/Posts/Create'
import Error from '../screens/Error'

function Routes(): JSX.Element {
	return (
		<Switch>
			<Route path='/' exact render={() => <Redirect to='/post/list' />} />
			<Route path='/post/list' exact component={PostList} />
			<Route path='/post/create' exact component={PostCreate} />
			<Route path='/404' exact component={Error} />
			<Redirect from='*' to='/404' />
		</Switch>
	)
}
export default Routes
