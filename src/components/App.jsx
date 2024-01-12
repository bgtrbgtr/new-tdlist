import { useState, useEffect } from "react";
import { AddTask, Header, TodoList, Modal } from ".";
import { AppContext } from "../contexts/AppContext";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) !== null
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const [taskOnEdit, setTaskOnEdit] = useState(null);

  return (
    <>
      <AppContext.Provider
        value={{
          tasks,
          addTask,
          removeTask,
          updateTask,
          taskOnEdit,
          setTaskOnEdit,
        }}
      >
        <main className="h-auto min-h-screen w-screen bg-gradient-to-t from-white to-blue-700 bg-fixed p-2 sm:p-10 md:grid md:grid-cols-2 md:gap-3">
          <Header />
          <TodoList />
          <AddTask />
          <Modal />
        </main>
      </AppContext.Provider>
    </>
  );
}

export default App;
