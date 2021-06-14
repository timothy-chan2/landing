const card = ["#card-shang", "#card-lond", "#card-paris"];

const highlight1 = () => {
	if (card2.classList.contains("card-highlight") || card3.classList.contains("card-highlight")) {
		/*Doesn't allow Shanghai card to be highlighted when either of the other cards are already highlighted*/
	} else {
		card1.classList.toggle("card-highlight");
		city1.classList.toggle("card-highlight");
		desc1.classList.toggle("card-highlight");
		
		/*Changes the button link to show Shanghai campus only when highlighted*/
		if (card1.classList.contains("card-highlight")) {
			document.querySelector("#myButton").setAttribute("href", "https://www.lewagon.com/shanghai");
		} else {
			document.querySelector("#myButton").setAttribute("href", "https://www.lewagon.com/");
		}		
	}
}

const highlight2 = () => {
	if (card1.classList.contains("card-highlight") || card3.classList.contains("card-highlight")) {
		/*Doesn't allow London card to be highlighted when either of the other cards are already highlighted*/
	} else {
		card2.classList.toggle("card-highlight");
		city2.classList.toggle("card-highlight");
		desc2.classList.toggle("card-highlight");

		/*Changes the button link to show London campus only when highlighted*/
		if (card2.classList.contains("card-highlight")) {
			document.querySelector("#myButton").setAttribute("href", "https://www.lewagon.com/london");
		} else {
			document.querySelector("#myButton").setAttribute("href", "https://www.lewagon.com/");
		}
	}
}

const highlight3 = () => {
	if (card1.classList.contains("card-highlight") || card2.classList.contains("card-highlight")) {
		/*Doesn't allow Paris card to be highlighted when either of the other cards are already highlighted*/
	} else {
		card3.classList.toggle("card-highlight");
		city3.classList.toggle("card-highlight");
		desc3.classList.toggle("card-highlight");

		/*Changes the button link to show Paris campus only when highlighted*/
		if (card3.classList.contains("card-highlight")) {
			document.querySelector("#myButton").setAttribute("href", "https://www.lewagon.com/paris");
		} else {
			document.querySelector("#myButton").setAttribute("href", "https://www.lewagon.com/");
		}
	}
}

const card1 = document.querySelector(card[0]); /*Select the entire Shanghai card*/
const city1 = document.querySelector(card[0]).children[1]; /*Select the Shanghai city name*/
const desc1 = document.querySelector(card[0]).children[2]; /*Select the Shanghai city description*/

const card2 = document.querySelector(card[1]); /*Same thing but for London*/
const city2 = document.querySelector(card[1]).children[1];
const desc2 = document.querySelector(card[1]).children[2];

const card3 = document.querySelector(card[2]); /*Same thing but for Paris*/
const city3 = document.querySelector(card[2]).children[1];
const desc3 = document.querySelector(card[2]).children[2];

card1.addEventListener("click", highlight1);
card2.addEventListener("click", highlight2);
card3.addEventListener("click", highlight3);
