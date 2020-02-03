import React, { Fragment } from 'react'

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

/* Components */
import Loading from '../../../components/Loading'

import { IProps } from './types'

function List(props: IProps): JSX.Element {
	const { loading, posts } = props

	return (
		<Fragment>
			{loading ? (
				<Loading />
			) : (
				posts.map((post, i) => (
					<section key={i} className='post-list'>
						<article>
							<header className='post-header'>
								<div className='post-title'>
									<span>{post.title}</span>
									<span className='post-author'>
										<strong>{'Author: '}</strong>
										{post.author}
									</span>
								</div>
							</header>
							<p className='post-text'>{post.text}</p>
							<footer>
								<div className='actions'>
									<span>
										<FontAwesomeIcon
											icon={faThumbsUp}
											size='1x'
										/>
									</span>
									<span className='votes-text'>
										{post.votes}
										{' votes'}
									</span>
								</div>
							</footer>
						</article>
					</section>
				))
			)}
		</Fragment>
	)
}

export default List
