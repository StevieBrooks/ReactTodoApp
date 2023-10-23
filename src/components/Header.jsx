import PropTypes from 'prop-types'

function Header( { headerTitle, reversed } ) {
    return (<>
        <header className="todo-header">
            <h1>{headerTitle}</h1>
        </header>
    </>)
}

Header.propTypes = {
    headerTitle: PropTypes.string.isRequired,
}

export default Header