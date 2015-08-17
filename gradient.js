window.onload = function(){
	checkerboard();
}
document.getElementsByTagName("div")[0].style.background = "linear-gradient(180deg, black, white 60%, blue)";
 // i can keep track of divs
function checkerboard (){
	for (var i =1; i < 64; i++){
		var newElement = document.createElement("div");
		newElement.style.width = "11.1%";
		newElement.style.paddingBottom = "11.1%";
		newElement.style.float ="left";
		if (i % 2 === 1){
			newElement.style.backgroundColor = "black"
			newElement.style.background = "linear-gradient(90deg, black, white 60%, blue)";			
		} else {
			newElement.style.backgroundColor = "red";
			newElement.style.background = "linear-gradient(180deg, black, white 60%, blue)";		
		}
		document.getElementsByTagName("body")[0].appendChild(newElement);
	}
}

// document.getElementsByTagName("body")[0].style.background = "linear-gradient(180deg, black, white 60%, blue)";