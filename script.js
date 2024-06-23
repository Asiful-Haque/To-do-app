const addTaskBtn = document.getElementById("addTask");
const BtnTxt = addTaskBtn.innerText;
const addTaskTextField = document.getElementById("userTask");
const dynamicDisplay = document.getElementById("dynamicDisplay");
let editId = null;

addTaskBtn.addEventListener("click", clickSubmit);

let userArray = [];
//Now after creating array i have to take the previous data before
// the loading. otherwise it will vanish.
let prevDataStr = localStorage.getItem("task");
if (prevDataStr != null) {
    userArray = JSON.parse(prevDataStr);
    // console.log(userArray);
}
display();

function clickSubmit() {
    const taskData = addTaskTextField.value;

    if (editId != null) {
        userArray.splice(editId, 1, { Task_data: taskData }); //editing when clicked Save changes
        editId = null;
        addTaskBtn.innerText = BtnTxt;
    } else {
        userArray.push({ Task_data: taskData }); //inserting when clicked add task
    }

    saveInfo(userArray);
    addTaskTextField.value = "";
    display();
}

function saveInfo(userArray) {
    let str = JSON.stringify(userArray);
    localStorage.setItem("task", str);
}

function display() {
    let statement = "";
    userArray.forEach((val, index) => {
        statement += `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${val.Task_data}</td>
                        <td>
                            <i class="btn text-white fa fa-edit btn-info mx-2" onclick="editinfo(${index})"></i>
                            <i class="btn text-white fa fa-trash btn-danger" onclick="deleteinfo(${index})"></i>
                        </td>
                      </tr>`;
    });
    dynamicDisplay.innerHTML = statement;
}

function editinfo(id) {
    editId = id;
    addTaskTextField.value = userArray[editId].Task_data;
    addTaskBtn.innerText = "Save Changes";
}

function deleteinfo(id) {
    userArray.splice(id, 1);
    saveInfo(userArray);
    display();
}
