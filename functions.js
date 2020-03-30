export function getFormData (form) {
	const elements = Array.from(form.elements);
	const data = {};
	elements.forEach( item =>{
		const name = $(item).attr('name');
		if (!name) return;
		const value = $(item).val();
		data[name] = value;

	});
	return data;
}
export function addStudent (student, targetElement) {
	$('<a>').text(`${student.firstname} ${student.lastname}`)
			.addClass('list-group-item')
			.attr({'data-id': student.id, href: ''})
			.appendTo(targetElement)
 }