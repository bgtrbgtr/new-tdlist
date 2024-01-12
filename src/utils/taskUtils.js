const addTaskOnEdit = (task) => {
  localStorage.setItem("onEdit", JSON.stringify(task));
};

export { addTaskOnEdit };
