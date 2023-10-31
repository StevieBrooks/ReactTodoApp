import Button from "./Button"

import PropTypes from 'prop-types'
import { useState } from "react"
import { FaFilter, FaArrowRotateLeft } from 'react-icons/fa6'

function Taskbar( { setTasks, filterModal, resetFunction, tagSelectOptions, timeSelectOptions } ) {

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
        <div className="taskbar-inputs hidden sm:flex justify-center my-5">

            <div className="taskbar-content  bg-blue-five p-2 rounded-md flex flex-col sm:flex-row items-center border-2 border-blue-two">

                <div className="filt-reset-buttons">
                    <Button className="bg-blue-two p-2 mx-1 rounded hover:bg-blue-three" btnContent={<FaArrowRotateLeft />} btnTask={resetFunction} />
                    <Button className="bg-blue-two p-2 mx-1 rounded hover:bg-blue-three" btnContent={<FaFilter />} btnTask={filterModal} />
                </div>

                <form id="taskbarForm" onSubmit={submitForm}>
                    <select name="tagSelect" id="tagSelect" className="m-2 p-1 bg-blue-four rounded border border-blue-two" onChange={(e) => setNewTag(e.target.value)} required>
                        {tagSelectOptions.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    
                    <select name="assignSelect" id="assignSelect" className="m-2 p-1 bg-blue-four rounded border border-blue-two" onChange={(e) => setNewAssign(e.target.value)} required>
                        {timeSelectOptions.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>

                    <input type="text" id="todoInput" className="m-2 p-1 bg-blue-four rounded border border-blue-two"placeholder="Add task..." onChange={(e) => setNewTask(e.target.value)} required/>
                </form>
                <Button form="taskbarForm" className="bg-blue-two px-2 py-1  mx-1 rounded hover:bg-blue-three" type="submit" btnContent="Submit" />

            </div>

        </div>
        
    </>)
}

Taskbar.propTypes = {
    reversed: PropTypes.string,
    setTasks: PropTypes.func.isRequired
}

export default Taskbar