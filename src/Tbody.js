import React from 'react';
import './Table.css';

const Tbody = ({ body, BB_size, showRow, load, tbody_click, roolsp }) => {
    const block_size = BB_size / (showRow.end - showRow.start + 1);
    //const block_size = BB_size / count.show;

    //console.log(showRow)
    let reload = (load === null || BB_size > 769 - 88) ? showRow : load;
    const body_context = body.map((context, row) => {
        //console.log(context)
        //if (showRow.start <= row && row <= showRow.end) {
        if (true) {
            return <div key={row}>{
                context.map((inside, col) => {
                    //control border style & hoverable
                    let border = {
                        width: block_size,
                        borderLeftWidth: '1px',
                        borderTopWidth: '1px',
                        borderRightWidth: '0px',
                        borderBottomWidth: '0px',
                        visibility: 'hidden',
                        left: -(block_size * reload.start + (reload.start)),
                        transition: "left linear " + roolsp + "s, visibility cubic-bezier(0.075, 0.82, 0.165, 1) " + roolsp + "s"
                    };
                    let className = 'block';

                    if (col === 0) border.background = "#eaedf2"

                    if (reload.start <= row && row <= reload.end) border.visibility = 'visible'
                    if (col === context.length - 1) border.borderBottomWidth = '1px';
                    if (row === showRow.end) border.borderRightWidth = '1px';
                        if (col > 0) className += ' activalbe'
                    if (inside.highlight === 2) className += ' clicked'
                    if (inside.highlight === 3) className += ' neighbor'
                    //control clickable when block is price 
                    return (col > 0) ?
                        <div key={col} className={className} style={border} onClick={(e) => tbody_click(col, row, e)}>
                            {
                                (inside.text === "查看") ?
                                    (col === 1 && row === 0) ?
                                        "--" : inside.text
                                    :
                                    (inside.text === 12300) ?
                                        <div>
                                            <span className='price low'> {"$" + inside.text} </span>
                                            <span>起</span>
                                        </div>
                                        :
                                        <div>
                                            <span className='price'> {"$" + inside.text} </span>
                                            <span>起</span>
                                        </div>
                            }

                        </div>
                        :
                        <div key={col} className={className} style={border}>
                            {
                                (inside.text === '01/01(六)') ? <span className="newyear2"> {inside.text} </span> : <span> {inside.text} </span>
                            }

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