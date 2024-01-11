import arrowImgUrl from "../assets/arrow.svg";

const FilterSelect = () => {
  return (
    <div className="w-100px relative sm:w-[200px]">
      <select
        id="filter-select"
        onChange={() => {}}
        className="h-10 w-full appearance-none border-b-2 border-gray-200 bg-transparent px-2 font-mono text-sm text-white outline-none hover:cursor-pointer sm:ml-3 sm:text-base"
      >
        <option value="">Filter</option>
        <option value="Completed">Completed</option>
        <option value="Incompleted">Incompleted</option>
      </select>
      <div className="pointer-events-none absolute right-1 top-3 flex items-center px-2 hover:cursor-pointer">
        <img className="self-middle h-4 w-4" src={arrowImgUrl} />
      </div>
    </div>
  );
};

export default FilterSelect;
