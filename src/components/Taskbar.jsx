import Button from "./Button"

import PropTypes from 'prop-types'
import { useState } from "react"

function Taskbar( {reversed, setTasks } ) {

    const [newTag, setNewTag] = useState("")
    const [newTask, setNewTask] = useState("")
    const [newAssign, setNewAssign] = useState("")

    const btnStyle = "submit-btn-style"

    const tagSelectOptions = [
        {value: "", label: "- Category -"},
        {value: "Home", label: "Home"},
        {value: "Work", label: "Work"},
        {value: "School", label: "School"},
        {value: "Social", label: "Social"},
        {value: "Family", label: "Family"}
    ]

    const assignSelectOptions = [
        {value: "", label: "- Time -"},
        {value: "Morning", label: "Morning"},
        {value: "Afternoon", label: "Afternoon"},
        {value: "Evening", label: "Evening"},
        {value: "Weekend", label: "Weekend"}
    ]

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

            <form className=" bg-blue-five p-2 rounded-md items-start" onSubmit={submitForm}>

                <select name="tagSelect" id="tagSelect" className="text-blue-five p-1 m-1" onChange={(e) => setNewTag(e.target.value)} required>
                    {tagSelectOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>

                <input type="text" id="todoInput" className="text-blue-five p-1 m-1" placeholder="Add task..." onChange={(e) => setNewTask(e.target.value)} required/>

                <select name="assignSelect" id="assignSelect" className="text-blue-five p-1 m-1" onChange={(e) => setNewAssign(e.target.value)} required>
                    {assignSelectOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>

                <Button type="submit" btnContent="Submit" btnStyle={btnStyle}  />

            </form>

        </div>
    </>)
}

Taskbar.propTypes = {
    reversed: PropTypes.string,
    setTasks: PropTypes.func.isRequired
}

export default Taskbar