import React, { useState } from 'react';

const FormDisplay = (props) => {
    const[color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.newBox(color)
        setColor("");
    };

    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor="color"> Color</label>
            <input type="text" name="color" onChange={ (e) => setColor(e.target.value)} value = {color} />
            <input type="submit" value="Make Box" />
        </form>
    );
}

export default FormDisplay;