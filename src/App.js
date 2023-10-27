/*===============COMPONENTS===============*/
import Header from './components/Header';
import Taskbar from "./components/Taskbar"
import TaskContainer from './components/TaskContainer';
import CompContainer from './components/CompContainer';
import FilterModal from "./components/FilterModal"


/*===========DEPENDENCIES============*/
import PropTypes from 'prop-types'
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState([])
  const [compTasks, setCompTasks] = useState([])

  const [filtTasksActive, setFiltTasksActive] = useState(false)
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filteredCompTasks, setFilteredCompTasks] = useState([]);

  const [filterModalVisible, setFilterModalVisible] = useState(false)

  const tagSelectOptions = [
      {value: "", label: "- Category -"},
      {value: "Home", label: "Home"},
      {value: "Work", label: "Work"},
      {value: "School", label: "School"},
      {value: "Social", label: "Social"},
      {value: "Family", label: "Family"}
  ]

  const timeSelectOptions = [
      {value: "", label: "- Time -"},
      {value: "Morning", label: "Morning"},
      {value: "Afternoon", label: "Afternoon"},
      {value: "Evening", label: "Evening"},
      {value: "Weekend", label: "Weekend"}
  ]

  const filterModal = () => {
      setFilterModalVisible(true) 
      setFiltTasksActive(false)
      console.log(tasks)
  }

  const filterForm = (input) => {
    input[0].preventDefault()
    setFilterModalVisible(false)
    setFiltTasksActive(true)

    const tagChoice = input[1]
    const timeChoice = input[2]
    let filteredTasks = [...tasks]
    let filteredCompTasks = [...compTasks]

    if(tagChoice !== "") {
      filteredTasks = filteredTasks.filter((item) => item.type === tagChoice)
      filteredCompTasks = filteredCompTasks.filter((item) => item.type === tagChoice)
    }
    if(timeChoice !== "") {
      filteredTasks = filteredTasks.filter((item) => item.assigned === timeChoice)
      filteredCompTasks = filteredCompTasks.filter((item) => item.assigned === tagChoice)
    }

    setFilteredTasks(filteredTasks)
    setFilteredCompTasks(filteredCompTasks)

}

  const resetFunction = () => {
    setFiltTasksActive(false)
  }



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

    <Taskbar reversed="false" setTasks={handleTasks} tasks={tasks} compTasks={compTasks} filterModal={filterModal} resetFunction={resetFunction} tagSelectOptions={tagSelectOptions} timeSelectOptions={timeSelectOptions} />

    <TaskContainer tasks={tasks} setTasks={manageTasks} filtTasksActive={filtTasksActive} filteredTasks={filteredTasks} />

    <CompContainer compTasks={compTasks} filtTasksActive={filtTasksActive} filteredCompTasks={filteredCompTasks} />

    {filterModalVisible && <FilterModal tagMenu={tagSelectOptions} timeMenu={timeSelectOptions} modVisible={filterModalVisible} modVisibleFunc={setFilterModalVisible} filterForm={filterForm} />}

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

  - filter by category/time - use filter icon
  - add an edit button

*/