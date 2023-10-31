import Button from "./Button"
import { FaXmark } from 'react-icons/fa6'
import { useState } from "react"


function FilterModal( { tagMenu, timeMenu, modVisible, modVisibleFunc, filterForm } ) {

    const [tagChoice, setTagChoice] = useState("")
    const [timeChoice, setTimeChoice] = useState("")

    const closeModal = () => modVisibleFunc(false)

    return (<>

        {modVisible && <div className="filter-modal-overlay bg-blue-three/[.8] w-screen h-screen fixed top-0 flex justify-center" onClick={(e) => e.target.className.includes("filter-modal-overlay") && modVisibleFunc(false)}>

            <div className="filter-modal mt-16 bg-blue-one h-fit w-4/5 max-w-md rounded">
                <div className="edit-modal-content bg-blue-five border border-blue-two rounded pb-3">

                    <header className="p-3 flex justify-between items-center bg-blue-five rounded-t mb-5 border-b border-blue-two">
                        <h2 className="text-2xl">Filter Tasks</h2>
                        <Button className="bg-blue-two p-2 rounded" btnTask={closeModal} btnContent={<FaXmark />} /> 
                    </header>
                    <form className="text-center flex flex-col" onSubmit={(e) => filterForm([e, tagChoice, timeChoice, ])}>

                        <select name="tagSelect" id="tagSelect" className="m-3 p-1 bg-blue-four rounded border border-blue-two" onChange={(e) => setTagChoice(e.target.value)}>
                            {tagMenu.map((item, index) => (
                                <option key={index} value={item.value}>{item.label}</option>
                            ))}
                        </select>

                        <select name="timeSelect" id="timeSelect" className="m-3 p-1 bg-blue-four rounded border border-blue-two" onChange={(e) => setTimeChoice(e.target.value)}>
                            {timeMenu.map((item, index) => (
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

export default FilterModal