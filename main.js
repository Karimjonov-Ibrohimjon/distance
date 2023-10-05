let elForm = document.querySelector(".site-form")
let elInput = document.querySelector(".form-input")
let elPerson = document.querySelector(".time-person")
let elBike = document.querySelector(".time-bike")
let elCar = document.querySelector(".time-car")
let elPLane = document.querySelector(".time-plane")

let personSpeed = 3.6;
let bikeSpeed = 20;
let carSpeed = 70;
let planeSpeed = 800;

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    let distance = Number(elInput.value)

    if(distance <= 0 ){
        alert("Kiritilgan masofa 0 dan katta bo'lishi kerak!")
    }

    let personTime = distance / personSpeed
    let personMinutes = distance % personSpeed
    let bikeTime = distance / bikeSpeed
    let bikeMinutes = distance % bikeSpeed
    let carTime = distance / carSpeed
    let carMinutes = distance % carSpeed
    let planeTime = distance / planeSpeed
    let planeMinutes = distance % planeSpeed

    elPerson.textContent = `${Math.ceil(personTime)} H ${Math.ceil(personMinutes / personSpeed * 60)} M`
    elBike.textContent = `${Math.ceil(bikeTime)} H ${Math.ceil(bikeMinutes / bikeSpeed * 60)} M`
    elCar.textContent =  `${Math.ceil(carTime)} H ${Math.ceil(carMinutes / carSpeed * 60)} M`
    elPLane.textContent =  `${Math.ceil(planeTime)} H ${Math.ceil(planeMinutes / planeSpeed * 60)} M`

})