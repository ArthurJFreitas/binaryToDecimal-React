import React from 'react';

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