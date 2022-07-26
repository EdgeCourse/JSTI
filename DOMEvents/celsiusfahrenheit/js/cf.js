//Celsius to Fahrenheit c = (f - 32) * 5 / 9
//Fahrenheit to Celsius f = c * 9 / 5 + 32

celsius = document.getElementById("celsius");
	celsius.addEventListener("keyup", function(){
		degreeconvert()
	});

fahrenheit = document.getElementById("fahrenheit");
	fahrenheit.addEventListener("keyup", function(){
		degreeconvert()
	});
function degreeconvert () {
	var fahrenheit = document.getElementById("fahrenheit").value;
	var celsius = document.getElementById("celsius").value;
	console.log(fahrenheit);
	console.log(celsius);
	console.log(event.target.id);
	if(event.target.id == "celsius"){
		console.log(celsius);
		//fahrenheit = celsius * 9 / 5 + 32;
		document.getElementById("fahrenheit").value = Math.round(celsius * 9 / 5 + 32);
	} else if (event.target.id == "fahrenheit") {
	console.log(fahrenheit);	
	//celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsius").value = Math.round((fahrenheit -32) * 5 / 9);
	}
}


/*
	celsius = document.getElementById("celsius");
	celsius.addEventListener("keyup", function(){

		convert("Celsius");
	})
	
	fahrenheit = document.getElementById("fahrenheit");
	fahrenheit.addEventListener("keyup", function(){
		convert("Fahrenheit");
	})
	

function convert(degree) {
degree = degree.toLowerCase();
    if (degree == "celsius") {
        document.getElementById("fahrenheit").value = Math.round(document.getElementById("celsius").value * 9 / 5 + 32);
    } else if (degree == "fahrenheit"){
        document.getElementById("celsius").value = Math.round((document.getElementById("fahrenheit").value -32) * 5 / 9);
    }
}

*/