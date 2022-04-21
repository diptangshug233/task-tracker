import { useState } from "react";
const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    addTask({ text, desc, reminder });

    setText("");
    setDesc("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task:</label>
        <input
          type="text"
          placeholder="Add Task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></input>
      </div>
      <div className="form-control">
        <label>Description:</label>
        <input
          type="text"
          placeholder="Task Description..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></input>
      </div>
      <div className=" form-control form-control-check">
        <label>Reminder:</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
