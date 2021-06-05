const card = ["#card-shang", "#card-lond", "#card-paris"];

const highlight1 = () => {
	if (card2.classList.contains("card-highlight") || card3.classList.contains("card-highlight")) {
		/*Doesn't allow Shanghai card to be highlighted*/
	} else {
		card1.classList.toggle("card-highlight");
		city1.classList.toggle("card-highlight");
		desc1.classList.toggle("card-highlight");
		
		/*Changes the link to show Shanghai campus*/
		if (card1.classList.contains("card-highlight")) {
			document.querySelector("#myButton").setAttribute("href", "https://www.lewagon.com/shanghai");
		} else {
			document.querySelector("#myButton").setAttribute("href", "https://www.lewagon.com/");
		}		
	}
}

const highlight2 = () => {
	if (card1.classList.contains("card-highlight") || card3.classList.contains("card-highlight")) {
		/*Doesn't allow London card to be highlighted*/
	} else {
		card2.classList.toggle("card-highlight");
		city2.classList.toggle("card-highlight");
		desc2.classList.toggle("card-highlight");

		/*Changes the link to show London campus*/
		if (card2.classList.contains("card-highlight")) {
			document.querySelector("#myButton").setAttribute("href", "https://www.lewagon.com/london");
		} else {
			document.querySelector("#myButton").setAttribute("href", "https://www.lewagon.com/");
		}
	}
}

const highlight3 = () => {
	if (card1.classList.contains("card-highlight") || card2.classList.contains("card-highlight")) {
		/*Doesn't allow Paris card to be highlighted*/
	} else {
		card3.classList.toggle("card-highlight");
		city3.classList.toggle("card-highlight");
		desc3.classList.toggle("card-highlight");

		/*Changes the link to show Paris campus*/
		if (card3.classList.contains("card-highlight")) {
			document.querySelector("#myButton").setAttribute("href", "https://www.lewagon.com/paris");
		} else {
			document.querySelector("#myButton").setAttribute("href", "https://www.lewagon.com/");
		}
	}
}

const card1 = document.querySelector(card[0]);
const city1 = document.querySelector(card[0]).children[1];
const desc1 = document.querySelector(card[0]).children[2];

const card2 = document.querySelector(card[1]);
const city2 = document.querySelector(card[1]).children[1];
const desc2 = document.querySelector(card[1]).children[2];

const card3 = document.querySelector(card[2]);
const city3 = document.querySelector(card[2]).children[1];
const desc3 = document.querySelector(card[2]).children[2];

card1.addEventListener("click", highlight1);
card2.addEventListener("click", highlight2);
card3.addEventListener("click", highlight3);
