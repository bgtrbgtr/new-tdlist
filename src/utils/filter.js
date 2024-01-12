const setFilterOptionInStorage = (filterOption) => {
  localStorage.setItem("filterOption", JSON.stringify(filterOption));
};

const filterAndDisplay = (tasks, updateTask, completionStatus) => {
  tasks.forEach((task) => {
    if (task.completed === completionStatus) {
      task.isDisplayed = false;
      updateTask(task);
    } else {
      task.isDisplayed = true;
      updateTask(task);
    }
  });
};

const handleFilterChange = (tasks, updateTask, filterOption) => {
  setFilterOptionInStorage(filterOption);
  switch (filterOption) {
    case "Completed":
      filterAndDisplay(tasks, updateTask, false);
      break;
    case "Incompleted":
      filterAndDisplay(tasks, updateTask, true);
      break;
    default:
      tasks.forEach((task) => {
        task.isDisplayed = true;
        updateTask(task);
      });
  }
};

export { setFilterOptionInStorage, filterAndDisplay, handleFilterChange };
