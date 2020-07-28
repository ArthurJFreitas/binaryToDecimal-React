import React from 'react';

const Display = ({decimal, isBin}) => {
    return (
        <div className="display">
            { isBin ? <span>{decimal}</span> : <span> Insira um binario</span>}
        </div>
    )
}

export default Display;