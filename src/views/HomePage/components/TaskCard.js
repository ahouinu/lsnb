import React from "react";
import { Avatar, Card } from "antd";
import QuestionAnswer from "./QuestionAnswer";
import "../HomePage.css";

const { Meta } = Card;
const Task = ({ task }) => {
  return (
    <Card className="qa-card">
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={task.author}
      />
      <br />
      <QuestionAnswer content={task.content} />
    </Card>
  );
};

export default Task;
