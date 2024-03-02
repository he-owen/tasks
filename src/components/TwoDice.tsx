/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieOne, setLeftDie] = useState<number>(1);
    const [dieTwo, setRightDie] = useState<number>(2);

    function rollLeftDie(): void {
        setLeftDie(d6);
    }
    function rollRightDie(): void {
        setRightDie(d6());
    }
    return (
        <div>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>
            <span>
                {dieOne === 1 && dieTwo === 1
                    ? "Lose"
                    : dieOne === dieTwo
                    ? "Win"
                    : ""}
            </span>
            <span data-testid="right-die">{dieTwo}</span>
            <span data-testid="left-die">{dieOne}</span>
        </div>
    );
}
