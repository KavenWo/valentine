let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById('noButton');
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");

let showPage1 = () => {
	page1.style.display = "block";
	page2.style.display = "none"
}

let showPage2 = () => {
	page1.style.display = "none"
	page2.style.display = "block"
}

let yesB1 = () => {
	yesButton.style.padding = "4vh 18%";
	yesButton.style.fontSize = "20px";
	yesButton.style.left = "100px";

	noButton.removeEventListener("click",yesB1);
	noButton.addEventListener("click",yesB2)
	noButton.style.left = "90px";
	noButton.style.padding = "1vh 2%";
	noButton.textContent = "Are you sure?";
}

window.onload = showPage1;
yesButton.addEventListener("click", showPage2)
noButton.addEventListener("click", yesB1)

let yesB2 = () => {
	yesButton.style.padding = "6vh 25%"
	yesButton.style.fontSize = "30px";
	yesButton.style.left = "160px"

	noButton.style.left = "100px";
	noButton.textContent = "Really???";
	noButton.style.padding = "3% 2%"	
	noButton.removeEventListener("click",yesB2);
	noButton.addEventListener("click",yesB3)
}

let yesB3 = () => {
	yesButton.style.padding = "8vh 27%"
	yesButton.style.fontSize = "40px";

	noButton.style.left = "90px";
	noButton.textContent = "Whyyyy??";
	noButton.removeEventListener("click",yesB3);
	noButton.addEventListener("click",yesB4)
}

let yesB4 = () => {
	yesButton.style.padding = "10vh 30%"
	yesButton.style.left = "185px";
	yesButton.style.fontSize = "60px";

	noButton.style.left = "92px";
	noButton.style.fontSize = "10px";
	noButton.style.lineHeight = "10px";
	noButton.textContent = "Change your mind?";	
	noButton.removeEventListener("click",yesB4);
	noButton.addEventListener("click",yesB5)
}

let yesB5 = () => {
	yesButton.style.padding = "12vh 46%"
	yesButton.style.left = "250px";

	noButton.style.left = "200px";
	noButton.style.bottom ="clamp(100px, 25vh, 50vh)"
	noButton.style.top = "clamp(300px, 50% ,800px)"
	// noButton.style.bottom = "300px";
	noButton.style.fontSize = "16px"
	noButton.style.position = "absolute"
	noButton.style.padding = "2vh 2%"
	noButton.textContent = "Even if I ask nicely?";	
	noButton.removeEventListener("click",yesB5);
	noButton.addEventListener("click",yesB6)
}

let yesB6 = () => {
	yesButton.style.padding = "17vh 46%"
	yesButton.style.left = "307px";

	noButton.style.top = "250px";
	noButton.textContent = "Super reallyyyy??";	
	noButton.removeEventListener("click",yesB6);
	noButton.addEventListener("click",yesB7)
}

let yesB7 = () => {
	yesButton.style.padding = "24.5vh 32%";
	yesButton.style.left = "237px";
	yesButton.textContent = "YES<3";

	noButton.style.display = "none";
	noButton.removeEventListener("click",yesB7);
}



