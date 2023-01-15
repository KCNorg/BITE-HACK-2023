import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ListItemText from "@mui/material/ListItemText";
import Form from "react-bootstrap/Form";
import "../CreateCoursePopout/styles.css"
export default function CourseDetailsPopout(courseInfo) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function TagsCourse(){
        return (
            <div className="tags-input-container">
                <div className="tag-item">
                    <span className="text">Python</span>
                </div>
                <div className="tag-item">
                    <span className="text">Django</span>
                </div>
                <div className="tag-item">
                    <span className="text">Web</span>
                </div>
            </div>
        )
    }

    function TagsDifficulty(){
        return (
            <div className="tags-input-container">
                <div className="tag-item">
                    <span className="text">Intermediate</span>
                </div>
            </div>
        )
    }

    function TagsDescription(){
        return (
            <div>
                <div className="form-control">
                    <span className="text">How many times have you decided to learn a programming language but got stuck somewhere along the way, grew frustrated, and gave up? This specialization is designed for learners who have little or no programming experience but want to use Python as a tool to play with data.</span>
                </div>
            </div>
        )
    }

    return (
        <>
            <ListItemButton onClick={handleShow}>
                <ListItemIcon>
                    <DownloadOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Python - your first steps with django" />
            </ListItemButton>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Python - your first steps with Django</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control as={TagsCourse} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="difficultyControl">
                            <Form.Label>Difficulty</Form.Label>
                            <Form.Control as={TagsDifficulty} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="descriptionControl">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as={TagsDescription} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" siz>
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