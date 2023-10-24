import Header from './components/Header';
import Taskbar from "./components/Taskbar"

import PropTypes from 'prop-types'
import './App.css';
import { useState } from 'react';
import TaskContainer from './components/TaskContainer';

function App() {

  const [tasks, setTasks] = useState([])

  const handleTasks = (item) => {
    setTasks([item, ...tasks])
    console.log(item)
  }


  return (<>

    <Header headerTitle="To-Do List" reversed="false" />
    <Taskbar reversed="false" setTasks={handleTasks} />
    <TaskContainer tasks={tasks} />


  </>)
}

export default App;

/* copy this one...
  https://reactjsexample.com/simple-todo-list-app-with-react/
 */