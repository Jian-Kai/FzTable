import React, { useState } from 'react';
import './Table.css'

import Thead from './Thead'
import Tbody from './Tbody'

const Table = ({ thead, tbody, size, count, showRow }) => {

    const [body, setBody] = useState(tbody);

    const HB_size = 88;
    console.log(body)
    const tbody_click = (col, row) => {
        let newbody = [...body]
        newbody[row][col].highlight = 2;
        setBody([...newbody])
    }

    return (
        <div className='table'>
            <Thead head={thead} HB_size={HB_size} />
            <Tbody body={body} BB_size={size - HB_size} count={count} showRow={showRow} tbody_click={tbody_click} />
        </div>
    )
}

export default Table