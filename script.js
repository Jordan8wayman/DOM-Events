var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// using query selector all to select all li elements.
var items = document.querySelectorAll("li");

// using a for loop to iterate through each of the li elements and add an event listener to them and
// then call the liClick function.
for (var i=0; i < items.length; i++) {
	items[i].addEventListener("click", liClick);
}

// create the liClick function this function uses the this keyword to target items[i]. As items[i] is
// what called the function. this means it will toggle done on whicheve li element called it.
function liClick() {
	this.classList.toggle("done");
}
