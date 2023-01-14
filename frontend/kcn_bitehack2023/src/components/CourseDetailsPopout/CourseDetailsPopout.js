import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example(courseInfo) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    {/*courseDetails.courseName*/}
                    <Modal.Title>CourseName details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tags: CourseDetails.tags
                    < hr/>
                    Difficulty: CourseDetails.difficulty
                    < hr/>
                    Description: CourseDetails.description
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">
                        Save
                    </Button>
                    <Button variant="primary">
                        Enroll
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}