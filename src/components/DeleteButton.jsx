import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Button } from ".";
import trashbinImgUrl from "../assets/trashbin.svg";

const DeleteButton = ({ task }) => {
  const { removeTask } = useContext(AppContext);

  return (
    <Button
      onClick={() => removeTask(task)}
      ariaLabel={"Delete task from list"}
      img={trashbinImgUrl}
    />
  );
};

export default DeleteButton;
