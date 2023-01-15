import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import "./styles.css";

class Activity {
  constructor(id, title, content, comments) {
    this.id = parseInt(id);
    this.title = title; // unique
    this.content = content;
    this.comments = comments;
  }
}

class User {
  constructor(userName, avatarPath) {
    this.userName = userName;
    this.avatarPath = avatarPath;
  }
}

function ShowCourse() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activities = [
    new Activity(0, "T1", "C1", ["Good one1", "Interesting1sssssssss", "Inspiring1"]),
    new Activity(1, "T2", "C2", ["Good one2", "Interesting2"]),
    new Activity(2, "T3", "C3", ["Good one3", "Interesting3"]),
    new Activity(3, "T4", "C4", ["Inspiring4"]),
  ]
  const commentTypes = [[0, 1, 2], [2, 1], [1, 0], [0]];
  const commentUsers = [[0, 2, 3], [1, 0], [2, 1], [2]];
  const progressBarValues = [0, 50, 33, 50];
  const users = [
    new User("FanatykWEdkarstwa", "./avatar1.jpg"),
    new User("OOOORnitolog", "./avatar2.jpg"),
    new User("Krzysiu", "./avatar3.JPG"),
    new User("Patryk", "./avatar4.jpg"),
  ]
  const currActivity = params.get("activityId") == null ?
    activities[0] :
    new Activity(
      params.get("activityId"),
      params.get("activityTitle"),
      params.get("activityContent"),
      params.get("activityComments").split(",")
    );
  // const showComments = false;
  const showComments = true;

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
    showComments = !showComments;
  };

  const handleStop = (event) => {
    event.preventDefault();
    window.location.href = "/homePage";
  };

  const getRandomColor = () => {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  }

  const getColor = (commentType) => {
    if (commentType === 0) {
      return "#00FF00";
    } else if (commentType === 1) {
      return "#FF0000";
    } else {
      return "#0000FF";
    }
  }

  const getEmoji = (commentType) => {
    if (commentType === 0) {
      return "✔️";
    } else if (commentType === 1) {
      return "❌";
    } else {
      return "❔";
    }
  }

  const getRandomUser = () => {
    return users[Math.floor(Math.random() * users.length)];
  }

  const getCommentsReprs = () => {
    if (showComments) {
      return (
        <div className="activity-comments-container">
          {currActivity.comments.map((comment, i) => {
            return (
              <Card class="activity-comment-container" sx={{ maxWidth: 345 }} style={{backgroundColor:'#b1d9fc'}}>
                <CardHeader
                  avatar={
                    <Avatar variant="rounded" src={require(`${users[commentUsers[currActivity.id][i]].avatarPath}`)} sx={{ width: 50, height: 50 }} />
                  }
                  title={users[commentUsers[currActivity.id][i]].userName + getEmoji(commentTypes[currActivity.id][i])}
                />
                <CardContent sx={{ padding: "0px 0px 0px 13px" }}>
                  <Typography variant="body2" color="text.primary">
                    {comment}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      );
    } else {
      return <p>ASDSAD</p>
    }
  }

  return (
    <div className="show-course-form">
      <div className="activity-title-container">
        <p className="activity-title" >
          {currActivity.title}
        </p>
      </div>
      <div className="course-progress-container" >
        <Typography variant="body1" color="text.primary">
          Progress
        </Typography>
        <ProgressBar 
          className="course-progress"
          completed={progressBarValues[currActivity.id]} 
          // className="wrapper"
          // barContainerClassName="container"
          // completedClassName="barCompleted"
          // labelClassName="labelBar"
          />
      </div>
      <div className="activity-content-container">
        <Card className="activity-content" style={{backgroundColor:'#e2f59f'}}>
          {currActivity.content}
        </Card>
      </div>
      {getCommentsReprs()}
      <div className="buttons-panel">
        <Button className="next-button" variant="primary" onClick={handleNext}>
          Next
        </Button>
        {/* <Button className="stop-button" variant="primary" onClick={handleShowComments}>
          Show comments
        </Button> */}
        <Button className="stop-button" variant="primary" onClick={handleStop}>
          Stop
        </Button>
      </div>
    </div>
  );
}

export default ShowCourse;
