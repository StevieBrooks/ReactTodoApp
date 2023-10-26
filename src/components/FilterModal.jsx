import Button from "./Button"
import { FaXmark } from 'react-icons/fa6'


function FilterModal( { tagMenu, timeMenu, modVisible, modVisibleFunc } ) {

    // const closeFilter = (e) => {
    //     if (e.target.className === "filter-modal-overlay") {
    //         modVisibleFunc(false);
    //     }
    // }
    

    const closeModal = () => modVisibleFunc(false)

    const filterForm = () => {

    }

    return (<>

        {modVisible && <div className="filter-modal-overlay bg-blue-five/[.8] w-screen h-screen fixed top-0 flex justify-center" onClick={() => modVisibleFunc(false)}>
            <div className="filter-modal mt-16 bg-blue-one h-fit w-1/2">
                <div className="filter-modal-content text-blue-five">
                    <header className="p-2 flex justify-between">
                        <h2>Filter Tasks</h2>
                        <Button btnTask={closeModal} btnContent={<FaXmark />} /> 
                    </header>
                    <form className="text-center" onSubmit={filterForm}>

                        <select name="tagSelect" id="tagSelect">
                            {tagMenu.map((item, index) => (
                                <option key={index} value={item.value}>{item.label}</option>
                            ))}
                        </select>

                        <select name="timeSelect" id="timeSelect">
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