import PropTypes from 'prop-types'

function Header( { headerTitle, reversed } ) {
    return (<>
        <header className="flex justify-center bg-blue-five py-1">
            <h1 className='text-5xl font-mono'>{headerTitle}</h1>
        </header>
    </>)
}

Header.propTypes = {
    headerTitle: PropTypes.string.isRequired,
}

export default Header