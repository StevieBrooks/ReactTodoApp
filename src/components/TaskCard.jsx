import { FaCheck, FaPen, FaTrash } from "react-icons/fa6"
import Button from "./Button";

function TaskCard( { tasks, setTasks, task, index, filtTasksActive, filteredTasks, setFilteredTasks } ) {

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
        if(filtTasksActive) {
            const taskToMove = [index, filteredTasks[index], "move"]
            taskToMove[1].completed = true
            setFilteredTasks(taskToMove)
        } else {
            const taskToMove = [index, tasks[index], "move"]
            taskToMove[1].completed = true
            setTasks(taskToMove)
        }
    }

    const editClick = () => {
        if(filtTasksActive) {
            const taskToEdit = [index, filteredTasks[index], "edit"]
            setFilteredTasks(taskToEdit)
        } else {
            const taskToEdit = [index, tasks[index], "edit"]
            setTasks(taskToEdit)
        }
    }

    const deleteClick = () => {
        if(filtTasksActive) {
            const taskToDelete = [index, filteredTasks[index], "delete"]
            console.log(taskToDelete)
            setFilteredTasks(taskToDelete)
        } else {
            const taskToDelete = [index, tasks[index], "delete"]
            console.log(taskToDelete)
            setTasks(taskToDelete)
        }
    }

    return (<div className="bg-blue-four py-3 flex justify-between items-center border-b border-solid">
    
        <p className="basis-1/12 text-center rounded-2xl p-1" style={condTypeStyling}>{task.type}</p>
        <li className="basis-6/12 text-start">{task.task}</li>
        <p className="basis-2/12 text-start">{task.assigned}</p>
        <div className={task.completed ? "hidden" : "basis-2/12 text-end"}>
            <Button className="bg-blue-two p-2 mx-1 rounded" id="doneButton" btnTask={doneClick} btnContent={<FaCheck />} />
            <Button className="bg-blue-two p-2 mx-1 rounded" id="doneButton" btnTask={editClick} btnContent={<FaPen />} />
            <Button className="bg-blue-two p-2 mx-1 rounded" id="delButton" btnTask={deleteClick} btnContent={<FaTrash />} />
        </div>

    </div>)
}

export default TaskCard

// try using key in the div and getting index that way