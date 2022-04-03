import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    color,
    setColor
}: {
    color: number;
    setColor: (value: number) => void;
}): JSX.Element {
    return (
        <Button onClick={() => setColor((1 + color) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ color }: { color: number }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[color],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [color, setColor] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[color]}</span>
            <div>
                <ChangeColor color={color} setColor={setColor}></ChangeColor>
                <ColorPreview color={color}></ColorPreview>
            </div>
        </div>
    );
}
