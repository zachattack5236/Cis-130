/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Zachary Carpenter
      Date:   09/28/2025

      Filename: project02-01.js
 */
function FahrenheitToCelsius(degree) {return (degree - 32) / 1.8;}
function CelsiusToFahrenheit(degree) {return (degree * 1.8) + 32;}
document.getElementById("cValue").onchange = function() {
let cDegree = parseFloat(document.getElementById("cValue").value);
document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);};
document.getElementById("fValue").onchange = function() {
let fDegree = parseFloat(document.getElementById("fValue").value);
document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);};
