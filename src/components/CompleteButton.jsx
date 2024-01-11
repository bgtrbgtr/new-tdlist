import incompleteImgUrl from "../assets/incomplete.svg";
import completeImgUrl from "../assets/complete.svg";

const CompleteTodo = (todo) => {
  return (
    <button
      type="button"
      onClick={() => {
        // store.completeTodo(props.todo);
        // store.filterList();
      }}
      aria-label={"Complete task"}
      className="h-8 w-8 rounded-full bg-white p-1.5 hover:bg-blue-300 active:bg-blue-400"
    >
      <img
        className="h-5 w-5"
        src={todo.completed ? `${incompleteImgUrl}` : `${completeImgUrl}`}
      />
    </button>
  );
};

export default CompleteTodo;
