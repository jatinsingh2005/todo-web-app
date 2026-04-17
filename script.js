function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task;

    span.onclick = function () {
        span.style.textDecoration = "line-through";
    };

    let delBtn = document.createElement("button");
    delBtn.textContent = "X";

    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
