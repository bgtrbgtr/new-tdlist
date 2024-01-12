import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { addTaskOnEdit } from "../utils/taskUtils";
import editImgUrl from "../assets/edit.svg";

const EditButton = ({ task }) => {
  const { setTaskOnEdit } = useContext(AppContext);

  return (
    <button
      type="button"
      aria-label={"Edit item"}
      className="h-8 w-8 rounded-full bg-white p-1.5 hover:bg-blue-300 active:bg-blue-400"
      onClick={() => {
        addTaskOnEdit(task);
        setTaskOnEdit(task);
      }}
    >
      <img className="h-4 w-5" src={`${editImgUrl}`} />
    </button>
  );
};

export default EditButton;
