import ajax from './ajax.js';
export default class DataBase {
	constructor(url, version) {
		this.url = url;
		this.version = `api/v${version}`;
	}
	getStudents() {
		// fetch(`${this.url}/${this.version}/students.json`).then( => .json)
		 return ajax.get(`${this.url}/${this.version}/students.json`);
	}
	getStudent(id) {
		return ajax.get(`${this.url}/${this.version}/students/${id}.json`);
	}
	deleteStudent(id){
		return ajax.delete(`${this.url}/${this.version}/students/${id}.json`);
	}
	updateStudent(id, data) {
		return ajax.put(`${this.url}/${this.version}/students/${id}.json`, data);
	}
	createStudent(data){
		return ajax.post(`${this.url}/${this.version}/students.json`, data);
	}
}