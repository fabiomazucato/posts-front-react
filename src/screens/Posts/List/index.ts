import { createElement, useState, useEffect } from 'react'

/* Service */
import { getPosts } from '../../../services/PostService'

/* Model */
import { IPost } from '../../../models/Post'

import View from './view'

function ListContainer(): JSX.Element {
	const [loading, setLoading] = useState(false)
	const [posts, setPosts] = useState<Array<IPost>>(data)

	/**
	 * Fetch
	 */
	const fetchPosts = (): void => {
		async function fetch(): Promise<void> {
			try {
				const response: Array<IPost> = await getPosts()
				console.log('posts', response)
				setPosts(response)

				setLoading(false)
			} catch (err) {
				setLoading(false)
				console.error('Post: ', err)
			}
		}

		fetch()
	}

	// useEffect(fetchPosts, [])

	const viewProps = {
		loading,
		posts
	}

	return createElement(View, viewProps)
}

export default ListContainer
const data = [
	{
		id: '5e36b7454ebced1a193ee2ae',
		title: 'Primeiro Post',
		text:
			'Que maravilha! Este é o primeiro post deste projeto. É possível cadastrar novos Post(s) clicando em criar novo Post. ',
		author: 'Fabio Mazucato',
		votes: 0,
		createDate: '2020-49-02 09:49'
	},
	{
		id: '5e36b9435e7836737b586410',
		title: 'Primeiro Post',
		text:
			'Que maravilha! Este é o primeiro post deste projeto. É possível cadastrar novos Post(s) clicando em criar novo Post. ',
		author: 'Fabio Mazucato',
		votes: 3,
		createDate: '2020-02-33 09:57'
	},
	{
		id: '5e36b9a3024fc8239bafc371',
		title: 'Primeiro Post',
		text:
			'Que maravilha! Este é o primeiro post deste projeto. É possível cadastrar novos Post(s) clicando em criar novo Post. ',
		author: 'Fabio Mazucato',
		votes: 0,
		createDate: '2020-02-02 09:59'
	},
	{
		id: '5e36fc4a06c9883b6667f9d5',
		title: 'Segundo Post',
		text: 'Agora sim está bom d+! Segue mais um post.',
		author: 'Fabio Cesar',
		votes: 0,
		createDate: '2020-02-02 14:43'
	}
]
