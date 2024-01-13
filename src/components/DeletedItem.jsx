import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import trashbinImgUrl from "../assets/trashbin.svg";
import restoreUmgUrl from "../assets/restore.svg";
import { Button } from ".";

const DeletedItem = ({ task }) => {
  const { removePermanently, restoreTask } = useContext(AppContext);

  return (
    <div className="bg-white flex gap-5 border-b border-gray-300 last:border-none pb-2 last:pb-0">
      <span className="text-middle w-fit max-w-full truncate font-medium mr-auto">
        {task.title}
      </span>
      <Button
        onClick={() => restoreTask(task)}
        ariaLabel={"Restore from trashbin"}
        img={restoreUmgUrl}
      />
      <Button
        onClick={() => removePermanently(task.id)}
        ariaLabel={"Delete permanently"}
        img={trashbinImgUrl}
      />
    </div>
  );
};

export default DeletedItem;
