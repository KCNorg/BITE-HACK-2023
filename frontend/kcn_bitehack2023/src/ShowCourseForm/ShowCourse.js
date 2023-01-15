import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
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
    new Activity(0, "T1", `There are four types of Java access modifiers:<br>
    Private: The access level of a private modifier is only within the class. It cannot be accessed from outside the class.<br>
    Default: The access level of a default modifier is only within the package. It cannot be accessed from outside the package. If you do not specify any access level, it will be the default.
    Protected: The access level of a protected modifier is within the package and outside the package through child class. If you do not make the child class, it cannot be accessed from outside the package.
    Public: The access level of a public modifier is everywhere. It can be accessed from within the class, outside the class, within the package and outside the package.`, ["Good one1", "Interesting1sssssssss", "Inspiring1"]),
    new Activity(1, "T2", "C2", ["Good one2", "Interesting2"]),
    new Activity(2, "T3", "C3", ["Good one3", "Interesting3"]),
    new Activity(3, "T4", "C4", ["Inspiring4"]),
  ]
  console.log(params.get("activityId"))
  const commentTypes = [[0, 1, 2], [2, 1], [1, 0], [0]];
  const commentUsers = [[0, 2, 3], [1, 0], [2, 1], [2]];
  const progressBarValues = [0, 25, 50, 75];
  const users = [
    new User("FanatykWedkarstwa", "./avatar1.jpg"),
    new User("OOOORnitolog", "./avatar2.jpg"),
    new User("Krzysiu", "./avatar3.JPG"),
    new User("Patryk", "./avatar4.jpg"),
  ]
  // const activities[currActivityId] = params.get("activityId") == null ?
  //   activities[0] :
  //   new Activity(
  //     params.get("activityId"),
  //     params.get("activityTitle"),
  //     params.get("activityContent"),
  //     params.get("activityComments").split(",")
  //   );
  const currActivityId = params.get("activityId") == null ? 0 : parseInt(params.get("activityId"));
  // const showComments = false;
  const showComments = true;

  const handleNext = (event) => {
    event.preventDefault();
    const nextActivity = activities[(currActivityId + 1) % activities.length];
    window.location.href = "/showCourse?" +
      "activityId=" + nextActivity.id
      ;
  };

  const handleStop = (event) => {
    event.preventDefault();
    window.location.href = "/homePage";
  };
  const getEmoji = (commentType) => {
    if (commentType === 0) {
      return "✔️";
    } else if (commentType === 1) {
      return "❌";
    } else {
      return "❔";
    }
  }


  const getCommentsReprs = () => {
    if (showComments) {
      return (
        <div className="activity-comments-container">
          {activities[currActivityId].comments.map((comment, i) => {
            return (
              <Card class="activity-comment-container" sx={{ maxWidth: 345 }} style={{backgroundColor:'#b1d9fc'}}>
                <CardHeader
                  avatar={
                    <Avatar variant="rounded" src={require(`${users[commentUsers[currActivityId][i]].avatarPath}`)} sx={{ width: 50, height: 50 }} />
                  }
                  title={users[commentUsers[currActivityId][i]].userName + getEmoji(commentTypes[currActivityId][i])}
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
          {activities[currActivityId].title}
        </p>
      </div>
      <div className="course-progress-container" >
        <Typography variant="body1" color="text.primary">
          Progress
        </Typography>
        <div className='Progress-bar'>
          <ProgressBar className="course-progress" striped variant="success" 
            animated now={progressBarValues[currActivityId]} label={progressBarValues[currActivityId] + "%"}/>
        </div>
      </div>
      <div className="activity-content-container">
        <Card className="activity-content" style={{backgroundColor:'#e2f59f'}}>
          {activities[currActivityId].content}
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
