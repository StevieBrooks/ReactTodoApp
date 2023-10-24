import PropTypes from "prop-types"

function Button( { btnContent, btnStyle, type } ) {
    return (<>
        <button type={type} className={`bg-blue-two rounded-sm px-2 py-1 m-1 ${btnStyle}`}>{btnContent}</button>
    </>)
}

Button.propTypes = {
    btnContent: PropTypes.string.isRequired,
    btnStyle: PropTypes.string,
}

export default Button