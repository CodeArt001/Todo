import React from "react";

const TaskCard = ({ item, editTask, deleteTask }) => {
  return (
    <div className="w-full border flex items-center justify-between border-gray-300 rounded-lg px-5 py-2">
      <div className="font-semibold">{item.text}</div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => editTask(item.id)}
          className="bg-green-700 text-white px-4 py-2"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(item.id)}
          className="bg-red-800 text-white px-4 py-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
