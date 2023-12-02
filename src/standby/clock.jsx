import React, { useState, useEffect } from 'react';
import "./clock.css";

function Digits({ showSeconds }) {
    // This is a component that displays the digits of the current time.
    const [currentTime, setCurrentTime] = useState(
        new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: showSeconds ? '2-digit' : undefined,
            hour12: false
        })
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(
                new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: showSeconds ? '2-digit' : undefined,
                    hour12: false
                })
            );
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [showSeconds]);

    return <h1 className='digits'>{currentTime}</h1>;
}

function Clock () {
    return (
        <div className="clock">
            <Digits showSeconds={false} />
        </div>
    );
}

export default Clock;