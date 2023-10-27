import Button from "./Button"
import { FaXmark } from 'react-icons/fa6'
import { useState } from "react"


function EditModal( { modVisible, modVisibleFunc, tagSelectOptions, timeSelectOptions, editPlaceholders, editForm } ) {

    const closeModal = () => modVisibleFunc(false)

    const [editData, setEditData] = useState({
        position: editPlaceholders[0],
        type: editPlaceholders[1].type,
        task: editPlaceholders[1].task,
        assigned: editPlaceholders[1].assigned
    })

    return (<>

        {modVisible && <div className="edit-modal-overlay bg-blue-five/[.8] w-screen h-screen fixed top-0 flex justify-center" onClick={(e) => e.target.className.includes("edit-modal-overlay") && modVisibleFunc(false)}>

            <div className="edit-modal mt-16 bg-blue-one h-fit w-4/5 max-w-md rounded">
                <div className="edit-modal-content text-blue-five">

                    <header className="p-2 flex justify-between">
                        <h2>Edit Task</h2>
                        <Button btnTask={closeModal} btnContent={<FaXmark />} /> 
                    </header>
                   
                    <form className="text-center" onSubmit={(e) => editForm([e, editData])}>

                        <select name="tagSelect" id="tagSelect" defaultValue={editPlaceholders[1].type} onChange={(e) => setEditData({...editData, type: e.target.value})}>
                            {tagSelectOptions.map((item, index) => (
                                <option key={index} value={item.value}>{item.label}</option>
                            ))}
                        </select>

                        <input type="text" defaultValue={editPlaceholders[1].task} onChange={(e) => setEditData({...editData, task: e.target.value})} />

                        <select name="timeSelect" id="timeSelect" defaultValue={editPlaceholders[1].assigned} onChange={(e) => setEditData({...editData, assigned: e.target.value})}>
                            {timeSelectOptions.map((item, index) => (
                                <option key={index} value={item.value}>{item.label}</option>
                            ))}
                        </select>

                        <Button type="submit" btnContent="Submit" />

                    </form>

                </div>
            </div>

        </div>}
        
    </>)
}

export default EditModal