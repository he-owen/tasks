import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function updateRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setRequestedAttempts(event.target.value);
    }
    return (
        <div>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateRequestedAttempts}
                />
            </Form.Group>
            <div>{numAttempts}</div>
            <Button
                onClick={() =>
                    setNumAttempts(
                        numAttempts +
                            (Number.isNaN(parseInt(requestedAttempts))
                                ? 0
                                : parseInt(requestedAttempts))
                    )
                }
            >
                gain
            </Button>
            <Button
                onClick={() => setNumAttempts(numAttempts - 1)}
                disabled={numAttempts === 0}
            >
                use
            </Button>
        </div>
    );
}
