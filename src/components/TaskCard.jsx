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

    return (<div className="bg-blue-five hover:bg-blue-four p-3 mx-auto rounded my-10 relative flex flex-col items-center w-5/6 sm:flex-row sm:justify-between phone:w-4/6 shadow-sm shadow-blue-one hover:-translate-y-0.5 transition-colors transition-transform">
    
        <p className="text-center rounded-2xl py-2 px-5 absolute -top-4 -left-5 border-4 border-blue-five font-medium" style={condTypeStyling}>{task.type}</p>
        <li className={`basis-6/12 text-start my-5 ${task.completed && "line-through"}`}>{task.task}</li>
        <p className={`basis-2/12 text-start border-y sm:border-y-0 sm:border-l mb-5 sm:mb-0 sm:mx-2 p-3 ${task.completed && "line-through"}`}>{task.assigned}</p>
        <div className={task.completed ? "hidden" : "basis-2/12 text-end"}>
            <Button className="bg-blue-two p-2 mx-3 sm:my-1 rounded hover:bg-blue-three" id="doneButton" btnTask={doneClick} btnContent={<FaCheck />} />
            <Button className="bg-blue-two p-2 mx-3 sm:my-1 rounded hover:bg-blue-three" id="doneButton" btnTask={editClick} btnContent={<FaPen />} />
            <Button className="bg-blue-two p-2 mx-3 sm:my-1 rounded hover:bg-blue-three" id="delButton" btnTask={deleteClick} btnContent={<FaTrash />} />
        </div>

    </div>)
}

export default TaskCard

