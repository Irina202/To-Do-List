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
const errMsg = document.querySelector("#errMsg");

function validateNamInput() {
  if (nameInput.value.length < 8) {
    errMsg.innerText = "Length should be longer than 8";
    errMsg.style.color = "red";
  } else {
    errMsg.innerText = "";
  }
}

submit.addEventListener("click", validateNamInput);
