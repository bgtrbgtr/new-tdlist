import editImgUrl from "../assets/edit.svg";

const EditTodo = (todo) => {
  return (
    <button
      type="button"
      aria-label={"Edit item"}
      className="h-8 w-8 rounded-full bg-white p-1.5 hover:bg-blue-300 active:bg-blue-400"
      onClick={() => {
        //store.editTodo(props.todo)
        console.log(todo);
      }}
    >
      <img className="h-4 w-5" src={`${editImgUrl}`} />
    </button>
  );
};

export default EditTodo;
