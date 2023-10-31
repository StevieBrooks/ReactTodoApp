import PropTypes from 'prop-types'
import Button from './Button'
import { FaFolderPlus, FaFilter, FaArrowRotateLeft } from 'react-icons/fa6'

function Header( { headerTitle, addModal, filterModal, resetFunction } ) {
    return (<>
        <header className="flex justify-evenly items-center bg-blue-five py-2 border-b border-blue-two">

            <h1 className='text-3xl phone:text-4xl sm:text-5xl font-mono'>{headerTitle}</h1>
            
            <div className="header-buttons block sm:hidden">
                <Button className="bg-blue-two p-1.5 phone:p-2 mx-1 rounded" btnTask={addModal} btnContent={<FaFolderPlus />} />
                <Button className="bg-blue-two p-1.5 phone:p-2  mx-1 rounded" btnContent={<FaArrowRotateLeft />} btnTask={resetFunction} />
                <Button className="bg-blue-two p-1.5 phone:p-2  mx-1 rounded" btnContent={<FaFilter />} btnTask={filterModal} />
            </div>

        </header>
    </>)
}

Header.propTypes = {
    headerTitle: PropTypes.string.isRequired,
}

export default Header