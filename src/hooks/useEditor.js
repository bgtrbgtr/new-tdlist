import { useContext, useState, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

const useEditor = () => {
  const { taskOnEdit, setTaskOnEdit, updateTask } = useContext(AppContext);

  const handleEditorClose = () => {
    localStorage.removeItem("onEdit");
    setTaskOnEdit(null);
  };

  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  useEffect(() => {
    if (taskOnEdit) {
      setNewTaskName(taskOnEdit.title);
      setNewTaskDescription(taskOnEdit.description);
    }
  }, [taskOnEdit]);

  const handleUpdateTaskInfo = (e) => {
    e.preventDefault();
    taskOnEdit.title = newTaskName;
    taskOnEdit.description = newTaskDescription;
    updateTask(taskOnEdit);
    handleEditorClose();
  };

  return {
    handleEditorClose,
    handleUpdateTaskInfo,
    newTaskName,
    setNewTaskName,
    newTaskDescription,
    setNewTaskDescription,
  };
};

export default useEditor;
