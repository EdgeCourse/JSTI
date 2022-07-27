window.addEventListener("load", function(){
    frm = document.getElementById("frmCheck");
    frm.addEventListener("submit", checkAge);  
})
function checkAge() {
    var message //, age;
    message = document.getElementById("message");
    ageVal = document.getElementById("txtAge").value;
    try { 
        if( ageVal == "" ){ 
            throw "empty";
        }
        if(isNaN(ageVal)) throw "not a number";
    
        if( ageVal > 100 ) { throw "too high";}
    
        if( ageVal < 5 ) throw "too low";
    }
    catch(error) {
        message.innerHTML = "Age is " + error;
        event.preventDefault();
    }
//    finally{
//      alert("good job filling out the form")

//    }
}
