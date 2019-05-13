import React, { useState } from 'react';
import './Table.css'

const Table = ({ table }) => {
    console.log(table)
    
    return (
        <div style={{ cursor: 'pointer' }}>
            {
                table.map((line, column) => {
                    let borderBottomWidth = '0px';
                    if (column === (table.length - 1)) {
                        borderBottomWidth = '1px';
                    }
                    return (
                        <div className="column" key={column} col={column}>
                            {

                                line.map((inline, row) => {
                                    let border = {
                                        borderLeftWidth: '0px',
                                        borderTopWidth: '1px',
                                        borderRightWidth: '1px',
                                    }
                                    if (row === (0)) {
                                        border.borderLeftWidth = '1px';
                                    }
                                    border.borderBottomWidth = borderBottomWidth;
                                    return <div key={row} row={row} className="block" style={border}> {inline.text} </div>
                                }
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Table