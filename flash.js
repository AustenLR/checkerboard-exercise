window.onload = function(){
	color();
	flashing();
};

function flashing (){
	var flash = setInterval(change, 2000);
};

function color (){
	for (var i=0; i <63; i++){
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
	// for (var i=0; i <63;i++){
	// 	var d = document.getElementsByTagName("body");
	// 	var d_nested = document.getElementsByTagName("div");
	// 	d.removeChild(d_nested)[i];
	// }
}

function change(){
	for (var i=0; i <63; i++){
		var a = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		var c = Math.floor(Math.random()*255);
		document.getElementsByTagName("div")[i].style.backgroundColor = `rgb(${a},${b},${c})`;
	};
}

