import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [studentStatus, setStudentStatus] = useState<boolean>(true);

    /* Helper function to update edit mode status */
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    /* Helper function to update user names */
    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }
    /* Helper function to update student status */
    function updateStudentStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentStatus(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                label="Enter Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />

            {editMode ?
                <>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control
                            value={userName}
                            onChange={updateUserName}
                        />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="student"
                        label="Check if student"
                        checked={studentStatus}
                        onChange={updateStudentStatus}
                    />
                </>
            :   <span>
                    {userName} is {!studentStatus && "not"} a student.
                </span>
            }
        </div>
    );
}
