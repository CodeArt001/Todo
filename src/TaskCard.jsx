import React from "react";

const TaskCard = ({ item, editTask, deleteTask, markItem }) => {
  // const handleDelete = () => {
  //   // console.log("attempting to delete :", item.id);
  //   try {
  //     deleteTask(item.id);
  //   } catch (error) {
  //     console.error("delete error:", error);
  //   }
  // };

  return (
    <div className="w-[40rem] border flex  items-center justify-between border-gray-300 rounded-lg px-5 py-2 m-auto">
      <input
        onChange={() => markItem(item.id)}
        type="checkbox"
        checked={item.completed}
      />
      <div
        className={`font-semibold flex-1 px-4  ${
          item.completed
            ? "line-through text-gray-600 bg-gray-100"
            : "text-black"
        }`}
      >
        {item.text}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => editTask(item.id)}
          className="bg-green-500 text-white px-4 py-2"
        >
          edit
        </button>
        <button
          onClick={() => deleteTask(item.id)}
          className="bg-red-500 text-white px-4 py-2"
        >
          delete
        </button>
      </div>
    </div>
  );
};
export default TaskCard;
