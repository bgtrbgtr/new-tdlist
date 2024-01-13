import { useContext, useState, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { handleFilterChange } from "../utils/filterUtils";

const useFilter = () => {
  const { tasks, updateTask } = useContext(AppContext);

  const [filterOption, setFilterOption] = useState(
    localStorage.getItem("filterOption") !== "undefined"
      ? JSON.parse(localStorage.getItem("filterOption"))
      : "Default"
  );

  useEffect(() => {
    if (filterOption) {
      handleFilterChange(tasks, updateTask, filterOption);
    } else {
      handleFilterChange(tasks, updateTask, "Default");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterOption]);

  return { filterOption, setFilterOption };
};

export default useFilter;
