function toggle_vis(id) {
	var elem = document.getElementById(id);
	if(elem.style.display == 'block') {
		elem.style.display = 'none';
	} 
	else
		elem.style.display = 'block';
}

function show_email() {
	var elem = document.getElementById('email');
	elem.style.display = 'block';
	elem.style.backgroundColor = '#ff6666'; 
}
