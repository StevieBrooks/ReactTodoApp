import { FaCheck, FaPen, FaTrash } from "react-icons/fa6"
import Button from "./Button";

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
        console.log(taskToMove)
        taskToMove[1].completed = true
        setTasks(taskToMove)
    }

    const editClick = () => {
        const taskToEdit = [index, tasks[index], "edit"]
        console.log(taskToEdit)
        setTasks(taskToEdit)
    }

    const deleteClick = (e) => {
        const taskToDelete = [index, tasks[index], "delete"]
        console.log(taskToDelete)
        setTasks(taskToDelete)
    }

    return (<div className="bg-blue-four py-3 flex justify-between items-center border-b border-solid">
    
        <p className="basis-1/12 text-center rounded-2xl p-1" style={condTypeStyling}>{task.type}</p>
        <li className="basis-6/12 text-start">{task.task}</li>
        <p className="basis-2/12 text-start">{task.assigned}</p>
        <div className={task.completed ? "hidden" : "basis-2/12 text-end"}>
            <Button id="doneButton" btnTask={doneClick} btnContent={<FaCheck />} />
            <Button id="doneButton" btnTask={editClick} btnContent={<FaPen />} />
            <Button id="delButton" btnTask={deleteClick} btnContent={<FaTrash />} />
        </div>

    </div>)
}

export default TaskCard

