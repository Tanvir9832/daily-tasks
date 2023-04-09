import React, { useEffect, useState } from "react";

import Task from "./Task";
import "./Home.css";

const Home = () => {
  //  const initialArray =   ;

  const [singleTask, setSingleTask] = useState({ title: "", desc: "" });
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  const [isToggle, setIsToggle] = useState(true);
  const [updateValue, setUpdateValue] = useState("");

  const { title, desc } = singleTask;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //  !For editing
  const handleEdit = (ind) => {
    setSingleTask(tasks[ind]);
    setIsToggle(!isToggle);
    setUpdateValue(ind);
  };

  // !for deleting
  const handleDelete = (ind) => {
    const finalTasks = tasks.filter((elm, index) => {
      return ind !== index;
    });
    setTasks(finalTasks);
  };

  const handleChange = (e) => {
    setSingleTask({ ...singleTask, [e.target.name]: e.target.value });
  };

  const handleUpdateFromClick = () => {
    tasks.splice(updateValue, 1, singleTask);
    setTasks([...tasks]);
    setSingleTask("");
    setIsToggle(!isToggle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    singleTask.desc &&
      singleTask.title &&
      setTasks((prev) => {
        return [...prev, singleTask];
      });
  };

  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title..."
          name="title"
          value={title}
          onChange={handleChange}
          className="form__input"
        />
        <textarea
          placeholder="Description..."
          name="desc"
          value={desc}
          onChange={handleChange}
          className="form__textarea"
        ></textarea>
        {isToggle ? (
          <button type="submit" className="form__btn">
            ADD GOALS
          </button>
        ) : (
          <button className="form__btn" onClick={handleUpdateFromClick}>
            UPDATE GOALS
          </button>
        )}
      </form>

      {tasks &&
        tasks.map((singleTask, ind) => {
          return (
            <div key={ind}>
              <Task newTask={{ singleTask, handleEdit, handleDelete, ind }} />
            </div>
          );
        })}
    </div>
  );
};

export default Home;
