import Header from './components/Header';
import Taskbar from "./components/Taskbar"

import PropTypes from 'prop-types'
import './App.css';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState({
    type: "",
    task: "",
    assigned: "",
    completed: false
  })

  const handleTaskData = (type, task, assigned) => {
    setNewTask({type: type, task: task, assigned: assigned})
  }

  return (<>

    <Header headerTitle="To-Do List" reversed="false" />
    <Taskbar reversed="false" newTaskData={handleTaskData} setTasks={setTasks} />


  </>)
}

export default App;

/* copy this one...
  https://reactjsexample.com/simple-todo-list-app-with-react/
 */