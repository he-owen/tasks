import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }
    function updateMode() {
        setMode(!mode);
    }
    function updateStudent() {
        setIsStudent(!isStudent);
    }
    return (
        <div>
            <Form.Switch label="Mode" checked={mode} onChange={updateMode} />
            <Form.Control
                style={{ display: mode ? "block" : "none" }}
                value={username}
                onChange={updateUsername}
            />
            <Form.Check
                data-testid="student-checkbox"
                type="checkbox"
                id="Student-Check"
                style={{ display: mode ? "block" : "none" }}
                label="student"
                checked={isStudent}
                onChange={updateStudent}
            />

            <div style={{ display: mode ? "block" : "none" }}>
                {username} is {isStudent ? "" : "not"} a student
            </div>
        </div>
    );
}
