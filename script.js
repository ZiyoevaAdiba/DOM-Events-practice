var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	createButton(li);
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


//done and undone li element
function checkTask(event) {
	if(event.target.nodeName === "LI") {
		event.target.classList.toggle("done");
	}else{
		event.target.parentNode.remove();
	}
}

// creating buttons for each li element
function createButton(todo) {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("delete"));
	todo.appendChild(deleteButton);
}

// for (var i=0; i<ul.childElementCount; i++) {
// 	createButton(ul.children[i]);
// }
for (var i=0; i<listItems.length; i++) {
	createButton(listItems[i]);
}

//deleting li element


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", checkTask);


