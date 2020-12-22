//------------
"use strict";
//------------

//user can only login with these names.
let usernames = ["yazeen", "ec", "softhouse"];

//Declared Global variables for form and input
let inForm;
let input;

//Function that calls all other functions in order
//--Don't modify--
function init() {
  initLoginForm();
  initLabel();
  initInput();
  initButton();
}

function initLoginForm() {
  //Add code here to:
  //create and add form element to the Dom.

  inForm = document.createElement("form");

  document.body.appendChild(inForm);
}

function initLabel() {
  //Add code here to:
  //create label element and set the lable to "username" (TIP: use .textContent).
  //Add it to the form element. (TIP: use .appendChild).

  let label = document.createElement("label");

  label.textContent = "Username";

  inForm.appendChild(label);
}

function initInput() {
  //Add code here to:
  //create input element and set it to be requried (TIP: use .required = true).
  //Add it to the form element. (TIP: use .appendChild).

  input = document.createElement("input");

  input.required = true;

  inForm.appendChild(input);
}

function initButton() {
  //create button element and set the text to "login" (TIP: use .textContent)
  ////Add it to the form element. (TIP: use .appendChild).
  //Add click eventListener for button and call validateLoginInfo function inside it.
  //if validateLoginInfo is true alert user with "Welcome" text.
  //if validateLoginInfo is false add border style to the input element: "3px solid red". (TIP: use .style.border).

  let formButton = document.createElement("button");

  formButton.textContent = "Login";
 inForm.appendChild(formButton);

  formButton.addEventListener("click", function () {
validateLoginInfo();
  })
}

function validateLoginInfo() {
  //Get the input using form input element (TIP: use .value)
  //if the username is in the usernames array return true if not return false.

  if (usernames.includes(input.value)) {
    alert("Welcome");
    return;
  } else {
   input.style.border ="3px solid red";
    return false;
  }
}

//Write code here to call the init function only after the dom has been loaded (TIP: check "DOMContentLoaded" event)
window.addEventListener("DOMContentLoaded", (e) => {
  init();
});