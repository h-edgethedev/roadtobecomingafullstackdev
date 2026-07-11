const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const taskData = JSON.parse(localStorage.getItem("data"))||[]
let currentTask = {}
const removeSpecialChars = (val) => {
    return val.trim().replace(/[^a-zA-Z0-9\-\s]/g, "")
}
const addOrUpdateTask = () => {
    if (!titleInput.value.trim()) {
        alert("Please provide a title")
        return
    }
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id)
    const taskObj = {
        id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value
    }

    if (dataArrIndex === -1) {
        taskData.unshift(taskObj)
    }
    else {
        taskData[dataArrIndex] = taskObj
    }
    localStorage.setItem("data", JSON.stringify(taskData))
    updateTaskContainer()
    reset()
}

openTaskFormBtn.addEventListener("click", () => {   
    taskForm.classList.toggle("hidden")
})

const updateTaskContainer = () => {
    tasksContainer.innerHTML = ""
    taskData.forEach(
        ({ id, title, date, description }) => {
            tasksContainer.innerHTML += `
        <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button type="button"  onclick="editTask(this)" class="btn">Edit</button>
          <button type="button"  onclick="deleteTask(this)" class="btn">Delete</button>
        </div>
      `
        }
    )
}

if (taskData.length) {
    updateTaskContainer()
}

function editTask(buttonEl) {
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    )
    currentTask = taskData[dataArrIndex]
    titleInput.value = currentTask.title
    descriptionInput.value = currentTask.description
    dateInput.value = currentTask.date
    addOrUpdateTaskBtn.innerText = "Update Task"
    taskForm.classList.toggle("hidden")
    localStorage.setItem("data", JSON.stringify(taskData))
}

function deleteTask(buttonEl) {
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    )
    buttonEl.parentElement.remove()
    taskData.splice(dataArrIndex, 1)
    localStorage.setItem("data", JSON.stringify(taskData))
}

const reset = () => {
    titleInput.value = ""
    dateInput.value = ""
    descriptionInput.value = ""
    taskForm.classList.toggle("hidden");
    currentTask = {};
    addOrUpdateTaskBtn.textContent = "Add Task"
}

closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value
    const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description
    if (formInputsContainValues && formInputValuesUpdated) {
        confirmCloseDialog.showModal()
    }
    else {
        reset()
    }
})

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close()
    reset()
})

cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close()
})

taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    addOrUpdateTask()
})