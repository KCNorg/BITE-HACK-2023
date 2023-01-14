import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./styles.css"
export default function CreateCoursePopout() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleCreate(e){
        e.preventDefault()
        fetch("http://localhost...", {
            method: "POST",
            headers: {"Content-Type": "application/json", 'Accept': 'application/json'},
            body: JSON.stringify({
                courseName: document.getElementById("nameControl").value,
                tagsArr: Array.from(document.getElementsByClassName("tag-item"),
                    x => x.getElementsByClassName("text")[0].innerText),
                difficulty: document.getElementById("difficultyControl").value,
                description: document.getElementById("descriptionControl").value,
            })
        })
        //     .then((response) => response.json())
        //     .then(data => {
        //         console.log(data);
        //         let result = data["result"];
        //         let resultPretty = "";
        //         if (result === "win") {
        //             resultPretty = "Team 1 will win";
        //         } else if (result === "lose") {
        //             resultPretty = "Team 2 will win";
        //         } else {
        //             resultPretty = "Teams will draw";
        //         }
        //         window.location.href = "/resultView?result=" + resultPretty;
        //     });

        console.log(document.getElementById("nameControl").value);
        let tagItems = document.getElementsByClassName("tag-item");
        for (let i = 0, len = tagItems.length; i < len; i++) {
            console.log(tagItems[i].getElementsByClassName("text")[0].innerText);
        }
        console.log(document.getElementById("difficultyControl").value);
        console.log(document.getElementById("descriptionControl").value);
        console.log(Array.from(document.getElementsByClassName("tag-item"), x => x.getElementsByClassName("text")[0].innerText));
    }
    function TagsInput(){
        const [tags, setTags] = useState([])

        function handleKeyDown(e){
            if(e.key !== 'Enter') return
            const value = e.target.value
            if(!value.trim()) return
            setTags([...tags, value])
            e.target.value = ''
        }

        function removeTag(index){
            setTags(tags.filter((el, i) => i !== index))
        }

        return (
            <div className="form-control">
                { tags.map((tag, index) => (
                    <div className="tag-item" key={index}>
                        <span className="text">{tag}</span>
                        <span className="close" onClick={() => removeTag(index)}>&times;</span>
                    </div>
                )) }
                <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Type tag" />
            </div>
        )
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="nameControl">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your course name"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="tagsInputControl">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control as={TagsInput} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="difficultyControl">
                            <Form.Label>Difficulty</Form.Label>
                            <Form.Select aria-label="Difficulty">
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Expert">Expert</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="descriptionControl">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCreate}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}