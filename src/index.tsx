import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

/* CSS */
import './assets/sass/main.scss'

/* Components */
import AppLayout from './screens/AppLayout'

const app = (
	<BrowserRouter>
		<AppLayout />
	</BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))
