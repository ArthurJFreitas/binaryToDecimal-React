import React from 'react';
import './index.css'

const Input = ({binary, handleBinary}) => {
    return (
        <input 
            name="binary"
            className="binaryInput"
            type="text"
            onChange={(e) => handleBinary(e)}
            value={binary}
            autoFocus
        />
    ) 
}

export default Input;