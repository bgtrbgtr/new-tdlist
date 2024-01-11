import { FilterSelect, TodoCounter } from ".";

const Header = () => {
  return (
    <header className="grid-rows-auto mt-6 grid max-h-20 grid-cols-2 justify-start sm:col-span-2 sm:flex sm:flex-row">
      <h1 className="text-3xl font-extralight text-white">To Do List</h1>
      <TodoCounter />
      <FilterSelect />
    </header>
  );
};

export default Header;
