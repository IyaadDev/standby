import React from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";
import Customize from "./customize";
import Clock from "./clock";

function App() {
    return (
        <div className="app">
            <Clock />
            <Customize />
        </div>
    );
}

export default App;