/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [str_hol, set_str_hol] = useState<string>("Christmas");

    const holiday = [
        "New Years",
        "Presidents Day",
        "Independence Day",
        "Thanks Giving",
        "Christmas"
    ];
    const emoji = ["🎊", "🥳", "👤", "🐔", "🎅🏼"];

    function next_alphabet(): void {
        switch (str_hol.at(0)) {
            case "C":
                set_str_hol("Independence Day");
                break;

            case "I":
                set_str_hol("New Years");
                break;

            case "N":
                set_str_hol("Presidents Day");
                break;

            case "P":
                set_str_hol("Thanks Giving");
                break;

            case "T":
                set_str_hol("Christmas");
                break;
        }
    }

    function next_year(): void {
        set_str_hol(
            holiday[
                (holiday.findIndex((str: string) => str_hol == str) + 1) % 5
            ]
        );
    }

    return (
        <div>
            Cycle Holiday<Button onClick={next_alphabet}>Next Alphabet</Button>
            <Button onClick={next_year}>Next Year</Button>
            Holiday: {emoji[holiday.findIndex((str: string) => str_hol == str)]}
        </div>
    );
}
