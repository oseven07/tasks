import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemps, setAttemps] = useState<number>(3);
    const [text, setText] = useState<string>("");
    function useButton() {
        setAttemps(attemps - 1);
    }

    function updateAttemps(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }

    function gainButton() {
        const textInput = parseInt(text);
        if (!isNaN(textInput)) {
            setAttemps(attemps + textInput);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Control
                type="number"
                onChange={updateAttemps}
                placeholder="How many more attempts do you want"
            ></Form.Control>
            <p>{attemps} left.</p>
            <button onClick={useButton} disabled={attemps < 1}>
                use
            </button>
            <button onClick={gainButton}>gain</button>
        </div>
    );
}
