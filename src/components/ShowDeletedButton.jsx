import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const ShowDeletedButton = () => {
  const { setShowDeleted } = useContext(AppContext);

  const handleClick = () => {
    setShowDeleted((state) => !state);
  };

  return (
    <button
      type="button"
      aria-label="Show deleted items"
      onClick={handleClick}
      className="w-10 h-10 ml-auto bg-[length:20px_20px] bg-[url(./assets/trashbin.svg)] bg-center bg-no-repeat rounded-full bg-white border-2 border-slate-200 p-1.5 hover:bg-blue-300 hover:border-slate-400 active:bg-blue-400"
    ></button>
  );
};

export default ShowDeletedButton;
