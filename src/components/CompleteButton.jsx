import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Button } from ".";
import { handleStatusChange } from "../utils/taskUtils";
import incompleteImgUrl from "../assets/incomplete.svg";
import completeImgUrl from "../assets/complete.svg";

const CompleteButton = ({ task }) => {
  const { updateTask } = useContext(AppContext);
  const filterOption = JSON.parse(localStorage.getItem("filterOption"));

  const handleOnClick = () => {
    updateTask(handleStatusChange(task, filterOption));
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
