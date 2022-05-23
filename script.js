// global variables
const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function deleteButton(){
	const deleteButton = document.createElement('button')
	deleteButton.innerHTML = "Delete"
	li.appendChild(deleteButton);

}

function createListElement() {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";


	const deleteButton = document.createElement('button')
	deleteButton.innerHTML = "Delete"
	li.appendChild(deleteButton);

	li.addEventListener('click', () => {
		li.classList.toggle('done')
	})
	deleteButton.addEventListener('click', deleting)
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

const lis = document.getElementsByTagName('li')
for(i = 0; i < lis.length; i++){
	const li = lis[i]
	li.addEventListener('click', () => {
		li.classList.toggle('done')
	})
	// hard to refactor because of scope
	const deleteButton = document.createElement('button')
	deleteButton.innerHTML = "Delete"
	li.appendChild(deleteButton);
	deleteButton.addEventListener('click', deleting)

}

function deletionClick(){
	const deleteButton = document.createElement('button')
	deleteButton.innerHTML = "Delete"
	li.appendChild(deleteButton);
	deleteButton.addEventListener('click', deleting)
}

function deleting(e){
	if(e.target.innerText === "Delete"){
		e.target.parentNode.remove()
	}

}


//static application
//a bit difficult to refactor because of scope;
// list items can be statically deleted and when clicked will be styled with line-through