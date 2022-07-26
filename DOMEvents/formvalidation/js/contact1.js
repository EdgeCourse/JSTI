//"use strict";
let inputs = document.querySelectorAll("input");
let count = inputs.length;
for(let i = 0; i < count; i++){
	
	inputs[i].addEventListener("keydown", keys,false);
}
document.getElementById("contact").addEventListener("submit", check,false);
function check(e){
for(var j = 0; j < document.contact.elements.length; j++){	
if (document.contact.elements[j].hasAttribute("required") && document.contact.elements[j].value==""){
	let currentClass = document.contact.elements[j].className;
	if (document.contact.elements[j].value === '' && currentClass.indexOf("error") === -1) {
    document.contact.elements[j].className = currentClass + " " + 'error';
    document.contact.elements[j].parentNode.querySelector("label span").style.display = "inline";
	}
	e.preventDefault();
}
 }

  /*
 else if((this == document.getElementById("phone")) && (this.value.search(/^\d{10}$/) == -1)){
 this.className = currentClass + " " + 'error';
  } 
  else if((this == document.getElementById("email")) && (this.value.search(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$/) == -1)){
    this.className = currentClass + " " + 'error';
 
  } 
  
  else if((this == document.getElementById("zip")) && (this.value.search(/^((\d{5}-\d{4})|(\d{5})|([AaBbCcEeGgHhJjKkLlMmNnPpRrSsTtVvXxYy]\d[A-Za-z]\s?\d[A-Za-z]\d))$/) == -1)){
    this.className = currentClass + " " + 'error';
  }
  
  else {
    this.className = "form-control";
 }
 */
}
function keys(){
//13 = enter, 39 = right arrow
  let key = event.keyCode;
  if (key == 13 || key == 39) {
	  this.blur();
  }
}



