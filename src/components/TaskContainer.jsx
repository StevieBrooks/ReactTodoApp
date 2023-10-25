import TaskCard from "./TaskCard"

function TaskContainer( { tasks, setTasks } ) {

    const placeholderTasks = [
        {type: "Work", task: "update database", assigned: "Evening", completed: false},
        {type: "Home", task: "look for new apartment", assigned: "Weekend", completed: false},
        {type: "Family", task: "meet sister for lunch", assigned: "Afternoon", completed: false}
    ]

    return (<>
    
        <div className="w-4/5 mx-auto"> 
            <ul>
                {placeholderTasks.map((item, index) => (
                    <div key={index}>
                        <TaskCard tasks={tasks} setTasks={setTasks} task={item} index={index} />
                    </div>
                ))}

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