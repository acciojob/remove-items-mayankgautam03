//your JS code here. If required.
function btn () {
	

let optionss = document.getElementById("colorSelect");
	let selectedOptionIndex = optionss.selectedIndex;

	optionss.remove(selectedOptionIndex);
}

let buttonfnctn = document.getElementById("button");

buttonfnctn.addEventListener("click",btn);