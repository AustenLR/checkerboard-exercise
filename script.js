// loop through to keep creating divs (createElement)
// each loop creates a new div
//give style 

// var with div count
	// even and odd divs have different colors
window.onload = function(){
	checkerboard();
}

 // i can keep track of divs
function checkerboard (){
	for (var i =1; i < 64; i++){
		if (i % 2 === 1){
			var newElement = document.createElement("div")
			newElement.style.backgroundColor = "black";
			newElement.style.width = "11.1%";
			newElement.style.paddingBottom = "11.1%";
			newElement.style.float ="left";
			document.getElementsByTagName("body")[0].appendChild(newElement);

		} else {
			var newElement = document.createElement("div")
			newElement.style.backgroundColor = "red";
			newElement.style.width = "11.1%";
			newElement.style.paddingBottom = "11.1%";
			newElement.style.float ="left";
			document.getElementsByTagName("body")[0].appendChild(newElement);
		}
	}
}
