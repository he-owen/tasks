import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setNumAttempts(numAttempts - 1);
        setInProgress(!inProgress);
    }
    function addAttempt(): void {
        setNumAttempts(numAttempts + 1);
    }
    function stopQuiz(): void {
        setInProgress(false);
    }
    return (
        <div>
            <span>{numAttempts}</span>
            <Button
                onClick={startQuiz}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
