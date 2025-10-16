import React from "react";
import "./App.css";
<<<<<<< HEAD
import everest from "./assets/Ev.jpg";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <h1>Welcome to this COS520 Web Application</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <br /> Josh VanSantvoord
                <br /> Hello World
            </p>
            <img src={everest} alt="Her majesty, Everest" />
            <ul>
                <li>Breakfast</li>
                <li>Walks in the city forest</li>
                <li>Naps in bed</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <div
                style={{
                    width: "400px",
                    height: "30px",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                }}
            >
                <Container>
                    <Row>
                        <Col>
                            <b>First column.</b>
                        </Col>
                        <Col>
                            <b>Second column.</b>
                        </Col>
                    </Row>
                </Container>
            </div>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
