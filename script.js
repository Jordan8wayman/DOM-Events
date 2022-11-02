var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.getElementsByTagName('li')

// adding event listeners yo input and button for new elements.
button.addEventListener('click', Onclick);
input.addEventListener('keypress', addElement);


liEvent();
buttonListElement();

function checkInputlength(){
	return input.value.length;
}

// creating new list elements and addin delete buttons.
function createListElement(){

		var li = document.createElement("li");
		var button = document.createElement('button');
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		li.appendChild(button)
		button.innerHTML = "delete";
		input.value = "";

		liEvent();
		buttonListElement();
}


// function to check input length and create list Element when clicked.
function Onclick(){

	if(checkInputlength() > 0){
		createListElement();
	}

}

// function to add on keypress.
function addElement(){

	if(checkInputlength() > 0 && event.keyCode === 13){
		createListElement();
	}
}
// function to add event listener to the list elements.
function liEvent(){
	for( i=0; i<li.length; i++){
	li[i].addEventListener('click', changeClass)
	}
}
// function to toggle the done class of the list element on and off.
function changeClass(){
	this.classList.toggle('done');
}
// function to add event listeners to the buttons on the list elements.
function buttonListElement(){
	var button = document.querySelectorAll('li button');
	for( i=0; i<button.length; i++){
	button[i].addEventListener('click', clearElement)
	}
}
// function to delete the list elements when the delete button is clicked.
function clearElement(){
	for(var i=0; i<li.length; i++){
		this.parentNode.remove()
	}
}