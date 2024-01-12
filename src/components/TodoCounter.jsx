import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const TodoCounter = () => {
  const { tasks } = useContext(AppContext);
  const completed = tasks.filter((task) => task.completed);

  return (
    <p className="ml-auto text-3xl font-extralight text-white sm:ml-3">{`${completed.length}/${tasks.length}`}</p>
  );
};

export default TodoCounter;
