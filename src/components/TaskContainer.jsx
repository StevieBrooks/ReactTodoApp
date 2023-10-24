function TaskContainer( { tasks } ) {
    return (<>
    
        <ul>
            {tasks.map((task, index) => (
                <div key={index}>
                    <p>{task.type}</p>
                    <li>{task.task}</li>
                    <p><strong>Assigned to: </strong>{task.assigned}</p>
                    <button>Delete</button>
                </div>
            ))}
        </ul>

    </>)
}

export default TaskContainer

// could put tasks in table format so can give headers for type, task, etc