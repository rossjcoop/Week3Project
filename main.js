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
	
	
	buttonDisplay = ""
	result += "+"
		
	
}
else if(buttonClick === "-"){

	buttonDisplay = ""
	result += "-"
}
else if(buttonClick === "*"){

	buttonDisplay = ""
	result += "*"

}
else if(buttonClick === "/"){

	buttonDisplay = ""
	result += "/"
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

	<p class = "buttondisplay">${buttonDisplay}</p>

`

mainDisplay.innerHTML = mainDisplayBlock

})


