import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import DeletedItem from "./DeletedItem";
import closeImgUrl from "../assets/close.svg";

const DeletedList = () => {
  const { deletedTasks, setShowDeleted } = useContext(AppContext);

  const handleListClose = () => {
    setShowDeleted(false);
  };

  return (
    <div className="mx-auto my-auto flex w-10/12 flex-col rounded-md bg-gray-200 p-3 md:w-8/12 lg:w-8/12">
      <button
        className="ml-auto w-5"
        aria-label={"Close modal"}
        type="button"
        onClick={handleListClose}
      >
        <img className="h-5 w-5" src={closeImgUrl}></img>
      </button>
      <h4 className="text font-light">Deleted tasks:</h4>
      <div className="bg-white p-2 flex flex-col gap-3 rounded-md mt-3">
        {deletedTasks.length ? (
          deletedTasks.map((task) => {
            return <DeletedItem task={task} key={task.id} />;
          })
        ) : (
          <p className="text-xl font-extralight text-black">
            You have no deleted tasks.
          </p>
        )}
      </div>
    </div>
  );
};

export default DeletedList;
