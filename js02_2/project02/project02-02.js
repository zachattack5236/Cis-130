/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Zachary Carpenter
      Date:   09/28/2025

      Filename: project02-02.js
 */
 function verifyForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  // Check if all fields are filled using the && operator
  let message = (name && email && phone) ? "Thank you!" : "Please fill in all fields";
  
  window.alert(message);}

document.getElementById("submit").addEventListener("click", verifyForm);
