import styles from "./App.module.css";
import { useState } from "react";
import Task from './Task'

function App() {
  /*useState variables*/
  const [todoList, setTodoList] = useState([]);
  const [newTask, setnewTask] = useState("");

  const handleChange = (e) => {
    setnewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask !== '') {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        isCompleted: false
      };
      setTodoList([...todoList, task]);
    } else {
      return alert('Task Empty')
    }
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

  const completedTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, isCompleted: true}
        } else {
          return task
        }
      })
    )
  }

  return (
    <div className={styles.App}>
      <div className={styles.addTask}>
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className={styles.list}>
        {todoList.map((task, key) => {
          return (
            <Task taskName={task.taskName} id={task.id} isCompleted={task.isCompleted} deleteTask={deleteTask} completedTask={completedTask}/>
          );
        })}
      </div>
    </div>
  );
}

export default App;