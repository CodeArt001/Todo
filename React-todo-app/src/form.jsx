import TaskCard from "./taskCard";

const Form = ({
  allTasks,
  editTask,
  deleteTask,
  task,
  handleTask,
  setTask,
}) => {
  return (
    <div className="h-[40rem]">
      <form action="" className="w-full  p-5 rounded-md bg-white shadow">
        <div className="mb-3 w-full">
          <div className="flex sm:items-center flex-col sm:flex-row w-full gap-2 ">
            {/* <label htmlFor="">New todo</label> */}
            <input
              type="text"
              placeholder="Enter your task here"
              className="flex-1 block border border-gray-300 rounded-md px-5 py-3"
              value={task}
              // input go into the task because of this
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              onClick={handleTask}
              className="bg-pink-500 text-white font-bold px-5 py-3 rounded-md"
            >
              Add Task
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
            // toggleEdit={toggleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Form;
