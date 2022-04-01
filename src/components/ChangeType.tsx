import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [q_type, set_q_type] = useState<QuestionType>(
        "short_answer_question"
    );

    function swap_type(): void {
        if (q_type == "short_answer_question") {
            set_q_type("multiple_choice_question");
        } else {
            set_q_type("short_answer_question");
        }
    }
    return (
        <div>
            Change Type<Button onClick={swap_type}>Change type</Button>
            {q_type == "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
        </div>
    );
}
