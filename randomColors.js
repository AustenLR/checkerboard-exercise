window.onload = function(){
	randomColor();
};

function randomColor (){
	for (var i=1; i <64; i++){
		var newElement = document.createElement("div");
			newElement.style.width = "11.1%";
			newElement.style.paddingBottom = "11.1%";
			newElement.style.float = "left";
			var a = Math.floor(Math.random()*255);
			var b = Math.floor(Math.random()*255);
			var c = Math.floor(Math.random()*255);
			newElement.style.backgroundColor = `rgb(${a},${b},${c})`;
			document.getElementsByTagName("body")[0].appendChild(newElement);
	}
}

