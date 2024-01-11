const TodoCounter = () => {
  // const completed = store.todos.filter((todo) => todo.completed);
  const completed = [1, 2];
  const todos = [1, 2, 3];

  return (
    <p className="ml-auto text-3xl font-extralight text-white sm:ml-3">{`${completed.length}/${todos.length}`}</p>
  );
};

export default TodoCounter;
