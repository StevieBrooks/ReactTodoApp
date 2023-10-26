import Button from "./Button"

import PropTypes from 'prop-types'
import { useState } from "react"
import { FaFilter, FaArrowRotateLeft } from 'react-icons/fa6'

function Taskbar( {reversed, setTasks, tasks, compTasks, filterModal, resetFunction, tagSelectOptions, timeSelectOptions } ) {

    const [newTag, setNewTag] = useState("")
    const [newTask, setNewTask] = useState("")
    const [newAssign, setNewAssign] = useState("")

    

    const submitForm = (e) => {

        e.preventDefault()

        const newItem = {
            type: newTag,
            task: newTask,
            assigned: newAssign,
            completed: false
        }
        setTasks(newItem)

        setNewTag("")
        setNewTask("")
        setNewAssign("")
        e.target.reset()
        
    }


    return (<>
        <div className="taskbar-inputs flex justify-center my-5">

            <div className="taskbar-content  bg-blue-five p-2 rounded-md flex">

                <Button btnContent={<FaArrowRotateLeft />} />
                <Button btnContent={<FaFilter />} btnTask={filterModal} />

                <form className="" onSubmit={submitForm}>
                    <select name="tagSelect" id="tagSelect" className="text-blue-five p-1 m-1" onChange={(e) => setNewTag(e.target.value)} required>
                        {tagSelectOptions.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <input type="text" id="todoInput" className="text-blue-five p-1 m-1" placeholder="Add task..." onChange={(e) => setNewTask(e.target.value)} required/>
                    <select name="assignSelect" id="assignSelect" className="text-blue-five p-1 m-1" onChange={(e) => setNewAssign(e.target.value)} required>
                        {timeSelectOptions.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <Button type="submit" btnContent="Submit" />
                </form>

            </div>

        </div>
        
    </>)
}

Taskbar.propTypes = {
    reversed: PropTypes.string,
    setTasks: PropTypes.func.isRequired
}

export default Taskbar