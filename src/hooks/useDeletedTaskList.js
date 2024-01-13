import { useState, useEffect } from "react";

const useDeletedTaskList = () => {
  const [deletedTasks, setDeletedTasks] = useState(
    JSON.parse(localStorage.getItem("deletedTasks")) !== null
      ? JSON.parse(localStorage.getItem("deletedTasks"))
      : []
  );

  useEffect(() => {
    const storedDeleted = JSON.parse(localStorage.getItem("deletedTasks"));

    if (storedDeleted) {
      setDeletedTasks(storedDeleted);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  }, [deletedTasks]);

  return { deletedTasks, setDeletedTasks };
};

export default useDeletedTaskList;
