var con1 = document.getElementById("container");
var con2 = document.querySelector("#container");
var second = document.getElementsByClassName("second");
var thrid = document.querySelector("ol .third");
console.log(thrid);
//con1.innerText = "Hello!";
document.getElementsByClassName("footer")[0].classList.add("main");
document.getElementsByClassName("footer")[0].classList.remove("main");
var newE = document.createElement("li");
newE.innerText = "four";
document.getElementsByTagName("ul")[0].append(newE);

var lis = document.getElementsByTagName("ol")[0].children;
	console.log(lis.length);

	for(let i = 0; i < lis.length; i++){
		console.log(lis[i]);
		lis[i].style.backgroundColor = "green";
	}

document.getElementsByClassName("footer")[0].remove();