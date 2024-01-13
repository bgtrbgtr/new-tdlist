import { useState } from "react";
import { AddTask, Header, TodoList, Modal } from ".";
import { AppContext } from "../contexts/AppContext";
import useTaskList from "../hooks/useTaskList";
import { taskFunctions } from "../utils/taskUtils";

function App() {
  const { tasks, setTasks } = useTaskList();
  const [taskOnEdit, setTaskOnEdit] = useState(null);
  const { addTask, removeTask, updateTask } = taskFunctions(tasks, setTasks);

  return (
    <>
      <AppContext.Provider
        value={{
          tasks,
          setTasks,
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
