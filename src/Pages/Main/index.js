import React, { useState, useEffect } from 'react';
import Input from '../../Components/Input';
import Display from '../../Components/Display';
import './index.css'

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
        <div className="main">
            <div className="content">
                <div>
                 <h1><span className="zero">000</span>Bin2Dec<span className="zero">000</span></h1>
                </div>
                <div>Enter a binary number, and get the decimal conversion</div>
                {!bin.binary && bin.value.length > 0 && <h4 class="error">You entered a non-binary digit (please enter only 0 or 1).</h4>}
                <Input binary={bin.value} handleBinary={handleBinary} />
                <Display isBin={bin.binary} decimal={dec} />
            </div>
            <footer>
                Made by <a href="https://github.com/ArthurJFreitas">Arthur Freitas</a>
            </footer>
        </div>
    )
}

export default Main;