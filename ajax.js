const ajax = {
	get(endpoint) {
		return fetch(endpoint).then(response => response.json());
	},
	post() {},
	put(endpoint, body) {
		const options = {
			method: 'PUT',
			body: JSON.stringify(body)
		};
		return fetch(endpoint, options).then(response => response.json());
	},
	delete(endpoint) {
		const options = {
			method: 'DELETE'
		};
		return fetch(endpoint, options).then(response => response.json());
	}
}
export default ajax;