import TaskCard from "./TaskCard"

function CompContainer( { compTasks } ) {

    console.log(compTasks)

    return (<>

        <div className="w-4/5 mx-auto my-10">
            <h1 className="text-center text-3xl">Completed Tasks</h1>
            <ul>
                {compTasks.map((item, index) => (
                    <div key={index}>
                        <TaskCard task={item} index={index} />
                    </div>
                ))}
            </ul>
        </div> 
        

    </>)
}

export default CompContainer