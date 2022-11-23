window.onload = function () {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
  document.getElementById("date").innerHTML = `Date: ${currentDate}`;
};

// Validations

const nameInput = document.querySelector("#nameInput");
const submit = document.querySelector("#submit");
const nameErr = document.querySelector(".nameErr");
const descErr = document.querySelector(".descErr");
const descriptionInput = document.getElementById('descriptionInput');
const assignTo = document.getElementById('assignInput');
const dueDate = document.getElementById('date');
const taskStatus = document.getElementById('status-id');

function validateNamInput() {
  if (nameInput.value.length < 8) {
    nameErr.innerText = "Length should be longer than 8";
    nameErr.style.color = "red";
  } else {
    nameErr.innerText = "";
  }
}

submit.addEventListener("click", validateNamInput);

function validateDescriptonInput() {
  if (nameInput.value.length < 15) {
    descErr.innerText = "Length should be longer than 15";
    descErr.style.color = "red";
  } else {
    descErr.innerText = "";
  }
}
submit.addEventListener("click", validateDescriptonInput);

function ddAssign() {
  let optionSelectedText = assignTo.options[assignTo.selectedIndex].text;
      console.log("This task assign to : " + optionSelectedText);
}
submit.addEventListener("click", ddAssign);

function ddStatus() {
  let optionSelectedText = taskStatus.options[taskStatus.selectedIndex].text;
      console.log("Status : " + optionSelectedText); ;
}
submit.addEventListener("click", ddStatus);

function inputPlaceholders () {
  nameInput.placeholder = 'Type your name';
  descriptionInput.placeholder = 'Type your description';
}
inputPlaceholders()