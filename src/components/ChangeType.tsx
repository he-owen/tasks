import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionText, setQuestionText] = useState<QuestionType>(
        "short_answer_question"
    );
    function adjustQuestion(): void {
        if (questionText === "multiple_choice_question") {
            setQuestionText("short_answer_question");
        } else if (questionText === "short_answer_question") {
            setQuestionText("multiple_choice_question");
        }
    }
    return (
        <div>
            <span>
                {questionText === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </span>
            <Button onClick={adjustQuestion}>Change Type</Button>
        </div>
    );
}
