import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUpdateMutation } from "../services/tasksApi";

const TasksComponent = ({ task, handleDelete }) => {
  const [update] = useUpdateMutation();

  return (
    <div
      key={task.id}
      className="bg-white border border-blue-300 p-3 mb-1 flex justify-around items-center"
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div>
        <input
          type="checkbox"
          id={task.id}
          onChange={(e) => {
            update({ ...task, completed: e.target.checked });
          }}
          checked={task.completed}
        />
        <label htmlFor={task.id}>Completed</label>
      </div>
      <button
        onClick={() => handleDelete(task.id)}
        className="bg-red-400 py-1 px-3"
      >
        Delete
      </button>
      <Link to={`/update/${task.id}`} className="bg-yellow-400 py-1 px-3">
        Edit
      </Link>
    </div>
  );
};

export default TasksComponent;
