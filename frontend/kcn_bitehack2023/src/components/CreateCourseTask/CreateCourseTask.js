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
                <div className="Task-form-content">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch', margin: '17px' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="task-name"
                            label="Name"
                            variant="outlined"
                            />
                    </Box>
                </div>
                <div className="Task-form-content">
                    <div id="Text-Fields" className="Task-form-content">
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '50ch', margin: '17px' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Multiline"
                            multiline
                            rows={15}
                            placeholder="Placeholder"
                            variant="filled"
                            size="Normal"

                        />
                        <TextField
                            id="outlined-multiline-flexibles"
                            label="Multiline"
                            multiline
                            rows={15}
                            placeholder="Placeholder"
                            variant="filled"
                        />
                        </Box>
                    </div>
                    <div className="Task-form-content">
                        <Button variant="contained">Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    )


}