import Button from "./Button"
import { FaXmark } from 'react-icons/fa6'
import { useState } from "react"


function FilterModal( { tagMenu, timeMenu, modVisible, modVisibleFunc, allTasks } ) {

    const [tagChoice, setTagChoice] = useState("")
    const [timeChoice, setTimeChoice] = useState("")

    const closeModal = () => modVisibleFunc(false)

    const filterForm = (e) => {
        e.preventDefault()
        const tagParam = tagChoice
        const timeParam = timeChoice
        console.log(tagChoice)
        console.log(allTasks)
        // fucks up on submit

        /* 
        - need to figure out how to filter without destroying state - make copy of tasks and compTasks to be used for following filters or reset

        onClick={() => modVisibleFunc(false)}
        */
    }

    return (<>

        {modVisible && <div className="filter-modal-overlay bg-blue-five/[.8] w-screen h-screen fixed top-0 flex justify-center" onClick={(e) => {e.target.children[0].children[0] && modVisibleFunc(false)}}>

            <div className="filter-modal mt-16 bg-blue-one h-fit w-1/2">
                <div className="filter-modal-content text-blue-five">

                    <header className="p-2 flex justify-between">
                        <h2>Filter Tasks</h2>
                        <Button btnTask={closeModal} btnContent={<FaXmark />} /> 
                    </header>
                    <form className="text-center" onSubmit={filterForm}>

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