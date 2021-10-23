import React, { useState } from 'react'
import '../styles/Clock.css';

export default function Clock() {
    const getTimer = () => {
        const time = new Date();
        const hours =  time.getHours() >= 12? time.getHours() - 12 : time.getHours();
        const minutes = time.getMinutes();
        return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)} ${time.getHours() >= 12? 'PM' : 'AM'}`;
    }
    const [timer, updateTimer] = useState(getTimer);
    setInterval(() => {
        updateTimer(getTimer);
    }, 1000);
    return (
        <div>
            <div className="fs-1 fw-bold text-center clock-clz">{timer}</div>          
        </div>
    )
}
