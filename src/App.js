import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([]);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    const id = uuid();
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="container">
      <Header toggleShow={() => setShowAdd(!showAdd)} show={showAdd} />
      {showAdd && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        "0 pending tasks. Great job!"
      )}
    </div>
  );
}

export default App;
