import Button from "./Button"
import { FaXmark } from 'react-icons/fa6'
import { useState } from "react"


function EditModal( { modVisible, modVisibleFunc, tagSelectOptions, timeSelectOptions, editPlaceholders } ) {

    const closeModal = () => modVisibleFunc(false)
    console.log(editPlaceholders)

    return (<>

        {modVisible && <div className="edit-modal-overlay bg-blue-five/[.8] w-screen h-screen fixed top-0 flex justify-center" onClick={(e) => e.target.className.includes("edit-modal-overlay") && modVisibleFunc(false)}>

            <div className="edit-modal mt-16 bg-blue-one h-fit w-4/5 max-w-md rounded">
                <div className="edit-modal-content text-blue-five">

                    <header className="p-2 flex justify-between">
                        <h2>Edit Task</h2>
                        <Button btnTask={closeModal} btnContent={<FaXmark />} /> 
                    </header>
                   
                    <form className="text-center">
                        <select name="tagSelect" id="tagSelect">
                            {tagSelectOptions.map((item, index) => (
                                <option key={index} value={item.value} selected={item.value === editPlaceholders[1].type}>{item.label}</option>
                            ))}
                        </select>
                        <input type="text" value={editPlaceholders[1].task} />
                        <select name="timeSelect" id="timeSelect">
                            {timeSelectOptions.map((item, index) => (
                                <option key={index} value={item.value} selected={item.value === editPlaceholders[1].assigned}>{item.label}</option>
                            ))}
                        </select>
                    </form>

                </div>
            </div>

        </div>}
        
    </>)
}

export default EditModal