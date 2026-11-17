function addTask() {
    let input = document.getElementById("task");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task + " <button onclick='this.parentElement.remove()'>Delete</button>";

    li.onclick = function(e) {
        if (e.target.tagName !== "BUTTON") {
            li.style.textDecoration = "line-through";
        }
    };

    document.getElementById("list").appendChild(li);

    input.value = "";
}