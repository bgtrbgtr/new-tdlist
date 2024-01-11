// import { CompleteButton, DeleteButton, EditButton } from ".";

const TodoItem = (todo) => {
  return (
    <div
      key={todo.id}
      className={`${
        todo.completed
          ? "bg-gray-100 bg-[length:200px_100px] bg-center bg-no-repeat p-3 hover:animate-pulse hover:bg-[url(./assets/DONE.png)]"
          : ""
      } flex w-full flex-col rounded-md border-b border-gray-300 p-3 last:border-none`}
    >
      <p
        onClick={() => {}}
        className={`${
          todo.completed ? "text-gray-200" : ""
        } text-middle w-fit max-w-full truncate font-medium hover:cursor-pointer hover:font-semibold`}
      >
        {todo.title}
      </p>
      <p
        className={`${
          todo.completed ? "text-gray-200" : ""
        } mb-2 h-10 max-h-20 w-full truncate break-words  font-light`}
      >
        {todo.description}
      </p>
      <div className="flex w-1/4 min-w-fit gap-3">
        {/* <CompleteButton todo={todo} />
        <DeleteButton id={todo.id} />
        <EditButton todo={todo} /> */}
      </div>
    </div>
  );
};

export default TodoItem;
