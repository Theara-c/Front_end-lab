import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
const [text, setText] = useState("hello")
  /* You will need a function to handle a key pressed on the first input and update the state*/
  function handleNameChange(e){
    setText(e.target.value);
  }
  return(

    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input  type="textfield" onChange={handleNameChange}/>

      <p>
        <label>Here is the text in upper case</label>
            {/* This input will need to display the text entered in lower case */}
        <input disabled  value={text.toLocaleUpperCase()} />
        
      </p>
    </main>
  );
}

export default App;
