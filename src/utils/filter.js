const setFilterOptionInStorage = (filterOption) => {
  localStorage.setItem("filterOption", JSON.stringify(filterOption));
};

const filterAndDisplay = (tasks, updateTask, completionStatus) => {
  tasks.forEach((task) => {
    if (task.completed === completionStatus) {
      task.isDisplayed = true;
      updateTask(task);
    } else {
      task.isDisplayed = false;
      updateTask(task);
    }
  });
};

const handleFilterChange = (tasks, updateTask, filterOption) => {
  setFilterOptionInStorage(filterOption);
  switch (filterOption) {
    case "Completed":
      filterAndDisplay(tasks, updateTask, true);
      tasks.filter((task) => task.completed);
      break;
    case "Incompleted":
      filterAndDisplay(tasks, updateTask, false);
      break;
    default:
      tasks.forEach((task) => {
        task.isDisplayed = true;
        updateTask(task);
      });
  }
};

export { setFilterOptionInStorage, filterAndDisplay, handleFilterChange };
