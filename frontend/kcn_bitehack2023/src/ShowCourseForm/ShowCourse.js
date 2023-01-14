import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ProgressBar from "@ramonak/react-progress-bar";

import "./styles.css";

class Activity {
  constructor(id, title, content, comments) {
    this.id = id;
    this.title = title; // unique
    this.content = content;
    this.comments = comments;
  }
}

function ShowCourse() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activities = [
    new Activity(0, "T1", "C1", ["Good one1", "Interesting1sssssssss", "Inspiring1"]),
    new Activity(1, "T2", "C2", ["Good one2", "Interesting2", "Inspiring2"]),
    new Activity(2, "T3", "C3", ["Good one3", "Interesting3", "Inspiring3"]),
    new Activity(3, "T4", "C4", ["Good one4", "Interesting4", "Inspiring4"]),
  ]
  const currActivity = params.get("activityId") == null ?
    activities[0] :
    new Activity(
      params.get("activityId"),
      params.get("activityTitle"),
      params.get("activityContent"),
      params.get("activityComments").split(",")
    );

  const handleNext = (event) => {
    event.preventDefault();
    const nextActivity = activities[(currActivity.id + 1) % activities.length];
    window.location.href = "/showCourse?" +
      "activityId=" + nextActivity.id + "&" +
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

  const getRandomColor = () => {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  }

  const getCommentsReprs = () => {
    console.log(currActivity.comments)
    return (
      <div className="activity-comments-container">
        {currActivity.comments.map(comment => {
          return (
            <div class="activity-comment-container" style={{ backgroundColor: getRandomColor() }}>
              <img src="img_girl.jpg" alt="Girl in a jacket"></img>
              <p class="activity-comment-content">{comment}</p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="show-course-form">
      <div className="activity-title-container">
        <p className="activity-title">
          {currActivity.title}
        </p>
      </div>
      <div className="course-progress-container">
        <ProgressBar completed={60} />
      </div>
      <div className="activity-content-container">
        <p className="activity-content">
          {currActivity.content}
        </p>
      </div>
      {getCommentsReprs()}
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
