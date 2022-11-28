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
const reset = document.getElementById("#reset");
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
  console.log(nameInput.value)
}

function validateDescriptonInput() {
  if (descriptionInput.value.length < 15) {
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

function inputPlaceholders() {
  nameInput.placeholder = "Type your name";
  descriptionInput.placeholder = "Type your description";
  dueDate.placeholder = "MM/DD/YYY"
}
inputPlaceholders();

function getDate () {
  submit.addEventListener("click", () => {

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
    console.log(dueDate.value)
  });
}
getDate()

//Adding a class


submit.addEventListener("click", () => {
  let taskName = nameInput.value;
  let description = descriptionInput.value;
  let dueData = dueDate.value;
  let assignName = assignTo.options[assignTo.selectedIndex].text;
  console.log(assignName)
  let optionSelectedText = taskStatus.options[taskStatus.selectedIndex].text;
  console.log(optionSelectedText)

  // let id = Math.random().toString(16).slice(2);
  // console.log(id)


function addItem(item){
  const itemHTML = '<div class="card">\n' +
  '<div class="card-body" id='+item.id+'>\n' +
   ' <h5 class="card-name"><strong>Task name:</strong>'+item.name+'</h5>\n' +
   ' <h6 class="card-date mb-2 text-muted">Due Date: '+item.dueDate+'</h6>\n' +
   '<p class="task-status output"><strong>Assign to : '+item.assign+'</strong></p>\n' +
   '<div class="card-scroll">\n'+
    '<p class="card-description">\n' +
     ' <strong>Description:</strong>\n' +
     ' '+item.description+'\n' +
   ' </p>\n' +
   '  </div>\n' +
   '<p class="task-status"><strong>Status : '+item.status+'</strong></p>\n' +
   '<button type="button" class="btn btn-outline-success">\n' +
   ' Done\n' +
 ' </button>\n' +
    '<button type="button" class="btn btn-outline-danger">\n' +
     ' Delete\n' +
   ' </button>\n' +
'  </div>\n' +
'</div>';
  const itemsContainer = document.getElementById("additem");
  itemsContainer.innerHTML += itemHTML;
}

addItem({
   id : id,
  'name': taskName,
  'description': description,
  'dueDate' : dueData,
  'assign' : assignName ,
  'status' : optionSelectedText,
   })



// let toarray = [];
// let addItemToArray = {
//   id : id,
//  'name': taskName,
//  'description': description,
//  'dueDate' : dueData,
//  'assign' : assignName ,
//  'status' : optionSelectedText,
//   }

//   toarray.push(addItemToArray)

//   console.log(toarray)

//  const addTasks = (task) => {
//   const updatedTodoList = toDoList.map((todo) => {
//      if(todo.id === task.id){
//       todo.tasks.push(task);
//      }
//      return todo;
//   })
//   setToDoList(updatedTodoList);
// }

   // localStorage.setItem("todoarray", JSON.stringify(arr));
    //let storedTodos = JSON.parse(localStorage.getItem("todoarray"));

    //console.log(storedTodos)
  })
  // window.addEventListener("load", () => loadPage());
  // function loadPage() {
  //     function fetchData () {
  //         fetch("https://jwd09-task-api.herokuapp.com")
  //         .then(resp => resp.json())
  //         .then(data => console.log(data))
  //         .then(err => console.log(err))
  //     }
  //     fetchData()
  // }







