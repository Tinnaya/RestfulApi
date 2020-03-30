import DataBase from './db.js';
const $studentsList = $('#students-list');
const $updateStudents = $('#update-student');
// const $deleteStudent = $('#delete-student');
const db = new DataBase('https://frontend-lectures.firebaseio.com', 1);
// db.deleteStudent('om95aj8lsgg').then(response => {
// 	console.log('response', response);
// } )
 db.getStudents().then(response => {
	 console.log('response', response);
	const students = Object.entries(response).map(item => {
		let [key, value] = item;
		value.id = key;
		return value;
	})
	console.log('students', students);
	students.forEach(student => {
		 $('<a>').text(`${student.firstname} ${student.lastname}`)
				.addClass('list-group-item')
				.attr({'data-id': student.id, href: ''})
				.appendTo($studentsList)

	});
});
 $studentsList.on('click','[data-id]', function(event) {
		event.preventDefault();
		const studentID = $(this).data('id');
		db.getStudent(studentID).then(response =>{
			console.log('response', response);
			for (let key in response) {
				$updateStudents.find(`[name="${key}]`).val(response[key]);
			}
			$updateStudents.find('[name="id"]').val(studentID);
		})
 });

 $updateStudents.on('submit', function(event) {
	 event.preventDefault();
	 const elements = Array.from(this.elements);
	 const data = {};
	 elements.forEach( item =>{
		 const name = $(item).attr('name');
		 if (!name) return;
		 const value = $(item).val();
		 data[name] = value;

	 });
	 console.log(data);
	 db.updateStudent(data.id, data).then(response => {
		 console.log('response', response);
		 $studentsList
		 	.find(`[data-id= "${data.id}"]`)
		 		.text(`${response.firstname} ${response.lastname}`)
	 });
 });