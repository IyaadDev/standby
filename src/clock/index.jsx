import React, { useState, useEffect } from 'react';
import "./clock.css";

function Digits({ showSeconds, font }) {
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

    let fontSize = showSeconds ? '250px' : '250px';

    let fontFamily;
    if (font === 1) {
        fontFamily = 'Montserrat';
    } else if (font === 2) {
        fontFamily = 'Lato';
    } else if (font === 3) {
        fontFamily = 'Oswald';
    }

    return <h1 className='digits' style={{ fontFamily, fontSize }}>{currentTime}</h1>;
}

function Clock({ showSeconds, font }) {
    return (
        <div className="clock">
            <Digits showSeconds={false} font={3} />
        </div>
    );
}

export default Clock;