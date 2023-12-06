import React, { useState } from 'react';
import "./widgets/widget.css";
import Draggable from 'react-draggable';

function DemoWidget () {
    return (
        <div className="widget">
            <h1>Demo Widget</h1>
        </div>
    )
}

function WidgetBoard() {
    const [isLocked, setIsLocked] = useState(false);

    const handleLockToggle = () => {
        setIsLocked(!isLocked);
    }

    return (
        <div className="widgetBoard">
            <button onClick={handleLockToggle}>{isLocked ? 'Unlock' : 'Lock'}</button>
            <Draggable disabled={isLocked}>
                <div className="widgetContainer">
                    <DemoWidget />
                </div>
            </Draggable>
        </div>
    );
}

export default WidgetBoard;