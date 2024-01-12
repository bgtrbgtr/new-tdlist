import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const AddTask = () => {
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

  return (
    <div className="mb-2 flex flex-col sm:bottom-4 sm:left-10 sm:right-10 md:fixed">
      <form
        name="AddNewTodo"
        className="flex flex-col justify-between gap-2 rounded-md bg-gray-200/75 p-2 sm:flex-row"
      >
        <input
          type="text"
          form="AddNewTodo"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
          placeholder="Task name"
          className="rounded-md p-1 align-top text-sm outline-none placeholder:font-thin placeholder:text-gray-600 sm:w-3/12"
        ></input>
        <textarea
          id="textarea"
          placeholder="Brief description"
          value={taskDescription}
          onChange={(e) => {
            handleNewTodoInput(e);
          }}
          className="h-10 resize-none overflow-y-auto whitespace-pre-wrap break-words rounded-md p-1 pt-[10px] text-sm outline-none placeholder:font-thin placeholder:text-gray-600 sm:w-6/12"
        ></textarea>
        <button
          type="submit"
          aria-label={`Add new item to list`}
          className="mx-auto rounded-md bg-white p-2 text-xs font-light hover:bg-blue-600 hover:text-white active:bg-blue-700 sm:w-3/12"
          onClick={(e) => {
            e.preventDefault();
            handleNewTaskSubmit();

            // Return textarea height to default value in case it was increased by input
            const textarea = document.querySelector("#textarea");
            textarea?.setAttribute("style", "height: 40px");

            // Set inputs to initial values
            setTaskName("");
            setTaskDescription("");
          }}
        >
          {`Add new item`}
        </button>
      </form>
    </div>
  );
};

export default AddTask;
