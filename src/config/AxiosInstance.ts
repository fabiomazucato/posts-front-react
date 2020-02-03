import axios from 'axios'

const api = {
	url: 'http://localhost:8080/api'
}

export const axiosInstance = axios.create({
	baseURL: api.url,
	timeout: 60000,
	withCredentials: true,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers':
			'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
		'Access-Control-Allow-Methods':
			'GET, POST, OPTIONS, PUT, PATCH, DELETE',
		'Content-Type': 'application/json;charset=UTF-8'
	}
})
