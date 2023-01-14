import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import "./styles.css";

class Activity {
  constructor(title, content, comments) {
    this.title = title; // unique
    this.content = content;
    this.comments = comments;
  }
}

function ShowCourse() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activities = [
    new Activity("T1", "C1", ["Good one1", "Interesting1", "Inspiring1"]),
    new Activity("T2", "C2", ["Good one2", "Interesting2", "Inspiring2"]),
    new Activity("T3", "C3", ["Good one3", "Interesting3", "Inspiring3"]),
    new Activity("T4", "C4", ["Good one4", "Interesting4", "Inspiring4"]),
  ]
  const currActivity = params.get("activityTitle") == null ?
    activities[0] :
    new Activity(
      params.get("activityTitle"),
      params.get("activityContent"),
      params.get("activityComments")
    );

  const handleNext = (event) => {
    event.preventDefault();
    const nextActivity = activities[(activities.findIndex(x => x.title === currActivity.title) + 1) % activities.length];
    window.location.href = "/showCourse?" +
      "activityTitle=" + nextActivity.title + "&" +
      "activityContent=" + nextActivity.content + "&" +
      "activityComments=" + nextActivity.comments
      ;
  };

  const handleShowComments = (event) => {
    event.preventDefault();

  };

  const handleStop = (event) => {
    event.preventDefault();

  };

  return (
    <div className="show-course-form">
      <div className="activity-title-container">
        <p>
          {currActivity.title}
        </p>
      </div>
      <div className="course-progress-container">
        <p>
          {currActivity.content}
        </p>
      </div>
      {/* <Box
        className="activity-content-container"
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100ch', margin: '17px' },
        }}
        noValidate
        autoComplete="off"
      > */}
      <div className="activity-content-container">
        {/* <TextField className="activity-content" defaultValue={currActivity.content} 
            disabled multiline rows={15} sx={{ defaultValue: { color: 'black' } }}>
          </TextField> */}
        <p className="activity-content">
          {currActivity.content}
        </p>
      </div>
      {/* </Box> */}
      {/* <Box
        className="activity-comments-container"
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '55ch', margin: '6px' },
        }}
        noValidate
        autoComplete="off"
      > */}
      <div className="activity-comments-container">
        {/* <Box className="activity-comments" component="div" sx={{ visibility: 'visible', whiteSpace: 'normal' }}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Box> */}
        {/* <TextField className="activity-comments" defaultValue={currActivity.comments} 
            disabled multiline rows={15} sx={{ input: { color: 'black' } }}>
            {currActivity.comments}
          </TextField> */}
        <p className="activity-comments-content">
          {currActivity.comments}
        </p>
      </div>
      {/* </Box> */}
      <div className="buttons-panel">
        <Button className="next-button" variant="primary" onClick={handleNext}>
          Next
        </Button>
        <Button className="stop-button" variant="primary" onClick={handleShowComments}>
          Show comments
        </Button>
        <Button className="stop-button" variant="primary" onClick={handleStop}>
          Stop
        </Button>
      </div>
    </div>
  );
}

export default ShowCourse;
