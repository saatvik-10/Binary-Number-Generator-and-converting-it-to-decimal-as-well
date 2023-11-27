export const Task = (props) => {
  return (
    <div
      className="Task"
      style={{ color: props.completed ? "green" : "black" }}
    >
      <h1>{props.taskName}</h1>
      <button onClick={() => props.deleteTask(props.id)}> X </button>
      <button onClick={() => props.completedTask(props.id)}> Completed </button>
    </div>
  );
};
