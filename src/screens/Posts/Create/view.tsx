import React from 'react'

import { IProps } from './types'

function Create(props: IProps): JSX.Element {
	const { post, onChangeInput } = props

	return (
		<form id='new-post'>
			<input
				type='text'
				name='title'
				placeholder='Titulo do post'
				value={post.title}
				onChange={e => onChangeInput('title', e)}
			/>

			<input
				type='text'
				name='author'
				placeholder='Author do post'
				value={post.author}
				onChange={e => onChangeInput('author', e)}
			/>

			<textarea
				name='text'
				placeholder='Texto do post'
				value={post.text}
				// onChange={e => onChangeInput('author', e)}
			/>

			<button type='button'>Enviar</button>
		</form>
	)
}

export default Create
