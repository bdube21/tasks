import React, { useState } from "react";
import { Button } from "react-bootstrap";

/* Modified to pass the useState in props */
function Doubler({
    value,
    setValue,
}: {
    value: number;
    setValue: (newValue: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(2 * value);
            }}
        >
            Double
        </Button>
    );
}

/* Modified to pass the useState in props */
function Halver({
    value,
    setValue,
}: {
    value: number;
    setValue: (newValue: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(0.5 * value);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    /* Use State for doubling/halving value */
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue} setValue={setDhValue}></Doubler>
            <Halver value={dhValue} setValue={setDhValue}></Halver>
        </div>
    );
}
