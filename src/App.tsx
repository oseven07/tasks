import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>L&apos;Evan Brady</h1>
                UD CISC275 with React Hooks and TypeScript
                <p>Hello World</p>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>
                <ol>
                    <li>uno</li>
                    <li>dos</li>
                    <li>tres</li>
                </ol>
                <img
                    src="https://i5.walmartimages.com/asr/57e81448-5c10-455f-a733-6c031e020890.78e0baa09a9768621b35908f4cd420ec.jpeg"
                    alt="A desert painting."
                />
                <Button
                    className="btn btn-primary"
                    onClick={() => console.log("Hello World!")}
                >
                    Log Hello World
                </Button>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "400px",
                                    height: "100px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </header>
<<<<<<< HEAD
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> solved-state
        </div>
    );
}

export default App;
