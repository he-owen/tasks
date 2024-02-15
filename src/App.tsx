import React from "react";
import "./App.css";
import blackbox from "../src/assets/blackbox.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is header text</h1>

            <img src={blackbox} alt="A picture of a black box" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Owen He, Hello World
            </p>
            <ol>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First column.{" "}
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "500px",
                                height: "500px"
                            }}
                        ></div>{" "}
                    </Col>

                    <Col>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "500px",
                                height: "500px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
