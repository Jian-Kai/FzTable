import React, { useState } from 'react';
import './Table.css'

const Table = ({ table }) => {
    console.log(table)
    
    return (
        <div style={{ cursor: 'pointer' }}>
            {
                table.map((line, column) => {
                    let border = {
                        borderStyle: 'solid',
                        borderBottomWidth: '0px',
                        borderTopWidth: '1px',
                        borderRightWidth: '1px',
                        borderColor: '#ECF0F1'
                    }
                    if (column === (table.length - 1)) {
                        border.borderBottomWidth = '1px';
                    }
                    return (
                        <div className="column" key={column} col={column}>
                            {

                                line.map((inline, row) => 
                                    {
                                        let borderLeftWidth = '0px';
                                        if (row === (0)) {
                                            borderLeftWidth = '1px';
                                        }
                                        border.borderLeftWidth = borderLeftWidth;
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