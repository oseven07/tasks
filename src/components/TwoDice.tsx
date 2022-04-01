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
    const [d0, set_d0] = useState<number>(1);
    const [d1, set_d1] = useState<number>(2);

    function roll_left(): void {
        set_d0(d6());
    }

    function roll_right(): void {
        set_d1(d6());
    }

    function check_game(): string {
        if (d0 === 1 && d1 === 1) {
            return "YOU Lose";
        } else if (d0 === d1) {
            return "YOU Win";
        } else {
            return "Undecided";
        }
    }

    return (
        <div>
            <div>Two Dice</div>
            <div>
                <span>
                    Left Die: <span data-testid="left-die">{d0}</span>
                    <Button onClick={roll_left}>Roll Left</Button>
                </span>
                <span>
                    Right Die: <span data-testid="right-die">{d1}</span>
                    <Button onClick={roll_right}>Roll Right</Button>
                </span>
            </div>
            <div>
                <span>{check_game()}</span>
            </div>
        </div>
    );
}
