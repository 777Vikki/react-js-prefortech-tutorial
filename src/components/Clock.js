import React, { useState } from 'react'
import '../styles/Clock.css';

export default function Clock() {
    const getTimer = () => {
        const time = new Date();
        const hours =  time.getHours() >= 12? time.getHours() - 12 : time.getHours();
        const minutes = time.getMinutes();
        return `${hours <= 9? '0'+hours:hours}:${minutes<=9? '0'+minutes : minutes} ${time.getHours() >= 12? 'PM' : 'AM'}`;
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
