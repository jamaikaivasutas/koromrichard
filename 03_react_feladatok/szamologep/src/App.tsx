import './App.css'
import React, { useState} from 'react';

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  return (
    <form>
        <input type="number" placeholder="Add meg a számot" onChange={(e) => setFirstNumber(Number(e.target.value))}/>
        <select id="types">
            <option value="add">+</option>
            <option value="sub">-</option>
            <option value="mul">*</option>
            <option value="div">/</option>
        </select>
        <input type="number" placeholder="Add meg a másik számot" onChange={(e) => setSecondNumber(Number(e.target.value))}/>
        <button type="button" id="calc">számol</button>
    </form>
  )
}

export default App
