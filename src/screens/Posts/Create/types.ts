import { ChangeEvent } from 'react'
import { IPost } from '../../../models/Post'

export interface IProps {
	onChangeInput: (field: string, e: ChangeEvent<HTMLInputElement>) => void
	post: IPost
}
