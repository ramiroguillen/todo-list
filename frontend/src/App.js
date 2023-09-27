import { Routes, Route } from "react-router-dom";
import TasksList from "./features/tasks/components/TasksList";
import TasksForm from "./features/tasks/components/TasksForm";
import Layout from "./features/navigation/components/Layout";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route path="/" element={<TasksList />} />
        <Route path="/create" element={<TasksForm />} />
        <Route path="/update/:id" element={<TasksForm />} />
      </Route>
    </Routes>
  );
}

export default App;
