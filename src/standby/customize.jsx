import React, { useState } from "react"; // Add missing import

import Backgrounds from "./background";

function Customize() {
    const [isBackgroundsOpen, setIsBackgroundsOpen] = useState(false);

    const handleCustomizeClick = () => {
        setIsBackgroundsOpen(!isBackgroundsOpen);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <button className="customizeBtn" onClick={handleCustomizeClick}>
                        {isBackgroundsOpen ? "Close" : "Customize"}
                    </button>
                </div>
                <div className="col-12">
                    <Backgrounds isOpen={isBackgroundsOpen} />
                </div>
            </div>
        </div>
    );
}

export default Customize;