document.getElementById('changeColor').addEventListener('click', function(){
	var color = document.getElementById('textColor').value;
	document.getElementsByTagName('body')[0].style.color = color;
});

document.getElementById('hide').addEventListener('click', function(){
	document.getElementsByTagName('body')[0].style.display = 'none';
});

function validateForm(){
	var name = document.getElementById('nameInput').value;
	var species = document.getElementById('speciesInput').value;
	var age = document.getElementById('ageInput').value;

	if(!name.length || !species.length || !age.length){
		alert('Fields must not be blank. Please try again.');
		return false;
	}
	if(isNaN(parseInt(age)) || typeof parseInt(age) !== 'number'){
		alert('Please enter a whole number.');
		return false;
	}

	return true;
}