import React, { useState, useEffect } from 'react';
import Input from '../../Components/Input';
import Display from '../../Components/Display';

const Main = () => {

    const [bin, setBin] = useState({ value: '', binary: false});
    const [dec, setDec] = useState();

    useEffect(() => {
        if (bin.value.length > 0 && bin.binary) {
            setDec(convertToDecimal(bin.value))
        } else if (bin.value.length === 0) {
            setDec('')
        }
    }, [bin])

    const notBinReg = /[^01]/;

    const handleBinary = (e) => {
        const { value } = e.target;
        setBin({value, binary: !notBinReg.test(value)});
    }

    const convertToDecimal = (binary) => {
        const splitedBin = binary.toString().split('').reverse();
        let convertedNum = 0;
        console.log(convertedNum);
        splitedBin.map((item, index) => {
           return convertedNum += Math.pow(2, index) * item;
        })
        return convertedNum
    }

    return(
        <>
            <Input binary={bin.value} handleBinary={handleBinary} />
            <Display isBin={bin.binary} decimal={dec} />
        </>
    )
}

export default Main;