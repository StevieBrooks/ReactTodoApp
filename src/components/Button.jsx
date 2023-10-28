import PropTypes from "prop-types"

function Button( { btnContent, type, btnTask, className, form } ) {

    // const determineClass = (item) => {
    //     return typeof item == "string" ? `bg-blue-two rounded-sm px-2 py-1 m-1` : "bg-blue-two m-1 p-2 rounded"
    // }

    return (<>
        <button type={type} form={form} onClick={btnTask} className={className}>{btnContent}</button>
    </>)
}

Button.propTypes = {
    btnContent: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ])
}

export default Button