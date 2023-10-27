import Button from "./Button"
import { FaXmark } from 'react-icons/fa6'
import { useState } from "react"


function FilterModal( { tagMenu, timeMenu, modVisible, modVisibleFunc, filterTasks, filterForm } ) {

    const [tagChoice, setTagChoice] = useState("")
    const [timeChoice, setTimeChoice] = useState("")

    const closeModal = () => modVisibleFunc(false)

   

    return (<>

        {modVisible && <div className="filter-modal-overlay bg-blue-five/[.8] w-screen h-screen fixed top-0 flex justify-center" onClick={(e) => e.target.className.includes("filter-modal-overlay") && modVisibleFunc(false)}>

            <div className="filter-modal mt-16 bg-blue-one h-fit w-4/5 max-w-md rounded">
                <div className="filter-modal-content text-blue-five">

                    <header className="p-2 flex justify-between">
                        <h2>Filter Tasks</h2>
                        <Button btnTask={closeModal} btnContent={<FaXmark />} /> 
                    </header>
                    <form className="text-center" onSubmit={(e) => filterForm([e, tagChoice, timeChoice, ])}>

                        <select name="tagSelect" id="tagSelect" onChange={(e) => setTagChoice(e.target.value)}>
                            {tagMenu.map((item, index) => (
                                <option key={index} value={item.value}>{item.label}</option>
                            ))}
                        </select>

                        <select name="timeSelect" id="timeSelect" onChange={(e) => setTimeChoice(e.target.value)}>
                            {timeMenu.map((item, index) => (
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

export default FilterModal