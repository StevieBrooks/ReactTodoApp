import PropTypes from "prop-types"

function Button( { btnContent, btnStyle, type } ) {
    return (<>
        <button type={type} className={`btn ${btnStyle}`}>{btnContent}</button>
    </>)
}

Button.propTypes = {
    btnContent: PropTypes.string.isRequired,
    btnStyle: PropTypes.string,
}

export default Button