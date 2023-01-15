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
    new Activity(0, "Access modifiers", `There are four types of Java access modifiers:<br>
    Private: The access level of a private modifier is only within the class. It cannot be accessed from outside the class.<br>
    Default: The access level of a default modifier is only within the package. It cannot be accessed from outside the package. If you do not specify any access level, it will be the default.
    Protected: The access level of a protected modifier is within the package and outside the package through child class. If you do not make the child class, it cannot be accessed from outside the package.
    Public: The access level of a public modifier is everywhere. It can be accessed from within the class, outside the class, within the package and outside the package.`, ["Well explained", "Doesn't seem to be correct", "Can we use more than one access modifier at once?"]),
    new Activity(1, "Data types", `Data types specify the different sizes and values that can be stored in the variable. There are two types of data types in Java:
    Primitive data types: The primitive data types include boolean, char, byte, short, int, long, float and double.
    Non-primitive data types: The non-primitive data types include Classes, Interfaces, and Arrays.`, ["What's the difference between int and Integer?", "The list of data types isn't exhaustive, therefore incorrect"]),
    new Activity(2, "Ternary Operator", `The ternary operator ?: in Java is the only operator that accepts three operands:
    booleanExpression ? expression1 : expression2
    The very first operand must be a boolean expression, and the second and third operands can be any expression that returns some value. The ternary construct returns expression1 as an output if the first operand evaluates to true, expression2 otherwise.`, 
    ["Bad practice, shouldn't be taught", "Interesting..."]),
  ]
  console.log(params.get("activityId"))
  const commentTypes = [[0, 1, 2], [2, 1], [1, 0]];
  const commentUsers = [[0, 2, 3], [1, 0], [2, 1]];
  const progressBarValues = [0, 33, 66];
  const users = [
    new User("Emilie Vincent", "./avatars/avatar1.jpg"),
    new User("Rahul Bishop", "./avatars/avatar2.jpg"),
    new User("Susie Fields", "./avatars/avatar3.jpg"),
    new User("Ernest Orr", "./avatars/avatar5.jpg"),
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
    if (activities.length - 1 === currActivityId){
      window.location.href = "/question"
    }
    else {
      window.location.href = "/showCourse?" +
          "activityId=" + nextActivity.id
      ;
    }
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
