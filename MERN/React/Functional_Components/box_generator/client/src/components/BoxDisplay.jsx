import React from 'react';

const BoxDisplay = (props) => {
    return (
        <div>
            <div style={{backgroundColor: props.color, width:50+"px", height: 50+"px", display: "inline-block"}}></div>
        </div>
    )
}

export default BoxDisplay;