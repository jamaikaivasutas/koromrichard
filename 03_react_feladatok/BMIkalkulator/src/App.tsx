import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [heightValue, setHeightValue] = useState(0);
  const [weightValue, setWeightValue] = useState(0);
  const [BMIState, setBMIState] = useState("");
  const BMIValue = weightValue / Math.pow(heightValue / 100, 2);

  useEffect(() => {
    if (BMIValue >= 0 && BMIValue <= 15.9) {
      setBMIState("Súlyos soványság");
    } else if (BMIValue >= 16 && BMIValue <= 16.9) {
      setBMIState("Mérsékelt soványság");
    } else if (BMIValue >= 17 && BMIValue <= 18.4) {
      setBMIState("Enyhe soványság");
    } else if (BMIValue >= 18.5 && BMIValue <= 24.9) {
      setBMIState("Normális testsúly");
    } else if (BMIValue >= 25 && BMIValue <= 29.9) {
      setBMIState("Túlsúlyos");
    } else if (BMIValue >= 30 && BMIValue <= 34.9) {
      setBMIState("Elhízott (I. Fokú)");
    } else if (BMIValue >= 35 && BMIValue <= 39.9) {
      setBMIState("Elhízott (II. Fokú)");
    } else if (BMIValue > 40) {
      setBMIState("Súlyosan elhízott (III. Fokú)");
    } else {
      setBMIState("");
    }
  }, [heightValue, weightValue]);

  return (
    <form>
      <label>Magasság (cm): </label>
      <input
        type="number"
        placeholder="Add meg a számot"
        onChange={(e) => setHeightValue(Number(e.target.value))}
      />
      <br></br>
      <label>Testsúly (kg): </label>
      <input
        type="number"
        placeholder="Add meg a másik számot"
        onChange={(e) => setWeightValue(Number(e.target.value))}
      />

      <h2>
        Az állapotod: {BMIState} <br /> (BMI: {BMIValue.toFixed(1)})
      </h2>
    </form>
  );
}

export default App;
