import React from 'react';
import './Table.css';

const Tbody = ({ body, BB_size, count, showRow, tbody_click }) => {
    const block_size = BB_size / (showRow.end - showRow.start + 1);
    //const block_size = BB_size / count.show;

    console.log(showRow)

    const body_context = body.map((context, row) => {
        //console.log(context)
        //if (showRow.start <= row && row <= showRow.end) {
        if (true) {
            return <div key={row}>{
                context.map((inside, col) => {
                    //control border style & hoverable
                    let border = {
                        width: block_size,
                        borderLeftWidth: '0px',
                        borderTopWidth: '1px',
                        borderRightWidth: '1px',
                        borderBottomWidth: '0px',
                        visibility: 'hidden',
                        left: -(block_size * showRow.start + (showRow.f))
                    };
                    let className = 'block';

                    if (showRow.start <= row && row <= showRow.end) border.visibility = 'visible'
                    if (col === context.length - 1) border.borderBottomWidth = '1px';
                    if (col > 0) className += ' activalbe'
                    if (inside.highlight === 2) className += ' clicked'
                    if (inside.highlight === 3) className += ' neighbor'
                    //control clickable when block is price 
                    return (col > 0) ?
                        <div key={col} className={className} style={border} onClick={() => tbody_click(col, row)}>
                            <span> {inside.text} </span>
                        </div>
                        :
                        <div key={col} className={className} style={border}>
                            <span> {inside.text} </span>
                        </div>
                })
            }</div>
        }

    })

    return (
        <div className='tbody'>{body_context}</div>
    )
}

export default Tbody;