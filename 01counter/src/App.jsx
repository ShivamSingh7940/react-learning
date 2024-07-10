import { useState } from 'react'
import './App.css'

function App() 
{

let [counter,setCounter]=   useState(15)

  //let counter = 5;

  const addValue = () => {
    counter = counter + 1;
    // console.log("Value added", counter);
    setCounter(counter);
    if(counter==20){
      alert("stop")
    }

  }

  const removeValue = () => {
    setCounter(counter-1);
    if(counter - 1 < 0){
      alert("Limit exceed")
  }
}

  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>
        Add value
        </button>
      <br/>
      <button
      onClick={removeValue}>
        decrease value
        </button>
    </>
  )
}

export default App
