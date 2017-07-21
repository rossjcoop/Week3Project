


let buttonDisplay = ""
let calculator = document.getElementById("calculator")
let result = ""
calculator.addEventListener("click", function(event){

let buttonClick = event.target.innerHTML
console.log(result)


if(buttonClick === "●"){	
	buttonDisplay += "."
	result += "."

}

else if(buttonClick === "0"){
	buttonDisplay += "0"
	result += "0"
}


else if(buttonClick === "1"){
	buttonDisplay += "1"
	result += "1"

}

else if(buttonClick === "2"){
	buttonDisplay += "2"
	result += "2"

}

else if(buttonClick === "3"){
	buttonDisplay += "3"
	result += "3"
}

else if(buttonClick === "4"){
	buttonDisplay += "4"
	result += "4"
}

else if(buttonClick === "5"){
	buttonDisplay += "5"
	result += "5"
}

else if(buttonClick === "6"){
	buttonDisplay += "6"
	result += "6"

}

else if(buttonClick === "7"){
	buttonDisplay += "7"
	result += "7"

}

else if(buttonClick === "8"){
	buttonDisplay += "8"
	result += "8"
	
}

else if(buttonClick === "9"){
	buttonDisplay += "9"
	result += "9"
	
}


else if(buttonClick === "+"){
	//buttonDisplay += runningTotal ////maybe function needed
	
	buttonDisplay = ""
	result += "+"



	//convert buttonDisplay into a real number hint use parseFloat(buttonDisplay)  
	//let holdMyBeer = parseFloat(buttonDisplay)
	//if runningTotal === 0, just put buttonDisplay in there
	//if(result = 0){
		//result = holdMyBeer
	//}
	//else add runningTotal to buttonDisplay Number and store in runningTotal
	//else{
		//result += holdMyBeer
	//}


	//set operator to an empty string
	//operator = ""
	//set buttonDisplay to an empty string		
	
}
else if(buttonClick === "-"){

	buttonDisplay = ""
	result += "-"




// 	let holdMyBeer = parseFloat(buttonDisplay)
// 	if(result = 0){
// 		result = holdMyBeer
// 	}
// 	else{
// 		result -= holdMyBeer
// 	}

// 	buttonDisplay = ""
}
else if(buttonClick === "*"){

	buttonDisplay = ""
	result += "*"
// 	let holdMyBeer = parseFloat(buttonDisplay)
// 	if(result = 0){
// 		result = holdMyBeer
// 	}
// 	else{
// 		result *= holdMyBeer
// 	}

// 	buttonDisplay = ""
}
else if(buttonClick === "/"){

	buttonDisplay = ""
	result += "/"

// 	let holdMyBeer = parseFloat(buttonDisplay)
// 	if(result = 0){
// 		result = holdMyBeer
// 	}
// 	else{
// 		result /= holdMyBeer
// 	}

// 	buttonDisplay = ""
}
else if(buttonClick === "="){
	
	buttonDisplay = eval(result)

	
}
else if(buttonClick === "C"){
	buttonDisplay = ""
	result = ""
}




let mainDisplay = document.getElementById("mainDisplay")







let mainDisplayBlock = `

	<p>${buttonDisplay}</p>


`

mainDisplay.innerHTML = mainDisplayBlock


})


////////////////////////////


//3. What to do if a button is clicked.
///Probably have to "port" these numbers over each time they are clicked to the operators, but in the mean time, they can display until the operators are used.

///Maybe mainDisplay can just be console.logged??

//How it should work in order: 
//Button Click
//Displays number And/Or decimal in mainDisplay
//Places that number into a field, and keeps concatenating numbers And/Or decimals as they are clicked in the buttonDisplay variable UNTIL an operator is used, then that number is sent to the runningTotal variable.		 



/////////////////////////NUMERALS//////////////
















//1.Need to write a function that takes an input, display the input.
//function displayscreen(){
	//let display = 0
	//if(button)

//}











//2. After you receive that input you need to
/////a) Display the input.
/////b) 

















/////////////////////////////DISPLAY/////////////


	











