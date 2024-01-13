import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const useAddTask = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const { addTask } = useContext(AppContext);

  //limit the number of lines in a textarea while changing value
  const handleNewTodoInput = (event) => {
    event.target.style.height = "auto";
    event.target.style.height =
      Math.min(
        event.target.scrollHeight - 14,
        5 * parseInt(getComputedStyle(event.target).lineHeight)
      ) + "px";

    setTaskDescription(event.target.value);
  };

  const handleNewTaskSubmit = () => {
    const newTask = {
      id: Math.random().toString(36).substring(2, 9),
      title: taskName,
      description: taskDescription,
      completed: false,
      isDisplayed: true,
    };

    addTask(newTask);
  };

  return {
    taskName,
    setTaskName,
    taskDescription,
    setTaskDescription,
    handleNewTodoInput,
    handleNewTaskSubmit,
  };
};

export default useAddTask;
