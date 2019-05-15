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
                        borderRightWidth: '1px',
                        borderBottomWidth: '0px',
                    }
                    if (index === head.length - 1) border.borderBottomWidth = '1px';
                    return <div key={index} className='block' style={border}>
                        <span>
                            {
                                context.text
                            }
                        </span>

                    </div>
                })
            }

        </div>
    )
}

export default Thead;