import PropTypes from "prop-types"

function Button( { btnContent, type } ) {
    return (<>
        <button type={type} className={`bg-blue-two rounded-sm px-2 py-1 m-1`}>{btnContent}</button>
    </>)
}

Button.propTypes = {
    btnContent: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ])
}

export default Button