function FilterModal( { tagMenu, timeMenu } ) {

    const closeFilter = (e) => {
        console.log(e)
    }

    const filterForm = () => {

    }

    return (<>
        <div className="filter-modal-overlay bg-blue-five/[.8] w-screen h-screen fixed top-0 flex justify-center" onClick={closeFilter}>
            <div className="filter-modal mt-16 bg-blue-one h-fit">
                <div className="filter-modal-content">
                    <header>
                        <h2>Filter Tasks</h2>
                    </header>
                    <form onSubmit={filterForm}>

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

                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default FilterModal