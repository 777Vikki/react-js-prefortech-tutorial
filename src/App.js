import Stopwatch from "./components/Stopwatch";
import Clock from "./components/Clock";
import { useState } from 'react';

function App() {
  const [timerTitle, updateTitle] = useState('Stop Watch');
  return (
    <>
      <div className="container border border-dark mt-5">
        <div className="card border-0 my-4 mx-3">
          <div className="card-header bg-white border-bottom-0">
            <h1 className="text-center">{timerTitle}</h1>
          </div>
          <div className="card-body">
            {timerTitle === 'Clock'? <Clock /> : <Stopwatch />}
            <div className="card-footer bg-white border-top-0">
              <div className="d-flex justify-content-around">
                <button disabled={timerTitle === 'Clock'} type="button" className="btn btn-outline-dark btn-lg" onClick={()=>{updateTitle('Clock')}}>Clock</button>
                <button disabled={timerTitle === 'Stop Watch'} type="button" className="btn btn-outline-dark btn-lg" onClick={()=>{updateTitle('Stop Watch')}}>Stop Watch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
