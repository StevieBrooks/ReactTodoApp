import Button from "./Button"
import { FaXmark } from 'react-icons/fa6'
import { useState } from "react"


function AddModal( { modVisible, modVisibleFunc, setTasks, tagSelectOptions, timeSelectOptions } ) {

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
        closeModal()
        
    }


    const closeModal = () => modVisibleFunc(false)

    return (<>

        {modVisible && <div className="add-modal-overlay bg-blue-five/[.8] w-screen h-screen fixed top-0 flex justify-center sm:hidden" onClick={(e) => e.target.className.includes("add-modal-overlay") && modVisibleFunc(false)}>

            <div className="filter-modal mt-16 bg-blue-one h-fit w-4/5 max-w-md rounded">
                <div className="edit-modal-content bg-blue-five border-2 border-blue-two rounded pb-3">

                    <header className="p-3 flex justify-between items-center bg-blue-five rounded-t mb-5 border-b border-blue-two">
                        <h2 className="text-2xl">Add Task</h2>
                        <Button type="button" className="bg-blue-two p-2 rounded hover:bg-blue-three" btnTask={closeModal} btnContent={<FaXmark />} /> 
                    </header>
                    
                    <form id="headerForm" className="text-center flex flex-col" onSubmit={submitForm}>
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

                    <Button form="headerForm" className="bg-blue-two w-3/6 m-auto py-1 rounded my-5 hover:bg-blue-three" type="submit" btnContent="Submit" />
                    
                </form>

                </div>
            </div>

        </div>}
        
    </>)
}

export default AddModal