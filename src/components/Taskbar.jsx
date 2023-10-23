import Button from "./Button"

function Taskbar( {reversed, newTaskData, setTasks } ) {

    let tagSelect;
    let todoInput;
    let assignSelect;

    const btnStyle = "submit-btn-style"

    const tagSelectOptions = [
        {value: "", label: "- Select Tag -"},
        {value: "Home", label: "Home"},
        {value: "Work", label: "Work"},
        {value: "School", label: "School"},
        {value: "Morning", label: "Morning"},
        {value: "Afternoon", label: "Afternoon"},
        {value: "Evening", label: "Evening"}
    ]

    const assignSelectOptions = [
        {value: "", label: "- Assign To -"},
        {value: "Myself", label: "Myself"},
        {value: "Bobby", label: "Bobby"},
        {value: "Charlie", label: "Charlie"}
    ]

    const handleTagChange = (input) => {
        tagSelect = input
    }

    const handleInputChange = (input) => {
        todoInput = input
    }

    const handleAssignChange = (input) => {
        assignSelect = input
    }

    const submitForm = (e) => {

        e.preventDefault();
        newTaskData(tagSelect, todoInput, assignSelect)
        
    }

    return (<>
        <div className="taskbar-inputs">

            <form onSubmit={submitForm}>

                <select name="tagSelect" id="tagSelect" className="tag-select" onChange={(e) => handleTagChange(e.target.value)} required>
                    {tagSelectOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>

                <input type="text" id="todoInput" className="todo-input" placeholder="Add task..." onChange={(e) => handleInputChange(e.target.value)} required/>

                <select name="assignSelect" id="assignSelect" className="assign-select" onChange={(e) => handleAssignChange(e.target.value)} required>
                    {assignSelectOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>

                <Button type="submit" btnContent="Submit" btnStyle={btnStyle} />

            </form>

        </div>
    </>)
}

export default Taskbar