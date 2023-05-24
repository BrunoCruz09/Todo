import styles from "./App.module.css";

const Task = (props) => {
  return (
    <>
      <div className={props.isCompleted ? styles.taskCompleted : ""}>
        <div className={styles.task}>
          <h1 key={props.id}>
            {props.taskName}
          </h1>
          <button onClick={() => props.completedTask(props.id)}>
            Completed
          </button>
          <button
            className={styles.taskButton}
            onClick={() => props.deleteTask(props.id)}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
