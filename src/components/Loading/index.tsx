import * as React from 'react'
import { ClipLoader } from 'react-spinners'

import IProps from './types'

const Loading = (props: IProps): JSX.Element => {
	const { loading = true } = props

	return (
		<div className='wrapper-loading'>
			<ClipLoader color={'#99C791'} loading={loading} />
		</div>
	)
}

export default Loading
