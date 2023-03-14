import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)

  console.log("Component rendered")
  useEffect(function () {
    console.log("use effect function ran")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(response => response.json())
      .then(data => setStarWarsData(data))
  }, [count])

  return (
    <div>
      <br />
      <button onClick={
        () => setCount(prevCount => prevCount + 1)}>
        Change Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default App;
