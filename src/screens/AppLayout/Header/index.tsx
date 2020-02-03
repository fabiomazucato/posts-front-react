import React from 'react'
import { Link } from 'react-router-dom'

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

function Header() {
	return (
		<header className='header'>
			<Link to='/post/list'>
				<h1>Posts</h1>
			</Link>

			<div className='box-icon'>
				<FontAwesomeIcon
					icon={faNewspaper}
					size='2x'
					className='icon'
				/>
				<Link to='/post/create'>
					<label>{'Novo post'}</label>
				</Link>
			</div>
		</header>
	)
}

export default Header
