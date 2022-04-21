import {MdDelete} from 'react-icons/md'

const Task = ({ task, deleteTask, toggleReminder }) => {
  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.text}{' '}
        <MdDelete
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.desc}</p>
    </div>
  )
}

export default Task