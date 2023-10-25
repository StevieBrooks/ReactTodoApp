import TaskCard from "./TaskCard"

function TaskContainer( { tasks, setTasks } ) {

    

    return (<>
    
        <div className="w-4/5 max-w-5xl mx-auto"> 
            <ul>

                {tasks.map((task, index) => (
                    <div key={index}>
                        <TaskCard tasks={tasks} setTasks={setTasks} task={task} index={index} />
                    </div>          
                ))}

            </ul>
        </div>

    </>)
}

export default TaskContainer

// Build edit task button and functionaltiy if feeling adventurous