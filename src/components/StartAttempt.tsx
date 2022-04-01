import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [status, set_status] = useState<boolean>(false);
    const [used_attemps, set_attemps] = useState<number>(4);

    function quiz_started(): void {
        set_status(true);
        set_attemps(used_attemps - 1);

        if (used_attemps < 0) {
            set_attemps(0);
        }
    }

    return (
        <div>
            Start Attempt
            <Button
                onClick={quiz_started}
                disabled={used_attemps > 0 && !status ? false : true}
            >
                Start Quiz
            </Button>
            <Button onClick={() => set_status(false)} disabled={!status}>
                Stop Quiz
            </Button>
            <p>{used_attemps}</p>
            <Button
                onClick={() => set_attemps(used_attemps + 1)}
                disabled={status}
            >
                Mulligan
            </Button>
        </div>
    );
}
