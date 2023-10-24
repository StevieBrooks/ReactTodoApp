/*===============COMPONENTS===============*/
import Header from './components/Header';
import Taskbar from "./components/Taskbar"
import TaskContainer from './components/TaskContainer';
import CompContainer from './components/CompContainer';


/*===========DEPENDENCIES============*/
import PropTypes from 'prop-types'
import './App.css';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([])
  const [compTasks, setCompTasks] = useState([])

  const handleTasks = (item) => {
    setTasks([item, ...tasks])
    console.log(item)
  }

  const manageTasks = (item) => {

    let updatedTasks = [...tasks]
    updatedTasks = updatedTasks.filter((task, index) => index !== item[0])
    setTasks(updatedTasks)
    
    setCompTasks([item[1], ...compTasks])
  }


  return (<>

    <Header headerTitle="To-Do List" reversed="false" />
    <Taskbar reversed="false" setTasks={handleTasks} />
    <TaskContainer tasks={tasks} setTasks={manageTasks} />
    <CompContainer compTasks={compTasks} />

  </>)
}

export default App;

/* copy this one...
  https://reactjsexample.com/simple-todo-list-app-with-react/
 */

// figure out how to use useContext instead of prop drilling setTasks