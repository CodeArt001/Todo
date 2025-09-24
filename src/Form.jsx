import React from "react";
import TaskCard from "./TaskCard";

const Form = ({
  task,
  allTasks,
  handleTask,
  deleteTask,
  editTask,
  setTask,
  markItem,
}) => {
  return (
    <div className="h-[30rem]  ">
      <form
        action=""
        className="w-[40rem] p-5 rounded-md bg-white shadow mt-50 m-auto"
      >
        <div className="mb-3 w-full">
          <div className="flex sm:items-center flex-col sm:flex-row w-full gap-2">
            <input
              type="text"
              placeholder="Enter your task here"
              className="flex-1 block border border-gray-300 rounded-md px-5 py-3"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              onClick={handleTask}
              className="bg-pink-500 text-white font-black px-5 py-3 rounded-md"
            >
              Add task
            </button>
          </div>
        </div>
      </form>
      <div className="flex flex-col gap-1">
        {allTasks.map((item) => (
          <TaskCard
            key={item.id}
            item={item}
            deleteTask={deleteTask}
            editTask={editTask}
            markItem={markItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Form;
