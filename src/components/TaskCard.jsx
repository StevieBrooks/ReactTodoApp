import '../App.css';

function TaskCard( { tasks, setTasks, task, index } ) {


    const doneClick = () => {
        const taskToMove = [index, tasks[index]]
        setTasks(taskToMove)
    }

    return (<>
    
        <button onClick={doneClick}>Done</button>
        <p className="bg-red-500 text-white p-4">{task.type}</p>
        <li>{task.task}</li>
        <p><strong>Assigned to: </strong>{task.assigned}</p>
        <button>Delete</button>

    </>)
}

export default TaskCard

// for button, first use the component, plus use ternary to see if task completed