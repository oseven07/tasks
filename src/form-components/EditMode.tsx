import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [state, setState] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateState(event: React.ChangeEvent<HTMLInputElement>) {
        setState(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function hide(x: string): string {
        let result = "";

        if (state) {
            result = x;
        }

        return result;
    }

    return (
        <div>
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    type="switch"
                    checked={state}
                    onChange={updateState}
                    id="editMode"
                />

                <div>
                    <Form.Group hidden={!state}>
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        inline
                        hidden={!state}
                        label={hide("student")}
                        checked={student}
                        onChange={updateStudent}
                        id="Student"
                    />
                </div>
                {name + " is " + (student ? "a student" : "not a student")}
            </div>
        </div>
    );
}
