import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [el_visible, set_visibility] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => set_visibility(!el_visible)}>
                Reveal Answer
            </Button>
            {el_visible ? <p>42</p> : ""}
            Reveal Answer
        </div>
    );
}
