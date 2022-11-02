import React, {useState} from 'react';
import { useParams } from 'react-router';

const NumWord = () => {
    const {element, color1, color2} = useParams();

    if (isNaN(+element)) {
        return (
            <div style={{backgroundColor: color2}}>
                <h1 style={{color: color1}}>The word is: {element}</h1>
            </div>
        );
    }
    else if (!isNaN(+element)) {
        return (<h1>The number is: {element}</h1>);
    }
}

export default NumWord;