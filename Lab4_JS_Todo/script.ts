let tasks: string[] = [];

const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addbtn = document.getElementById("addTaskBtn")!;

addbtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return;
    tasks.push(text);
    taskInput.value = "";
    renderTasks();
});

function renderTasks(): void {
    const taskList = document.getElementById("taskList");
    if (taskList) {
        taskList.innerHTML = "";
        for (let i = 0; i < tasks.length; i++) {
            const li = document.createElement("li");
            li.textContent = tasks[i];
            taskList.appendChild(li);
        }
    }
}
