import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import "./styles.css"

export default function CreateCourseTask() {

    let title = "Hello";
    const displayCourseName = () => {
        return (
            <h1 className="Task-form-sub-title">{title}</h1>
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
                        <Box
                            sx={{ display: 'flex', flexWrap: 'wrap' }}
                            // component="form"
                            // sx={{
                            //     '& .MuiTextField-root': { m: 1, width: '60ch', margin: '17px' },
                            // }}
                            // noValidate
                            // autoComplete="off"
                        >
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
                        aria-autocomplete="off">
                        <div>
                            <TextField
                                id="outlined-flexible"
                                sx={{ m: 1, width: '45ch', margin: '17px' }}
                                label="question"
                                placeholder="Question placeholder"
                                variant="filled"
                                size="Normal"
                                fullWidth
                            />
                        </div>

                        </Box>
                    </div>
                </div>
                <div className="Task-form-content">
                    <Button variant="contained">Submit</Button>
                </div>
            </div>
        </div>
    )


}