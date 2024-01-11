import delImgUrl from "../assets/trashbin.svg";

const DeleteTodo = (todo) => {
  return (
    <button
      type="button"
      aria-label={"Delete task from list"}
      className="h-8 w-8 rounded-full bg-white p-1.5 hover:bg-blue-300 active:bg-blue-400"
      onClick={() => {
        // store.removeTodo(props.id)
        console.log(todo);
      }}
    >
      <img className="h-5 w-5" src={delImgUrl} />
    </button>
  );
};

export default DeleteTodo;
