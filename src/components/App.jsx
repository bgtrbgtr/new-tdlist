import { useState, useEffect } from "react";
import { AddTodo, Header, TodoList, Modal } from ".";
import { AppContext } from "../contexts/AppContext";

function App() {
  // const [detailedItemView, setDetailedItemView] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <AppContext.Provider value={{}}>
        <main className="h-auto min-h-screen w-screen bg-gradient-to-t from-white to-blue-700 bg-fixed p-2 sm:p-10 md:grid md:grid-cols-2 md:gap-3">
          <Header />
          <TodoList />
          {/* {detailedItemView ? <DetailedView /> : null} */}
          <AddTodo />
          <Modal />
        </main>
      </AppContext.Provider>
    </>
  );
}

export default App;
