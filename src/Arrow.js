import React, {useState} from 'react'
import './Arrow.css'
const Arrow = ({direction, position, slide}) =>{
    
    const style = {};
    style[direction] = position;
    const value  = (direction === 'right')? 1 : -1

    return(
        <div className='arrow' style = {style} onClick={()=>slide(value)}>
            {
                (direction === 'right')? '>' : '<'
            }
        </div>
    )
}

export default Arrow;