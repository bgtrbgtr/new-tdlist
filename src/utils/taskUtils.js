const addTaskOnEdit = (task) => {
  localStorage.setItem("onEdit", JSON.stringify(task));
};

const taskFunctions = (tasks, setTasks) => {
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
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

  return { addTask, removeTask, updateTask };
};

export { addTaskOnEdit, taskFunctions };
