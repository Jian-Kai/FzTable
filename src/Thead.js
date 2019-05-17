import React from 'react';
import './Table.css';

const Thead = ({ head, HB_size }) => {
    return (
        <div>
            {
                head.map((context, index) => {
                    let border = {
                        width: HB_size,
                        borderLeftWidth: '1px',
                        borderTopWidth: '1px',
                        borderRightWidth: '0px',
                        borderBottomWidth: '0px',
                        background: '#f7f7f7',
                        zIndex: '2',
                    }
                    if (index === head.length - 1) border.borderBottomWidth = '1px';
                    return (index > 0) ?
                        <div key={index} className='block' style={border}>
                            {
                                (context.text === '01/01(六)') ? <span className="newyear"> {context.text} </span> : <span> {context.text} </span>
                            }
                        </div>
                        :
                        <div key={index} className='block title' style={border}>
                            <span style={{ textAlign: 'right' }}>
                                {
                                    "       " + context.text[2] + context.text[3]
                                }
                            </span>
                            <span style={{ textAlign: 'left' }}>
                                {
                                    context.text[0] + context.text[1] + "       "
                                }
                            </span>

                        </div>
                })
            }

        </div>
    )
}

export default Thead;