import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { TodoItem } from ".";

const TodoList = () => {
  const { tasks } = useContext(AppContext);

  return (
    <div className="sm:mb-20">
      <section className="mt-16 flex flex-col justify-between gap-5 sm:mt-3">
        <div className="w-full overflow-y-auto">
          {tasks.length ? (
            <div
              className={`mb-3 rounded-md bg-gray-100/75 ${
                tasks.find((task) => task.isDisplayed) ? "p-2" : ""
              }`}
            >
              {tasks.map((task) => {
                if (task.isDisplayed) {
                  return <TodoItem task={task} key={task.id} />;
                } else {
                  return null;
                }
              })}
            </div>
          ) : (
            <p className="text-2xl font-extralight text-white">
              Your list is empty
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default TodoList;
