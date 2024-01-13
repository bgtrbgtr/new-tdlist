import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import incompleteImgUrl from "../assets/incomplete.svg";
import completeImgUrl from "../assets/complete.svg";
import { Button } from ".";

const CompleteButton = ({ task }) => {
  const { updateTask } = useContext(AppContext);
  const filterOption = JSON.parse(localStorage.getItem("filterOption"));

  const handleStatusChange = (task) => {
    if (filterOption !== "Default") {
      task.isDisplayed = !task.isDisplayed;
    }

    task.completed = !task.completed;
    return task;
  };

  const handleOnClick = () => {
    updateTask(handleStatusChange(task));
  };

  return (
    <Button
      ariaLabel={"Complete task"}
      onClick={handleOnClick}
      img={`${task.completed ? incompleteImgUrl : completeImgUrl}`}
    />
  );
};

export default CompleteButton;
