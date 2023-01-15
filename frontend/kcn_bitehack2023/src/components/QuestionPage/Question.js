import * as React from "react";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Button} from "@mui/material";
import "./styles.css"




export default function QuestionForm() {

    let title = "Co jedzą karasie?"

    const displayCourseName = () => {
        return (
            <h4 className="Task-form-sub-title">{title}</h4>
        )
    }

    return (
        <div className="Question-form-container">
            <div className="Question-form">
                <div className="Task-form-title">
                    {displayCourseName()}
                </div>
                <div className="Question-form-questions">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Gówno" />
                        <FormControlLabel disabled control={<Checkbox />} label="Nic" />
                        <FormControlLabel disabled control={<Checkbox />} label="Dzieci" />
                    </FormGroup>
                </div>
                <div className="Question-form-button">
                    <Button
                        variant="contained"
                        sx={{ marginTop: '17px', width: "200px" }}>
                        Submit
                    </Button>
                </div>
                <div className="Question-form-button">
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ marginTop: '17px', width: "200px" }}>
                        Stop Learning
                    </Button>
                </div>
            </div>



        </div>



    )
}