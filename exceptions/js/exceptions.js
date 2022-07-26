window.addEventListener("load", function(){
    frm = document.getElementById("frmCheck");
    frm.addEventListener("submit", checkAge);  
})
function checkAge() {
    var message, age;
    message = document.getElementById("message");
    //message.innerHTML = "";
    age = document.getElementById("txtAge").value;
    try { 
        if( age == "" )  {
			throw "is empty";
		}
        if(isNaN(age)) throw "is not a number";
        if( age > 100 )   throw "is too high";
        if( age < 5 )    throw "is too low";
    }
    catch(e) {
        message.textContent = "Age " + e;
        //< IE9 use:
        //message.innerHTML = "Age " + err;
        event.preventDefault()
    }
}
