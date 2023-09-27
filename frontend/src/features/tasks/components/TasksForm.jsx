import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useFindAllQuery,
  useCreateMutation,
  useUpdateMutation,
} from "../services/tasksApi";

const TasksForm = () => {
  const { data: tasks } = useFindAllQuery();
  const navigate = useNavigate();
  const [create] = useCreateMutation();
  const [update] = useUpdateMutation();
  const params = useParams();
  const [task, setTask] = useState({ title: "", description: "" });

  useEffect(() => {
    if (params.id) {
      console.log(tasks);
      if (tasks) {
        const task = tasks.find((task) => task.id === Number(params.id));
        setTask(task);
      }
    }
  }, [params.id, tasks]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      update(task);
    } else {
      create({ ...task, completed: false });
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-96 m-auto mt-3">
      <h3>{params.id ? "Edit" : "Create"} task</h3>
      <input
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="title"
        className="border border-blue-300 p-3 border-b-0"
        value={task.title}
      />
      <textarea
        onChange={handleChange}
        name="description"
        placeholder="description"
        className="border border-blue-300 p-3"
        value={task.description}
      />
      <button type="submit" className="bg-blue-300">
        Save
      </button>
    </form>
  );
};

export default TasksForm;
