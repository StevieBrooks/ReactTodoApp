import TaskCard from "./TaskCard"

function TaskContainer( { tasks, setTasks } ) {
    return (<>
    
        <ul>
            {tasks.map((task, index) => (

                <div key={index} data-index={index}>
                    <TaskCard tasks={tasks} setTasks={setTasks} task={task} index={index} />
                </div>
                
            ))}
        </ul>

    </>)
}

export default TaskContainer

// Build edit task button and functionaltiy if feeling adventurous