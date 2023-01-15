import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import {useLocation} from 'react-router-dom';
import "./styles.css"

export default function CreateCourseTask() {

    const location = useLocation();
    //TODO title should be given from createCoursePage where it is seted
    let title = location.state.name;

    const displayCourseName = () => {
        return (
            <h4 className="Task-form-sub-title">{title}</h4>
        )
    }


    return (
        <div className="Task-form-container">
            <div className="Task-form">
                <div className="Task-form-title">
                    {displayCourseName(title)}
                </div>
                <div className="Task-form-name-field">
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
                            id="outlined-multiline-flexible"
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
                                id="outlined-flexible"
                                sx={{ m: 1, width: '45ch', margin: '17px' }}
                                label="question..."
                                placeholder="Question placeholder"
                                variant="filled"
                                size="Normal"
                                fullWidth
                            />
                            <TextField
                                id="outlined-flexible"
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
                                sx={{ '& .MuiSvgIcon-root': {
                                        fontSize: 28,
                                        marginTop: '20px'
                                    }
                                }}
                            />
                            <TextField
                                id="outlined-flexible"
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
                                sx={{ '& .MuiSvgIcon-root': {
                                        fontSize: 28,
                                        marginTop: '20px'
                                    }
                                }}
                            />
                            <TextField
                                id="outlined-flexible"
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
                            sx={{ marginTop: '17px' }}>
                            Submit Task
                        </Button>
                        <Button
                            variant="contained"
                            fullWidth='in'
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