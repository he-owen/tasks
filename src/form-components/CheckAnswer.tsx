import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group>
                <Form.Control value={answer} onChange={updateAnswer} />
                <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
            </Form.Group>
        </div>
    );
}
