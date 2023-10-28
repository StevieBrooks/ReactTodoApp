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

        {modVisible && <div className="edit-modal-overlay bg-blue-three/[.8] w-screen h-screen fixed top-0 flex justify-center" onClick={(e) => e.target.className.includes("edit-modal-overlay") && modVisibleFunc(false)}>

            <div className="edit-modal mt-16 bg-blue-one h-fit w-4/5 max-w-md rounded">
                <div className="edit-modal-content bg-blue-five border border-blue-two rounded pb-3">

                    <header className="p-3 flex justify-between items-center bg-blue-five rounded-t mb-5 border-b border-blue-two">
                        <h2 className="text-2xl">Edit Task</h2>
                        <Button className="bg-blue-two p-2 rounded" btnTask={closeModal} btnContent={<FaXmark />} /> 
                    </header>
                   
                    <form className="text-center flex flex-col" onSubmit={(e) => editForm([e, editData])}>

                        <select name="tagSelect" id="tagSelect" className="m-3 p-1 bg-blue-four rounded border border-blue-two" defaultValue={editPlaceholders[1].type} onChange={(e) => setEditData({...editData, type: e.target.value})}>
                            {tagSelectOptions.map((item, index) => (
                                <option key={index} value={item.value}>{item.label}</option>
                            ))}
                        </select>

                        <input type="text" className="m-3 p-1 bg-blue-four rounded border border-blue-two" defaultValue={editPlaceholders[1].task} onChange={(e) => setEditData({...editData, task: e.target.value})} />

                        <select name="timeSelect" id="timeSelect" className="m-3 p-1 bg-blue-four rounded border border-blue-two" defaultValue={editPlaceholders[1].assigned} onChange={(e) => setEditData({...editData, assigned: e.target.value})}>
                            {timeSelectOptions.map((item, index) => (
                                <option key={index} value={item.value}>{item.label}</option>
                            ))}
                        </select>

                        <Button className="bg-blue-two w-3/6 m-auto py-1 rounded my-5" type="submit" btnContent="Submit" />

                    </form>

                </div>
            </div>

        </div>}
        
    </>)
}

export default EditModal