import { useAddTask } from "../hooks";

const AddTask = () => {
  const {
    taskName,
    setTaskName,
    taskDescription,
    handleNewTodoInput,
    handleNewTaskSubmit,
  } = useAddTask();

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
          onClick={(e) => handleNewTaskSubmit(e)}
        >
          {`Add new item`}
        </button>
      </form>
    </div>
  );
};

export default AddTask;
