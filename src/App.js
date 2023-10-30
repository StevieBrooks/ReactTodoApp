/*===============COMPONENTS===============*/
import Header from './components/Header';
import Taskbar from "./components/Taskbar"
import TaskContainer from './components/TaskContainer';
import CompContainer from './components/CompContainer';
import FilterModal from "./components/FilterModal"
import EditModal from "./components/EditModal"


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
  const [editModalVisible, setEditModalVisible] = useState(false)

  const [editPlaceholders, setEditPlaceholders] = useState([])

  const tagSelectOptions = [
      {value: "", label: "Category:"},
      {value: "Home", label: "Home"},
      {value: "Work", label: "Work"},
      {value: "School", label: "School"},
      {value: "Social", label: "Social"},
      {value: "Family", label: "Family"}
  ]

  const timeSelectOptions = [
      {value: "", label: "Time:"},
      {value: "Morning", label: "Morning"},
      {value: "Afternoon", label: "Afternoon"},
      {value: "Evening", label: "Evening"},
      {value: "Weekend", label: "Weekend"}
  ]

  const filterModal = () => {
      setFilterModalVisible(true) 
      setFiltTasksActive(false)
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
  }

  const manageTasks = (item) => {
    

    if(item[2] == "move") {

      if(filtTasksActive) {
        let updatedFilteredTasks = [...filteredTasks]
        updatedFilteredTasks = updatedFilteredTasks.filter((task, index) => index !== item[0])
        setFilteredTasks(updatedFilteredTasks)
        let updatedTasks = [...tasks]
        updatedTasks = updatedTasks.filter((task, index) => index !== item[1])
        setTasks(updatedTasks)
        setCompTasks([item[1], ...compTasks])
      }

      let updatedTasks = [...tasks]
      updatedTasks = updatedTasks.filter((task, index) => index !== item[0])
      setTasks(updatedTasks)
      setCompTasks([item[1], ...compTasks])

    } else if (item[2] == "delete") {
      
      if(filtTasksActive) {
        
        let updatedFilteredTasks = [...filteredTasks]
        updatedFilteredTasks = updatedFilteredTasks.filter((task, index) => index !== item[0])
        setFilteredTasks(updatedFilteredTasks)
        let updatedTasks = [...tasks]
        updatedTasks = updatedTasks.filter((task) => task !== item[1])
        setTasks(updatedTasks)
      } else {
        let updatedTasks = [...tasks]
        updatedTasks = updatedTasks.filter((task, index) => index !== item[0])
        setTasks(updatedTasks)
      }
      
    } else {
      setEditModalVisible(true)
      setEditPlaceholders(item)
    }

  }

  const editForm = (input) => {
    input[0].preventDefault()
    setEditModalVisible(false)
    const [item1, item2] = input
    const {position, ...editItems} = item2
    if(filtTasksActive) {
      const updatedFilteredTasks = [...filteredTasks]
      updatedFilteredTasks[position] = editItems
      setFilteredTasks(updatedFilteredTasks)
      const updatedTasks = [...tasks]
      updatedTasks[position] = editItems
      setTasks(updatedTasks)
    } else {
      const updatedTasks = [...tasks]
      updatedTasks[position] = editItems
      setTasks(updatedTasks)
    }
    
  }


  return (<>

    <Header headerTitle="To-Do List" reversed="false" />

    <Taskbar reversed="false" setTasks={handleTasks} tasks={tasks} compTasks={compTasks} filterModal={filterModal} resetFunction={resetFunction} tagSelectOptions={tagSelectOptions} timeSelectOptions={timeSelectOptions} />

    <TaskContainer tasks={tasks} setTasks={manageTasks} filtTasksActive={filtTasksActive} filteredTasks={filteredTasks} setFilteredTasks={manageTasks} />

    <CompContainer compTasks={compTasks} filtTasksActive={filtTasksActive} filteredCompTasks={filteredCompTasks} />

    {filterModalVisible && <FilterModal tagMenu={tagSelectOptions} timeMenu={timeSelectOptions} modVisible={filterModalVisible} modVisibleFunc={setFilterModalVisible} filterForm={filterForm} />}

    {editModalVisible && <EditModal modVisible={editModalVisible} modVisibleFunc={setEditModalVisible} editForm={editForm} tagSelectOptions={tagSelectOptions} timeSelectOptions={timeSelectOptions} editPlaceholders={editPlaceholders} />}

  </>)
}

export default App;

/* copy this one...
  https://reactjsexample.com/simple-todo-list-app-with-react/
 */


/*==================BUGS================

  - adding tasks - typing ok, but if input remembers previous choices and you choose one a 2nd time, it will add everything except the task

  - major bug in filtered tasks, choosing index 1 or above to modify (done or edit) gives unexpected results

*/
