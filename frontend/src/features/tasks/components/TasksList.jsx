import React from "react";
import TasksComponent from "./TaskComponent";
import { useFindAllQuery, useRemoveMutation } from "../services/tasksApi";

const TasksList = () => {
  const { data: tasks, error, isError, isLoading } = useFindAllQuery();
  const [remove] = useRemoveMutation();
  const handleDelete = (id) => {
    remove(id);
  };

  if (isLoading)
    return <div className="flex flex-col w-96 m-auto mt-3">Loading...</div>;
  if (isError)
    return <div className="flex flex-col w-96 m-auto mt-3">{error}</div>;

  return (
    <div className="flex flex-col mx-6 m-auto mt-3">
      <h3>To do:</h3>
      {tasks &&
        tasks.map((task) => (
          <TasksComponent
            task={task}
            key={task.id}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
};

export default TasksList;
