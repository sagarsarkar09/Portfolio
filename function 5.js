// Goal: Build a basic To-Do list using objects and arrays (no UI).
// Each To-Do item should be an object:
// {
//   task: "Buy groceries",
//   isCompleted: false
// }

// Features to Implement:
//     addTask(task): Adds a new task.
//     removeTask(task): Removes a task.
//     markComplete(task): Marks a task as completed.
//     listTasks(): Lists all tasks, showing completed ones differently.

function createTodoList() {
  let tasks = [];
  
  function addTask(task) {
    const newTask ={
        task: task,
        iscompleted: false
    }
    tasks.push(newTask);
    console.log(`Task added: ${task}`);

  }

  function removeTask(task) {

  }

  function markComplete(task) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].task === task) {
        tasks[i].iscompleted = true;
        console.log(`Task marked as completed: ${task}`);
        return;
      }
    }
  }

  function listTasks() {
  }

  return {
    addTask,
    removeTask,
    markComplete,
    listTasks
  };
}

const todo = createTodoList();
todo.addTask("Buy groceries");
todo.addTask("Do laundry");
todo.addTask("Clean room");
// todo.listTasks();
// console.log("-----");
// todo.markComplete("Buy groceries");
// todo.listTasks();
// console.log("-----");
// todo.removeTask("Do laundry");
// todo.listTasks();