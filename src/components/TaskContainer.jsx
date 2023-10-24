import TaskCard from "./TaskCard"

function TaskContainer( { tasks, setTasks } ) {
    return (<>
    
        <div className="w-4/5 mx-auto"> 
            <ul>
                {tasks.map((task, index) => (
                    <div key={index} className="bg-blue-four py-3 flex justify-around items-center border-b border-solid">
                        <TaskCard tasks={tasks} setTasks={setTasks} task={task} index={index} />
                    </div>
            
                ))}
            </ul>
        </div>

    </>)
}

export default TaskContainer

// Build edit task button and functionaltiy if feeling adventurous