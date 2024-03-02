import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <span>{visible && 42}</span>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
        </div>
    );
}
