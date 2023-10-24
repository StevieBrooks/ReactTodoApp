
function TaskCard( { tasks, setTasks, task, index } ) {


    const doneClick = () => {
        const taskToMove = [index, tasks[index]]
        setTasks(taskToMove)
    }

    return (<>
    
        <p>{task.type}</p>
        <li>{task.task}</li>
        <p>{task.assigned}</p>
        <button onClick={doneClick}>Done</button>
        <button>Delete</button>

    </>)
}

export default TaskCard

// for button, first use the component, plus use ternary to see if task completed