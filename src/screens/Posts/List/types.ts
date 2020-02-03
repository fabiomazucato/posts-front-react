import { IPost } from '../../../models/Post'

export interface IProps {
	loading: boolean
	posts: Array<IPost>
}
