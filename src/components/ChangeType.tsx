import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [Qtype, setQtype] = useState<QuestionType>("short_answer_question");

    function flipQtype(): void {
        setQtype(
            Qtype === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    // Make div with button and answer
    return (
        <div>
            <Button onClick={flipQtype}>Change Type</Button>
            {Qtype === "short_answer_question" ?
                <div>Short Answer</div>
            :   <div>Multiple Choice</div>}
        </div>
    );
}
