import React from 'react';

const Display = ({decimal, isBin}) => {
    return (
        <div className="display">
            { isBin && decimal ? <h3> Your decimal: {decimal}</h3> : <span role="img"> 🤷 Waiting for a binary number</span>}
        </div>
    )
}

export default Display;