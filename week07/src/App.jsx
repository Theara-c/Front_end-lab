
import Header from "./components/Header";
import Score from "./components/Score.jsx";
import {HTML_RESULTS, JAVA_RESULTS, PYTHON_RESULTS, ENGLISH_RESULTS} from "./data.js";
function App() {
  return (
    <>
    <Header title="Group1" />
       <main className="scores-container">
        <Score courseName ="HTML" courseResult = {HTML_RESULTS}/>
        <Score courseName= "JAVA" courseResult = { JAVA_RESULTS}/>
        <Score courseName= "PYTHON" courseResult={PYTHON_RESULTS} />
        <Score courseName= "ENGLISH" courseResult={ENGLISH_RESULTS} />
      </main> 
      
    </>
    
  );
}

export default App;
