import React, { useEffect, useState } from 'react';

function App() {
    const [szam, setSzam] = useState<number>(0);
    const [eredmeny, setEredmeny] = useState<string>('');

    useEffect(() => {
      console.log('hello')
    }, [szam])
 
    const onBtnClick = () => {
        setEredmeny(`Az eredmény: ${szam * szam}`);
    };

    return (
        <div>
            <input
                type="number"
                placeholder="Add meg a számot"
                onChange={(e) => setSzam(Number(e.target.value))}
            />

            <button onClick={onBtnClick}>Számítás</button>

            <br />

            <h2>{eredmeny}</h2>
        </div>
    );
}

export default App;