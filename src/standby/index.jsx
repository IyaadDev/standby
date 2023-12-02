import React, { useState } from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";
import Clock from "./clock";
import Backgrounds from "./background";
import Nav from "./nav";

function Customize() {
    const [isBackgroundsOpen, setIsBackgroundsOpen] = useState(false);
    const [isShowSecondsOpen, setIsShowSecondsOpen] = useState(false);

    const handleCustomizeClick = () => {
        setIsBackgroundsOpen(!isBackgroundsOpen);
        setIsShowSecondsOpen(!isShowSecondsOpen);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <button className="customizeBtn" onClick={handleCustomizeClick}>
                        {isBackgroundsOpen ? "Close" : "Customize"}
                    </button>
                </div>
                {isShowSecondsOpen && (
                    <div className="col-12">
                        <div className="showSeconds custom-control custom-switch">
                            <label htmlFor="showSeconds">Show Seconds</label>
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="showSeconds"
                                onChange={(e) => {
                                    showSeconds(e.target.checked);
                                }}
                            />
                        </div>
                    </div>
                )}
                <div className="col-12">
                    <Backgrounds isOpen={isBackgroundsOpen} />
                </div>
            </div>
        </div>
    );
}

function App() {
    const [showSeconds, setShowSeconds] = useState(false);

    return (
        <div className="app">
            <Nav />
            <Clock showSeconds={showSeconds} />
            <Customize showSeconds={setShowSeconds} />
        </div>
    );
}

export default App;

