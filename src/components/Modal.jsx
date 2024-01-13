import { EditorForm, DeletedList } from ".";

const Modal = ({ taskOnEdit, showDeleted }) => {
  return (
    <>
      {taskOnEdit ? (
        <div className="fixed left-0 top-0 z-10 h-full w-full bg-black/50">
          <div className="flex h-full items-center">
            <EditorForm />
          </div>
        </div>
      ) : null}
      {showDeleted ? (
        <div className="fixed left-0 top-0 z-10 h-full w-full bg-black/50">
          <div className="flex h-full items-center overflow-y-auto">
            <DeletedList />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
