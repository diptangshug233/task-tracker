import Task from "./Task";

const Tasks = ({ tasks, deleteTask, toggleReminder }) => {
  return (
    <>
      {" "}
      {tasks.map((task, id) => (
        <Task
          key={id}
          task={task}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ))}{" "}
    </>
  );
};

export default Tasks;
