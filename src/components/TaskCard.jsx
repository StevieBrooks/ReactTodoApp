import { FaThumbsUp, FaTrash } from "react-icons/fa6"
function TaskCard( { tasks, setTasks, task, index } ) {

    let condTypeStyling;
    switch (task.type) {
        case "Home":
        condTypeStyling = { background: "peru" };
        break;
        case "Work":
        condTypeStyling = { background: "firebrick" };
        break;
        case "School":
        condTypeStyling = { background: "blueViolet" };
        break;
        case "Social":
        condTypeStyling = { background: "dodgerblue" };
        break;
        default:
        condTypeStyling = { background: "green" };
    }


    const doneClick = () => {
        const taskToMove = [index, tasks[index], "move"]
        taskToMove[1].completed = true
        setTasks(taskToMove)
    }

    const deleteClick = (e) => {
        console.log(e)
        const taskToDelete = [index, tasks[index], "delete"]
        setTasks(taskToDelete)
    }

    return (<div className="bg-blue-four py-3 flex justify-between items-center border-b border-solid">
    
        <p className="basis-1/12 text-center rounded-2xl p-1" style={condTypeStyling}>{task.type}</p>
        <li className="basis-6/12 text-start">{task.task}</li>
        <p className="basis-2/12 text-start">{task.assigned}</p>
        <div className={task.completed ? "hidden" : "basis-2/12 text-end"}>
            <button className="bg-blue-two m-1 p-1" onClick={doneClick}><FaThumbsUp /></button>
            <button className="bg-blue-two m-1 p-1" onClick={deleteClick}><FaTrash /></button>
        </div>

    </div>)
}

export default TaskCard

// for button, first use the component, plus use ternary to see if task completed