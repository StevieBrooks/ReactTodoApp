import { useState } from "react"

function CompContainer( { compTasks } ) {

    return (<>

        <ul>
            {compTasks.map((item, index) => (
                <div key={index}>
                    {item.task}
                </div>
            ))}
        </ul>

    </>)
}

export default CompContainer