import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [resultValue, setResultValue] = useState("");
  const [operationValue, setOperationValue] = useState("add");

  useEffect(() => {
    switch (operationValue) {
      case "add":
        setResultValue(`Az eredmény ${firstNumber + secondNumber}`);
        break;
      case "sub":
        setResultValue(`Az eredmény ${firstNumber - secondNumber}`);
        break;
      case "mul":
        setResultValue(`Az eredmény ${firstNumber * secondNumber}`);
        break;
      case "div":
        setResultValue(`Az eredmény ${firstNumber / secondNumber}`);
        break;
      default:
        setResultValue(`Ismeretlen művelet!`);
    }
  }, [firstNumber, secondNumber, operationValue]);

  return (
    <form>
      <input
        type="number"
        placeholder="Add meg a számot"
        onChange={(e) => setFirstNumber(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Add meg a másik számot"
        onChange={(e) => setSecondNumber(Number(e.target.value))}
      />

      <h2>{resultValue}</h2>
    </form>
  );
}

export default App;
