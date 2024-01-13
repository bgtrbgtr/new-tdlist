import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Button } from ".";
import delImgUrl from "../assets/trashbin.svg";

const DeleteButton = ({ id }) => {
  const { removeTask } = useContext(AppContext);

  return (
    <Button
      onClick={() => removeTask(id)}
      ariaLabel={"Delete task from list"}
      img={delImgUrl}
    />
  );
};

export default DeleteButton;
