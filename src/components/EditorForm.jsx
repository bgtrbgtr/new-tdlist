import { useEditor } from "../hooks";
import closeImgUrl from "../assets/close.svg";

const EditorForm = () => {
  const {
    handleEditorClose,
    handleUpdateTaskInfo,
    newTaskName,
    newTaskDescription,
    setNewTaskName,
    setNewTaskDescription,
  } = useEditor();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto my-auto flex h-4/6 w-10/12 flex-col rounded-md bg-gray-200 p-3 md:w-8/12 lg:w-8/12"
    >
      <button
        className="ml-auto w-5"
        aria-label={"Close modal"}
        type="button"
        onClick={handleEditorClose}
      >
        <img className="h-5 w-5" src={closeImgUrl}></img>
      </button>
      <label className="text font-light">{"Task name"}</label>
      <input
        placeholder="Task name"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        className="mb-2 rounded-md p-1 text-sm outline-none placeholder:font-thin placeholder:text-gray-600"
      ></input>
      <label className="text font-light">{"Description"}</label>
      <textarea
        placeholder={"Brief description"}
        value={newTaskDescription}
        onChange={(e) => {
          setNewTaskDescription(e.target.value);
        }}
        className="mb-3 h-3/5 resize-none overflow-y-auto whitespace-pre-wrap break-words rounded-md p-1 text-sm outline-none placeholder:font-thin placeholder:text-gray-600"
      ></textarea>
      <button
        type="submit"
        aria-label={"Save"}
        onClick={(e) => handleUpdateTaskInfo(e)}
        className="w-3/6 self-center rounded-md bg-white p-2 text-xs font-thin hover:bg-blue-600 hover:text-white active:bg-blue-700 sm:w-1/6 lg:w-2/6"
      >
        {"Save"}
      </button>
    </form>
  );
};

export default EditorForm;
