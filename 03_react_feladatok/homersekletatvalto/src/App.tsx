import './App.css'
import {useState} from 'react';

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [resultValue, setResultValue] = useState("");
  const [operationValue, setOperationValue] = useState("add");

  const onButtonClick = () => {
    if (operationValue == "add"){
      setResultValue(`Az eredmény: ${firstNumber + secondNumber}`)
    } else if (operationValue == "sub") {
      setResultValue(`Az eredmény: ${firstNumber - secondNumber}`)
    } else if (operationValue == "mul") {
      setResultValue(`Az eredmény: ${firstNumber * secondNumber}`)
    } else if (operationValue == "div") {
      setResultValue(`Az eredmény: ${firstNumber / secondNumber}`)
    }
  }

  return (
    <form>
        <h2>Adja meg celsiusban a hőmérsékletet</h2>
        <input type="number"/>
        <button onClick={onButtonClick})"></button>
    </form>
  )
}

export default App
