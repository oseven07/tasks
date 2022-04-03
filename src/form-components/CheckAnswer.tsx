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
            <h3>Check Answer</h3>
            <Form.Control
                onChange={updateAnswer}
                type="text"
                placeholder="Enter answer"
                disabled={false}
            ></Form.Control>
            {answer.includes(expectedAnswer) ? <p>✔️</p> : <p>❌</p>}
        </div>
    );
}
