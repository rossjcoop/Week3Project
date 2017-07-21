let buttonDisplay = ""
let calculator = document.getElementById("calculator")
calculator.addEventListener("click", function(event){
let buttonClick = event.target.innerHTML
console.log(buttonDisplay)


if(buttonClick === "●"){	
	buttonDisplay += "."


}

else if(buttonClick === "0"){
	buttonDisplay += "0"

}


else if(buttonClick === "1"){
	buttonDisplay += "1"


}

else if(buttonClick === "2"){
	buttonDisplay += "2"


}

else if(buttonClick === "3"){
	buttonDisplay += "3"

}

else if(buttonClick === "4"){
	buttonDisplay += "4"

}

else if(buttonClick === "5"){
	buttonDisplay += "5"

}

else if(buttonClick === "6"){
	buttonDisplay += "6"


}

else if(buttonClick === "7"){
	buttonDisplay += "7"


}

else if(buttonClick === "8"){
	buttonDisplay += "8"

	
}

else if(buttonClick === "9"){
	buttonDisplay += "9"

	
}


else if(buttonClick === "+"){
		
	buttonDisplay += "+"
			
}
else if(buttonClick === "-"){

	buttonDisplay += "-"

}
else if(buttonClick === "*"){

	buttonDisplay += "*"

}
else if(buttonClick === "/"){

	buttonDisplay += "/"

}
else if(buttonClick === "="){
	
	buttonDisplay = eval(buttonDisplay)
	
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


