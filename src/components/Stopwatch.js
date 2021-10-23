import React, { useState, useRef } from 'react';
import '../styles/Stopwatch.css'

export default function Stopwatch() {
    const [isPaused, updatePaused] = useState(false);
    const [timer, setTimer] = useState(0);
    const countRef = useRef(null);
    let conter_stopwatch;
    const stopwatchHandler = () => {
        if(isPaused) {
            clearInterval(conter_stopwatch)
        } else {
            conter_stopwatch = setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 10)
        }
        updatePaused(!isPaused)
    }

    const resetStopwatch = () => {
        clearInterval(conter_stopwatch);
        updatePaused(false);
        setTimer(0)
    }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
      }
    return (
        <div>
            <div className="stopwatch-circle my-3">
                <div className="position-absolute end-0 top-0">
                    <button type="button" className="btn btn-outline-dark btn-lg" disabled={timer === 0} onClick={resetStopwatch}>Reset</button>
              </div>
                <div className="border border-dark rounded-circle">
                    <div className="timer-clz">
                        <span className="fs-1">{formatTime()}</span>
                    </div>
                    <h3 className="timer-btn" onClick={stopwatchHandler}>{isPaused? 'Stop' : 'Start'}</h3>
                </div>
            </div>
        </div>
    )
}
