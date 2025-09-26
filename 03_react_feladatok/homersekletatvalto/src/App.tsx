import './App.css'
import {useState} from 'react';

function App() {
  const [numberValue, setNumberValue] = useState(0);
  const [resultValue, setResultValue] = useState("");

  const onButtonClick = () => {
      
  }

  return (
    <form>
        <h2>Adja meg celsiusban a hőmérsékletet</h2>
        <input type="number" onChange={(e) => setNumberValue(Number(e.target.value))}/>
        <button onClick={onButtonClick}>Számítás</button>
    </form>
  )
}

export default App
