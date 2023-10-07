let elForm = document.querySelector(".site-form")
let elInput = document.querySelector(".form-input")
let elPerson = document.querySelector(".time-person")
let elBike = document.querySelector(".time-bike")
let elCar = document.querySelector(".time-car")
let elPLane = document.querySelector(".time-plane")

let personSpeed = 3.6;
let bikeSpeed = 20.1;
let carSpeed = 70;
let planeSpeed = 800;

function checkTime(dis, speed) {
	let hour = Math.floor(dis / speed);
	let minutes = Math.floor((dis / speed - hour) * 60);
	let seconds = Math.floor(((dis / speed - hour) * 60 - minutes) * 60);

	return `Soat:${hour} Minut:${minutes} Sekund:${seconds}`;
}

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	let elInputValue = +elInput.value;

	jsMessage.style.color = 'red';
	elInput.value = '';
	if (elInputValue <= 0) {
        elPerson.textContent = '';
        elBike.textContent = '';
        elCar.textContent = '';
        elPLane.textContent = ''; 
		jsMessage.textContent = 'Aka iltimos 0 dan katta son kiriting!';
		return;
	}
	if (isNaN(elInputValue)) {
		jsMessage.textContent = 'Aka iltimos raqam kiriting!';
		return;
	}

	jsMessage.textContent = '';

	elPerson.textContent = checkTime(elInputValue, personSpeed);
	elBike.textContent = checkTime(elInputValue, bikeSpeed);
	elCar.textContent = checkTime(elInputValue, carSpeed);
	elPLane.textContent = checkTime(elInputValue, planeSpeed);
});