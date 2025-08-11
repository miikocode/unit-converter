/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let numberInput = document.getElementById("number-input")
let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")
let convertBtn = document.getElementById("convert-btn")
let meterFeet = 3.281
let feetMeter = 1 / 3.281
let litreGallon = 0.264
let gallonLitre = 1 / 0.264
let kilogramPound = 2.204
let poundKilogram = 1 / 2.204


convertBtn.addEventListener("click", function() {
  let number = Number(numberInput.value);
  lengthResult.textContent = `${number} meter = ${(number * meterFeet).toFixed(3)} feet | ${number} feet = ${(number * feetMeter).toFixed(3)} meter`;
  volumeResult.textContent = `${number} litre = ${(number * litreGallon).toFixed(3)} gallon | ${number} gallon = ${(number * gallonLitre).toFixed(3)} litre`;
  massResult.textContent = `${number} kilogram = ${(number * kilogramPound).toFixed(3)} pound | ${number} pound = ${(number * gallonLitre).toFixed(3)} kilogram`
})

    