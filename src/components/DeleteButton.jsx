import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import delImgUrl from "../assets/trashbin.svg";

const DeleteButton = ({ id }) => {
  const { removeTask } = useContext(AppContext);

  return (
    <button
      type="button"
      aria-label={"Delete task from list"}
      className="h-8 w-8 rounded-full bg-white p-1.5 hover:bg-blue-300 active:bg-blue-400"
      onClick={() => {
        removeTask(id);
      }}
    >
      <img className="h-5 w-5" src={delImgUrl} />
    </button>
  );
};

export default DeleteButton;
