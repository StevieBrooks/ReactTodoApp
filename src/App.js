/*===============COMPONENTS===============*/
import Header from './components/Header';
import Taskbar from "./components/Taskbar"
import TaskContainer from './components/TaskContainer';
import CompContainer from './components/CompContainer';


/*===========DEPENDENCIES============*/
import PropTypes from 'prop-types'
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState([])
  const [compTasks, setCompTasks] = useState([])

  const placeholders = () => {
    const placeholderTasks = [
      {type: "School", task: "revise for exam", assigned: "Evening", completed: false},
      {type: "Home", task: "look for new apartment", assigned: "Weekend", completed: false},
      {type: "Family", task: "meet sister for lunch", assigned: "Afternoon", completed: false}
    ]
    setTasks(placeholderTasks)
  }

  const compPlaceholders = () => {
    const compPlaceholderTasks = [
      {type: "Work", task: "email new clients", assigned: "Morning", completed: true},
      {type: "Social", task: "meet Dave for beers", assigned: "Weekend", completed: true},
    ]
    setCompTasks(compPlaceholderTasks)
  }

  useEffect(() => {
    placeholders(); 
    compPlaceholders();
  }, []);

  const handleTasks = (item) => {
    setTasks([item, ...tasks])
    console.log(item)
  }

  const manageTasks = (item) => {

    if(item[2] == "move") {

      console.log(item)
      let updatedTasks = [...tasks]
      updatedTasks = updatedTasks.filter((task, index) => index !== item[0])
      setTasks(updatedTasks)
      setCompTasks([item[1], ...compTasks])

    } else if (item[2] == "delete") {
      
      let updatedTasks = [...tasks]
      updatedTasks = updatedTasks.filter((task, index) => index !== item[0])
      setTasks(updatedTasks)
      // should have modal to check if user wants to delete
    }

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
// look into local/session storage for the app

/*==================BUGS================

  - adding tasks - typing ok, but if input remembers previous choices and you choose one a 2nd time, it will add everything except the task

*/

/* remaining tasks

  - calls to button component and relevant styling
  - filter by category/time - use filter icon
  - add an edit button

*/