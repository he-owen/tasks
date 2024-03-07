import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "yellow",
        "black",
        "white",
        "brown"
    ];
    const DEFAULT_COLOR = COLORS[0];

    // This is the State (Model)
    const [favorite, setFavorite] = useState<string>(DEFAULT_COLOR);

    // This is the Control
    function updateFavorite(event: React.ChangeEvent<HTMLInputElement>) {
        setFavorite(event.target.value);
    }

    return (
        <div>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    type="radio"
                    label={
                        <div
                            style={{
                                display: "inline-block",
                                backgroundColor: color
                            }}
                        >
                            {color}
                        </div>
                    }
                    value={color}
                    onChange={updateFavorite}
                    checked={favorite === color}
                    key={color}
                ></Form.Check>
            ))}
            <div>
                You have chosen{" "}
                {
                    <div
                        data-testid="colored-box"
                        style={{
                            display: "inline-block",
                            backgroundColor: favorite
                        }}
                    >
                        {favorite}
                    </div>
                }
            </div>
        </div>
    );
}
