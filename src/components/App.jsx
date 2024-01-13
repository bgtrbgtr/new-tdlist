import { useState } from "react";
import { AddTask, Header, TodoList, Modal } from ".";
import { AppContext } from "../contexts/AppContext";
import { useTaskList } from "../hooks";
import { taskFunctions } from "../utils/taskUtils";
import useDeletedTaskList from "../hooks/useDeletedTaskList";

function App() {
  const { tasks, setTasks } = useTaskList();
  const { deletedTasks, setDeletedTasks } = useDeletedTaskList();
  const [taskOnEdit, setTaskOnEdit] = useState(null);
  const [showDeleted, setShowDeleted] = useState(false);
  const { addTask, removeTask, updateTask, removePermanently, restoreTask } =
    taskFunctions(tasks, setTasks, deletedTasks, setDeletedTasks);

  return (
    <>
      <AppContext.Provider
        value={{
          tasks,
          setTasks,
          deletedTasks,
          setDeletedTasks,
          addTask,
          removeTask,
          updateTask,
          taskOnEdit,
          setTaskOnEdit,
          setShowDeleted,
          removePermanently,
          restoreTask,
        }}
      >
        <main className="h-auto min-h-screen w-screen bg-gradient-to-t from-white to-blue-700 bg-fixed p-2 sm:p-10 md:grid md:grid-cols-2 md:gap-3">
          <Header />
          <TodoList />
          <AddTask />
          <Modal taskOnEdit={taskOnEdit} showDeleted={showDeleted} />
        </main>
      </AppContext.Provider>
    </>
  );
}

export default App;
