import React, { useState } from 'react'

const MyCalculator = () => {
    const [value, setvalue] = useState('')
    const getData = (e) => {
        setvalue(value.concat(e.target.name))
    }
    const Calculate = () => {
        try {
            setvalue(eval(value).toString());
        } catch (error) {
            setvalue(" Syntax ERROR")
        }
    }
    const Clear = () => {
        setvalue("")
    }
    const Back = () => {
        setvalue(value.slice(0, value.length - 1));
    }
    return (
        <>
            <div className="container">
                <h1> Simple Calculator</h1>
                <div className="main">
                    <div className="display">{value}</div>
                    <div className="box">
                        <button name='7' onClick={getData} className='btn'>7</button>
                        <button name='8' onClick={getData} className='btn'>8</button>
                        <button name='9' onClick={getData} className='btn'>9</button>
                        <button onClick={Back} className='btn' id='del'>DEL</button>
                        <button onClick={Clear} className='btn' id='clear'>AC</button>
                        <button name='4' onClick={getData} className='btn'>4</button>
                        <button name='5' onClick={getData} className='btn'>5</button>
                        <button name='6' onClick={getData} className='btn'>6</button>
                        <button name='*' onClick={getData} className='btn'>X</button>
                        <button name='/' onClick={getData} className='btn'>/</button>
                        <button name='1' onClick={getData} className='btn'>1</button>
                        <button name='2' onClick={getData} className='btn'>2</button>
                        <button name='3' onClick={getData} className='btn'>3</button>
                        <button name='+' onClick={getData} className='btn'>+</button>
                        <button name='-' onClick={getData} className='btn'>-</button>
                        <button name='0' onClick={getData} className='btn'>0</button>
                        <button name='.' onClick={getData} className='btn'>.</button>
                        <button onClick={getData} className='btn'> 10<sup>*</sup></button>
                        <button name='%' onClick={getData} className='btn'>%</button>
                        <button onClick={Calculate} className='btn'>=</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyCalculator
