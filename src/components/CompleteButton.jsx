import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import incompleteImgUrl from "../assets/incomplete.svg";
import completeImgUrl from "../assets/complete.svg";

const CompleteButton = ({ task }) => {
  const { updateTask } = useContext(AppContext);

  const handleStatusChange = (task) => {
    task.completed = !task.completed;
    return task;
  };
  return (
    <button
      type="button"
      onClick={() => {
        updateTask(handleStatusChange(task));
      }}
      aria-label={"Complete task"}
      className="h-8 w-8 rounded-full bg-white p-1.5 hover:bg-blue-300 active:bg-blue-400"
    >
      <img
        className="h-5 w-5"
        src={task.completed ? `${incompleteImgUrl}` : `${completeImgUrl}`}
      />
    </button>
  );
};

export default CompleteButton;
