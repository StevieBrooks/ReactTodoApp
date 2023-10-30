import TaskCard from "./TaskCard"

function TaskContainer( { tasks, setTasks, filtTasksActive, filteredTasks, setFilteredTasks } ) {

    

    return (<>
    
        <div className="w-4/5 max-w-5xl mx-auto"> 
            <ul>

                {filtTasksActive ? filteredTasks.map((task, index) => (
                    <div key={index}>
                        <TaskCard tasks={tasks} setTasks={setTasks} task={task} index={index} filtTasksActive={filtTasksActive} filteredTasks={filteredTasks} setFilteredTasks={setFilteredTasks} />
                    </div>          
                )) : tasks.map((task, index) => (
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