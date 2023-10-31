import TaskCard from "./TaskCard"

function CompContainer( { compTasks, filtTasksActive, filteredCompTasks } ) {

    return (<>

        <div className="w-11/12 sm:w-4/5 max-w-5xl mx-auto my-10">
            <h1 className="text-center text-3xl">Completed Tasks</h1>
            <ul>
                {filtTasksActive ? filteredCompTasks.map((item, index) => (
                    <div key={index}>
                        <TaskCard task={item} index={index} />
                    </div>
                )) : compTasks.map((item, index) => (
                    <div key={index}>
                        <TaskCard task={item} index={index} />
                    </div>
                ))}
                {}
            </ul>
        </div> 
        

    </>)
}

export default CompContainer