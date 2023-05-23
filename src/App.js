import styles from "./App.module.css";
import { useState } from "react";

function App() {
  /*useState variables*/
  const [todoList, setTodoList] = useState([]);
  const [newTask, setnewTask] = useState("");

  const handleChange = (e) => {
    setnewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    /**
     * call the setTodoList function
     *
     * Loop the todoList array with filter method
     * if the task in the array is not different remove from array
     */
    setTodoList(
      todoList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <div className={styles.App}>
      <div className={styles.addTask}>
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className={styles.list}>
        {todoList.map((task, key) => {
          return (
            <div className={styles.task}>
              <h1 key={task.id}>
                {task.taskName}
              </h1>{" "}
              <button className={styles.taskButton} onClick={() => deleteTask(task.id)}> X </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;