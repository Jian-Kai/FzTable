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
        for (let i = 0; i < newbody.length; i++) {
            for (let j = 1; j < newbody[i].length; j++) {
                newbody[i][j].highlight = 0;
                if (i === row && j === col) newbody[i][j].highlight = 2;
                else if (i === row) newbody[i][j].highlight = 3;
                else if (j === col) newbody[i][j].highlight = 3;
            }
        }

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