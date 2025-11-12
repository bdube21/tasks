import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    /* Use state for selected answer */
    const [answer, setAnswer] = useState<string>(options[0]);

    /* Control: Helper function to update answer state */
    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoiceSelections">
                <Form.Label>Answer:</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    {/* Map each option string to a selectable option */}
                    {options.map((opt: string) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <span>Result: {answer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
