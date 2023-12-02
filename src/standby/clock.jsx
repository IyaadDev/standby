import React, { useState, useEffect } from 'react';
import "./clock.css";

function Digits({ showSeconds = true }) {
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

    useEffect(() => {
        setCurrentTime(
            new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                second: showSeconds ? '2-digit' : undefined,
                hour12: false
            })
        );
    }, [showSeconds]);

    return <h1 className='digits'>{currentTime}</h1>;
}


function Clock ({showSeconds}) {
    return (
        <div className="clock">
            <Digits showSeconds={true} />
        </div>
    );
}

export default Clock;