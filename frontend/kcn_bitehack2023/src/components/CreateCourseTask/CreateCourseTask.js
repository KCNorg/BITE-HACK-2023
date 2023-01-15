import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import {useLocation, useNavigate} from 'react-router-dom';
import "./styles.css"

export default function CreateCourseTask() {

    const location = useLocation();
    const navigate = useNavigate();
    let title = location.state.name;

    const displayCourseName = () => {
        return (
            <h4 className="Task-form-sub-title">{title}</h4>
        )
    }

    function handleFinishTask(e){
        e.preventDefault();
        navigate("/homePage");
    }

    function handleSubmitTask(e){
        e.preventDefault()
        fetch("http://localhost:8080/manageTask", {
            method: "POST",
            headers: {"Content-Type": "application/json", 'Accept': 'application/json'},
            body: JSON.stringify({
                _id: location.state._id,
                item: {
                    taskName: document.getElementById("task-name").value,
                    note: document.getElementById("outlined-multiline-flexible my-text-fields").value,
                    taskQuestion: document.getElementById("outlined-flexible my-task-quiz-question").value,
                    answerList: [
                        {
                            question: document.getElementById("outlined-flexible my-question1").value,
                            isCorrect: document.getElementById("my-checkbox1").checked
                        },
                        {
                            question: document.getElementById("outlined-flexible my-question2").value,
                            isCorrect: document.getElementById("my-checkbox2").checked
                        },
                        {
                            question: document.getElementById("outlined-flexible my-question3").value,
                            isCorrect: document.getElementById("my-checkbox3").checked
                        }
                    ]
                }
            })
        })


        // console.log(document.getElementById("task-name").value);
        // console.log(document.getElementById("outlined-multiline-flexible my-text-fields").value);
        // console.log(document.getElementById("outlined-flexible my-task-quiz-question").value);
        // console.log(document.getElementById("outlined-flexible my-question1").value);
        // console.log(document.getElementById("my-checkbox1").checked);
        navigate(0, {state:location.state});
    }


    return (
        <div className="Task-form-container">
            <div className="Task-form">
                <div className="Task-form-title">
                    {displayCourseName(title)}
                </div>
                <div className="Task-form-name-field" id="name-input-task">
                    <TextField
                        sx={{ m: 1, width: '60ch', margin: '17px' }}
                        id="task-name"
                        label="Name"
                        variant="filled"
                        />
                </div>
                <div id="grid-parent" className="Task-form-content-grid">
                    <div id="Text-Fields" className="Task-grid-theory">
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <TextField
                            sx={{ m: 1, width: '60ch', margin: '17px' }}
                            id="outlined-multiline-flexible my-text-fields"
                            label="Theory note"
                            multiline
                            rows={15}
                            placeholder="Placeholder"
                            variant="filled"
                            size="Normal"

                        />
                        </Box>

                    </div>
                    <div className="Task-grid-quiz">
                        <Box
                            sx={{ display: 'flex', flexWrap: 'wrap' }}
                            noValidate
                            aria-autocomplete="off"
                        >
                        <div>
                            <TextField
                                id="outlined-flexible my-task-quiz-question"
                                sx={{ m: 1, width: '45ch', margin: '17px' }}
                                label="question..."
                                placeholder="Question placeholder"
                                variant="filled"
                                size="Normal"
                                fullWidth
                            />
                            <TextField
                                id="outlined-flexible my-question1"
                                sx={{ m: 1, width: '39ch', margin: '17px' }}
                                label="answer 1.."
                                placeholder="Question placeholder"
                                variant="filled"
                                size="Normal"
                                fullWidth
                            />
                            <Checkbox
                                defaultChecked
                                color="success"
                                id="my-checkbox1"
                                sx={{ '& .MuiSvgIcon-root': {
                                        fontSize: 28,
                                        marginTop: '20px'
                                    }
                                }}
                            />
                            <TextField
                                id="outlined-flexible my-question2"
                                sx={{ m: 1, width: '39ch', margin: '17px' }}
                                label="answer 2.."
                                placeholder="Question placeholder"
                                variant="filled"
                                size="Normal"
                                fullWidth
                            />
                            <Checkbox
                                defaultChecked
                                color="success"
                                id="my-checkbox2"
                                sx={{ '& .MuiSvgIcon-root': {
                                        fontSize: 28,
                                        marginTop: '20px'
                                    }
                                }}
                            />
                            <TextField
                                id="outlined-flexible my-question3"
                                sx={{ m: 1, width: '39ch', margin: '17px' }}
                                label="answer 3.."
                                placeholder="Question placeholder"
                                variant="filled"
                                size="Normal"
                                fullWidth
                            />
                            <Checkbox
                                defaultChecked
                                color="success"
                                id="my-checkbox3"
                                sx={{ '& .MuiSvgIcon-root': {
                                        fontSize: 28,
                                        marginTop: '20px'
                                    }
                                }}
                            />
                        </div>

                        </Box>
                    </div>
                </div>
                <div className="Task-form-content">
                    <div className="Task-form-content-item">
                        <Button
                            variant="contained"
                            fullWidth='on'
                            onClick={handleSubmitTask}
                            sx={{ marginTop: '17px' }}>
                            Submit Task
                        </Button>
                        <Button
                            variant="contained"
                            fullWidth='in'
                            onClick={handleFinishTask}
                            sx={{ marginTop: '17px' }}
                            color="success">
                            Finish Course
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )


}