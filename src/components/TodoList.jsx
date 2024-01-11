import { TodoItem } from ".";

const TodoList = (todoItems) => {
  return (
    <div className="sm:mb-20">
      <section className="mt-16 flex flex-col justify-between gap-5 sm:mt-3">
        <div className="w-full overflow-y-auto">
          {todoItems.length > 0 ? (
            <div
              className={`mb-3 rounded-md bg-gray-100/75 ${
                todoItems.find((todo) => todo.isDisplayed) ? "p-2" : ""
              }`}
            >
              {todoItems.map((todo) => {
                if (todo.isDisplayed) {
                  return <TodoItem todo={todo} key={todo.id} />;
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
