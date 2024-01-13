import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Button } from ".";
import { addTaskOnEdit } from "../utils/taskUtils";
import editImgUrl from "../assets/edit.svg";

const EditButton = ({ task }) => {
  const { setTaskOnEdit } = useContext(AppContext);

  const handleClick = () => {
    addTaskOnEdit(task);
    setTaskOnEdit(task);
  };

  return (
    <Button onClick={handleClick} ariaLabel={"Edit item"} img={editImgUrl} />
  );
};

export default EditButton;
