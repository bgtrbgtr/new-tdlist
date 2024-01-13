const addTaskOnEdit = (task) => {
  localStorage.setItem("onEdit", JSON.stringify(task));
};

const taskFunctions = (tasks, setTasks, deletedTasks, setDeletedTasks) => {
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
    setDeletedTasks([...deletedTasks, taskToDelete]);
  };

  const removePermanently = (id) => {
    setDeletedTasks(deletedTasks.filter((task) => task.id !== id));
  };

  const restoreTask = (taskToRestore) => {
    setDeletedTasks(
      deletedTasks.filter((task) => task.id !== taskToRestore.id)
    );
    addTask(taskToRestore);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return { addTask, removeTask, updateTask, removePermanently, restoreTask };
};

const handleStatusChange = (task, filterOption) => {
  if (filterOption !== "Default") {
    task.isDisplayed = !task.isDisplayed;
  }

  task.completed = !task.completed;
  return task;
};

export { addTaskOnEdit, taskFunctions, handleStatusChange };
