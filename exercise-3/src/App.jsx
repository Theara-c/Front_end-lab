import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState(0);
  const [b, setB]  = useState(0);
  const [result, setResult] = useState(0);
  const [error, setError] = useState(false);
  /* You will need some function to handle the key pressed and button events */
  function onA(e){
    setA(e.target.value);
  }
  function onB(e){
    setB(e.target.value);
  }
  function compute(){
    let numA = parseFloat(a);
    let numB = parseFloat(b);
    if ( isNaN(numA) || isNaN(numB) ){
      setError(true);
      setResult("A and B shall be numbers !.")
    } else {
      setError(false);
      setResult(numA + numB);
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA}  />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>
      
      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
    <input  className={error ? "error" : ""}   disabled  value ={result}/>
      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;
