var getInp = document.getElementById("message-input");

function sendFunc() {
    var inputValue = getInp.value.trim();

    if (inputValue === "") {
        alert("Input field is empty. Please enter something.");
        return;
    }

    var getUl = document.getElementById("ul");
    var li = document.createElement("li");
    var liText = document.createTextNode(getInp.value);
    li.appendChild(liText);

    li.setAttribute("class", "li-style");

    var buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "li-buttons");

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.setAttribute("onclick", "deleteFunc(this)");
    buttonContainer.appendChild(deleteButton);

    var editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-button");
    editButton.innerHTML = '<i class="fa-solid fa-edit"></i>';
    editButton.setAttribute("onclick", "editFun(this)");
    buttonContainer.appendChild(editButton);

    li.appendChild(buttonContainer);

    getUl.appendChild(li);
    getInp.value = '';
}

function deleteFunc(e) {
    e.parentNode.parentNode.remove();
}

function editFun(e) {
    var p = prompt("Enter Edit value", e.parentNode.parentNode.firstChild.nodeValue);
    e.parentNode.parentNode.firstChild.nodeValue = p;
}
