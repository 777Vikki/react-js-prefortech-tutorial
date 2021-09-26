import { useState } from 'react';
import './App.css';
import Btn from './Btn'
import Value from './Value'


function App() {
  let [counter, updateCounter] = useState(0);
  return (
    <div>
      <Btn cls='Reset-btn' sign='Reset' performOp={()=>{updateCounter(0);}}></Btn>
      <div className="Content">
        <div className="Container">
          <div className="Counter-clz">Counter</div>
          <div className="Counter-container">
            <Btn cls='Counter-btn' sign='-' performOp={()=>{updateCounter(counter-1);}}></Btn>
            <Value value={counter}></Value>
            <Btn cls='Counter-btn' sign='+' performOp={()=>{updateCounter(counter+1);}}></Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
