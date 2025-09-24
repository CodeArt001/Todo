import React from "react";

const Modal = ({
  editText,
  setEditText,
  handleEditSubmit,
  newId,
  handleCancel,
  deleteTask,
}) => {
  return (
    <div className="w-full h-full bg-gray-500/60 flex itmes-center justify-center absolute top-0">
      <div className="w-[25rem] h-[15rem] relative rounded-lg shadow-lg bg-white py-4 px-8 mt-50">
        {/* <p className="absolute top-3 font-semibold text-2xl right-6 text-gray-500">
          X
        </p> */}
        <form action="" className="w-full mt-8 ">
          <label htmlFor="">Enter new task</label>
          <input
            type="text"
            className="border border-gray-500 rounded-md px-4 py-2 w-full"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <button
              onClick={() => handleEditSubmit(newId)}
              className="bg-blue-600 font-semibold text-white px-5 py-2 rounded-md my-3"
            >
              Submit
            </button>
            <button
              value={deleteTask}
              onClick={() => handleCancel(newId)}
              className="bg-pink-600 font-semibold text-white px-5 py-2 rounded-md my-3"
            >
              Cancle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Modal;
