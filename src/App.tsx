import React from "react";
import "./App.css";
import everest from "./assets/Ev.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>Welcome to this COS520 Web Application</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <br /> Brady Dube
                <br /> Hello World
            </p>
            <img src={everest} alt="Her majesty, Everest" />
            <ul>
                <li>Breakfast</li>
                <li>Walks in the city forest</li>
                <li>Naps in bed</li>
            </ul>
        </div>
    );
}

export default App;
