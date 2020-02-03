import { AxiosResponse } from 'axios'
import { axiosInstance } from '../config/AxiosInstance'

/* Model */
import { IPost } from '../models/Post'

export const getPosts = async (): Promise<any> => {
	try {
		const response: AxiosResponse = await axiosInstance.get('/post')

		return await response
	} catch (err) {
		console.error(err)
	}
}

export const createPost = async (post: IPost): Promise<any> => {
	try {
		const response: AxiosResponse = await axiosInstance.post('/post', post)

		return response.data
	} catch (err) {
		console.error(err)
	}
}

export const upVotes = async (postId: string): Promise<any> => {
	try {
		const response: AxiosResponse = await axiosInstance.put(
			`/post/votes/${postId}`
		)

		return response.data
	} catch (err) {
		console.error(err)
	}
}
