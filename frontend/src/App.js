import React, { useState, useEffect } from 'react';

function App() {

  const [fruitData, setFruitData] = useState();
  const [load, setLoad] = useState(true);
  
  useEffect(() => {
    fetch("http://localhost:5000/input-fruit")
      .then(response => response.json())
      .then(data => {
        setFruitData(data)
        setLoad(false)
    })
  })

  return (
    <div className="App">
      {load ? <h1>Loading...</h1> :
        <div>
          <h1>{fruitData[0].name}</h1>
        </div>
      }
    </div>
  );
}

export default App;
