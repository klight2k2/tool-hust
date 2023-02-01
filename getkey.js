const listDiv=document.getElementsByClassName("__question__ office-form-question")
let listkey=[]
for (let i = 0; i < 120; i++) {
	const inputs = listDiv[i].querySelectorAll('input');
	
	for (let k = 0; k < inputs.length; k++) {
		if (listDiv[i].querySelectorAll('input')[k].checked) {
            listkey.push({"key":listDiv[i].querySelector(".text-format-content").textContent,"value":inputs[k].value})
		}
	}
}
