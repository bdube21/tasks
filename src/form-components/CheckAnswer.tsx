import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    /* Use state for response to question */
    const [answer, setAnswer] = useState<string>("");

    /* Helper function to update answer */
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>
                    What is the answer to life, the universe, and everything?
                </Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <div>Result: {answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
