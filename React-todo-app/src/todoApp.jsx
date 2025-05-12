import React, { useState } from "react";
import Form from "./form";
import Modal from "./Modal";
// import Tododetail from "./Tododetail";

const TodoApp = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [task, setTask] = useState();
  const [isModal, setIsModal] = useState(false);
  const [editText, setEditText] = useState("");
  const [newId, setNewId] = useState(null);

  const handleTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      text: task,
      isEditing: false,
    };

    setAllTasks([...allTasks, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    let confirmation = prompt("Are you sure you want to delete this task");
    if (confirmation === "yes") {
      setAllTasks(allTasks.filter((task) => task.id !== id));
    }
  };

  const editTask = (id) => {
    setNewId(id);
    setIsModal(!isModal);
  };
  const isStudent = "Blessing";

  isStudent === "Blessing"
    ? "Blessing is s student"
    : isStudent === "Teacher"
    ? "Blessing is a teacher"
    : "Blessing is a DO";
  const handleEditSubmit = (id) => {
    setIsModal(!isModal);
    let newText = editText;
    setAllTasks(
      allTasks.map((task) =>
        task.id === id ? { ...task, text: newText, isEditing: false } : task
      )
    );
    setEditText("");
  };
  return (
    <div className="w-full h-screen relative flex-col">
      <div className="w-full h-[15rem] bg-pink-500 absolute top-0 left-0 right-0"></div>
      <div className="relative mx-auto top-48 shrink-0 max-w-4xl px-5 lg:px-0">
        <Form
          allTasks={allTasks}
          task={task}
          handleTask={handleTask}
          deleteTask={deleteTask}
          editTask={editTask}
          setTask={setTask}
        />
      </div>
      {isModal && (
        <Modal
          editText={editText}
          setEditText={setEditText}
          setIsModal={setIsModal}
          isModal={isModal}
          newId={newId}
          setNewId={setNewId}
          handleEditSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default TodoApp;
