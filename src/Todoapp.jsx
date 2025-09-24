import React, { useState } from "react";
import Form from "./Form";
import Modal from "./Modal";

const Todoapp = () => {
  const [task, setTask] = useState();
  const [allTasks, setAllTasks] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [editText, setEditText] = useState("");
  const [newId, setNewId] = useState(null);

  const handleTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      text: task,
      isEditing: false,
      completed: false,
    };

    setAllTasks([...allTasks, newTask]);
    setTask("");
  };

  const editTask = (id) => {
    setNewId(id);
    setIsModal(!isModal);
  };

  const markItem = (id) => {
    setAllTasks(
      allTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

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

  const deleteTask = (id) => {
    setAllTasks(allTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="w-[full] h-screen relative flex-col">
      <div className=" bg-pink-500 w-[full] h-[15rem] absolute top-0 left-0 right-0">
        <div className="relative mx-auto top-48 shrink-0 max-w-4xl px-5 lg:px-0"></div>
        <Form
          allTasks={allTasks}
          task={task}
          handleTask={handleTask}
          editTask={editTask}
          setTask={setTask}
          deleteTask={deleteTask}
          markItem={markItem}
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
export default Todoapp;
