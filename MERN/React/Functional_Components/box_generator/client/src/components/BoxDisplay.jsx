import React from 'react';

const BoxDisplay = (props) => {
    return (
            <div className="box" style={{backgroundColor: props.color}}></div>
    )
}

export default BoxDisplay;