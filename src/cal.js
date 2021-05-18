import React, { useState } from 'react';
import "./calc.css";

const Calc = () => {

    const [result, setResult] = useState("");

    function handleClick(e) {
        setResult(result + e.target.name);
    }

    function clear() {
        setResult("");
    }

    function calculate() {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("error");
        }
    }

    return (
        <>
            <div className="calculator">
                <div> <input type="text" value={result} autoFocus /> </div>

                <div className="keypad">
                    <button id="clear" onClick={clear}>Clear</button>
                    <button id="result" className="operator" onClick={calculate}>=</button>
                    <button name="+" className="operator" onClick={handleClick}>+</button>
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button name="-" className="operator" onClick={handleClick}>-</button>
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="6" onClick={handleClick}>6</button>
                    <button name="*" className="operator" onClick={handleClick}>*</button>
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button name="/" className="operator" onClick={handleClick}>/</button>
                </div>

            </div>
        </>
    )
}

export default Calc
