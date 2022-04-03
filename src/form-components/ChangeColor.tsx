import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    const COLORS = [
        "red",
        "orange",
        "brown",
        "yellow",
        "green",
        "blue",
        "purple",
        "black"
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((arr_ele: string) => (
                <li key={arr_ele}>
                    <Form.Check
                        inline
                        type="radio"
                        checked={arr_ele == color}
                        label={arr_ele}
                        color={arr_ele}
                        value={arr_ele}
                        onChange={updateColor}
                    ></Form.Check>
                </li>
            ))}
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </span>{" "}
            selected
        </div>
    );
}
