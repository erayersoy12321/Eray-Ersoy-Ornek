let ul = document.getElementById("task-list");

let gorevListesi =
    [
        { "id": 1, "gorevadi": "Görev 1" },
        { "id": 2, "gorevadi": "Görev 2" },
        { "id": 3, "gorevadi": "Görev 3" },
        { "id": 4, "gorevadi": "Görev 4" },
    ];

let editId;
let isEditTask = false;
taskInput = document.querySelector("#txtTaskName");
const clearBtn = document.querySelector("#btnClear");

displayTask();

function displayTask() {
    ul.innerHTML = "";

    if (gorevListesi.length == 0) {
        ul.innerHTML = "<p class='p-4 m-0'>Görev Listeniz boş.</p>"
    } {
        for (let gorev of gorevListesi) {

            let li = `
<li class="task list-group-item">
<div class="form-check">
    <input type="checkbox" id="${gorev.id}" class="form-check-input">
    <label for="${gorev.id}" class="form-check-label">${gorev.gorevadi}</label>
</div>
<div class="dropdown">
    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fa-solid fa-ellipsis"></i>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
        <li><a onclick='editTask(${gorev.id},"${gorev.gorevadi}")" class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle</a></li>
    </ul>
</div>
</li>
`;

            ul.insertAdjacentHTML("beforeend", li);
        }
    }


}




// document.querySelector("#task-list").children[0].remove();


// document.querySelector("#task-list").children[2].remove();

// document.querySelector("#task-list").removeAttribute("class");
// document.querySelector("#task-list").children[0].removeAttribute("class");
// let sonuc = document.querySelector("#task-list").getAttribute("class");
// document.querySelector("#task-list").setAttribute("class","asdasdasd");
// document.querySelector("#task-list").children[0].classList.add("bg-danger");
// document.querySelector("#task-list").children[0].classList.remove("bg-danger");
// let sonuc = document.querySelector("#task-list").children[0].classList.contains("bg-danger");
// console.log(sonuc);

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
document.querySelector("#btnAddNewTask").addEventListener("keypress", function () {
    if (event.key == "Enter") {
        document.querySelector("#btnAddNewTask").click();
    }
});

function newTask(event) {



    if (taskInput.value == "") {
        alert("Bir değer girmelisiniz..");
    }
    else {

        if (!isEditTask) {
            gorevListesi.push({ "id": gorevListesi.length + 1, "gorevadi": taskInput.value });

        }
        else {

        }
        taskInput.value = "";
        displayTask();
    }

    event.preventDefault();
};

function deleteTask(id) {
    let deletedId;
    // for(let index in gorevListesi){
    //     if(gorevListesi[index].id == id){
    //         deletedId = index;
    //     }
    // }

    deletedId = gorevListesi.find(function (gorev) {
        return gorev.id == id;
    });

    gorevListesi.splice(deletedId, 1);
    displayTask();

}

function editTask(taskId, taskName) {
    editId = taskId;
    isEditTask = true;
    taskInput.value = taskName;
    taskInput.focus();
    taskInput.classList.add("active");

    console.log("edit id:", editId);
    console.log("edit mode")
}

clearBtn.addEventListener("click", function () {
    gorevListesi.splice(0, gorevListesi.length);
    displayTask();
});