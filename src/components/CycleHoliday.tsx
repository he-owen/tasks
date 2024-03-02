import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🎅" | "🦃" | "🎃" | "🥚" | "🍀";
    const alphabeticalHoliday: Record<Holiday, string> = {
        "🥚": "Christmas",
        "🎅": "Thanksgiving",
        "🦃": "Halloween",
        "🍀": "Easter",
        "🎃": "St. Patrick's Day"
    };
    const dateHoliday: Record<Holiday, string> = {
        "🍀": "Christmas",
        "🎅": "Thanksgiving",
        "🦃": "Halloween",
        "🎃": "Easter",
        "🥚": "St. Patrick's Day"
    };
    const mapHoliday: Record<string, Holiday> = {
        Christmas: "🎅",
        Thanksgiving: "🦃",
        Halloween: "🎃",
        Easter: "🥚",
        "St. Patrick's Day": "🍀"
    };
    const [holiday, setHoliday] = useState<Holiday>("🎅");
    return (
        <div>
            Cycle Holiday
            <span>{"Holiday: " + holiday}</span>
            <Button
                onClick={() =>
                    setHoliday(mapHoliday[alphabeticalHoliday[holiday]])
                }
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => setHoliday(mapHoliday[dateHoliday[holiday]])}
            >
                Advance by Year
            </Button>
        </div>
    );
}
