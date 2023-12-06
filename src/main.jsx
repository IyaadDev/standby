import React from 'react'
import ReactDOM from 'react-dom/client'
import Clock from './clock/index.jsx'
import "./App.css";
import WidgetBoard from './widgetBoard/index.jsx';

function App() {
  return (
    <div className="App">
      <WidgetBoard />
      <Clock />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
)
