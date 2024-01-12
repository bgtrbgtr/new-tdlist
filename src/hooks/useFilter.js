import { useContext, useState, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { handleFilterChange } from "../utils/filter";

const useFilter = () => {
  const { tasks, updateTask } = useContext(AppContext);

  const [filterOption, setFilterOption] = useState(
    JSON.parse(localStorage.getItem("filterOption")) !== null
      ? JSON.parse(localStorage.getItem("filterOption"))
      : "Default"
  );

  useEffect(() => {
    if (filterOption) {
      handleFilterChange(tasks, updateTask, filterOption);
    } else {
      handleFilterChange(tasks, updateTask, "Default");
    }
  }, [filterOption]);

  return { filterOption, setFilterOption };
};

export { useFilter };
