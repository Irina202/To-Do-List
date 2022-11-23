window.onload = function () {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
  document.getElementById("date-title").innerHTML = `Date: ${currentDate}`;
};

// Validations

const nameInput = document.querySelector("#nameInput");
const submit = document.querySelector("#submit");
const nameErr = document.querySelector(".nameErr");
const descErr = document.querySelector(".descErr");
const descriptionInput = document.getElementById("descriptionInput");
const assignTo = document.getElementById("assignInput");
const dueDate = document.getElementById("date");
const taskStatus = document.getElementById("status-id");

function validateNameInput() {
  if (nameInput.value.length < 8) {
    nameErr.innerText = "Length should be longer than 8";
    nameErr.style.color = "red";
  } else {
    nameErr.innerText = "";
  }
}

function validateDescriptonInput() {
  if (nameInput.value.length < 15) {
    descErr.innerText = "Length should be longer than 15";
    descErr.style.color = "red";
  } else {
    descErr.innerText = "";
  }
}

function isDueDateValid() {
  const dateRaw = document.querySelector("#date").value;
  return !!dateRaw && new Date(dateRaw) > new Date();
}

function ddAssign() {
  let optionSelectedText = assignTo.options[assignTo.selectedIndex].text;
  console.log("This task assign to : " + optionSelectedText);
}

function ddStatus() {
  let optionSelectedText = taskStatus.options[taskStatus.selectedIndex].text;
  console.log("Status : " + optionSelectedText);
}

function inputPlaceholders() {
  nameInput.placeholder = "Type your name";
  descriptionInput.placeholder = "Type your description";
}
inputPlaceholders();

submit.addEventListener("click", () => {
  ddAssign();
  ddStatus();

  const isNameValid = validateNameInput();
  const isDescriptionValid = validateDescriptonInput();
  const dueDateValid = isDueDateValid();

  const dueDateErr = document.querySelector(".date-err");
  if (!dueDateValid) {
    dueDateErr.classList.remove("d-none");
  } else {
    dueDateErr.classList.add("d-none");
  }

  const formValid = isNameValid && isDescriptionValid && dueDateValid;

  if (formValid) {
    // Dodaj novu karticu
  }
});
