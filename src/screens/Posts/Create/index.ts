import { createElement, useState, ChangeEvent } from 'react'

/* Model */
import { IPost } from '../../../models/Post'

import View from './view'

const objPost: IPost = {
	title: '',
	author: '',
	text: ''
}

function CreateContainer(): JSX.Element {
	const [post, setPost] = useState<IPost>(objPost)

	const onChangeInput = (
		field: string,
		e: ChangeEvent<HTMLInputElement>
	): void => {
		const form: IPost = { ...post, [field]: e.target.value }
		setPost({ ...form })

		console.log(post)
	}

	const viewProps = {
		post,
		onChangeInput
	}

	return createElement(View, viewProps)
}

export default CreateContainer
