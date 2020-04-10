import React from "react";
import { Row, Col, Button } from "antd";
import QuestionAnswer from "./QuestionAnswer";
const Task = ({ task }) => {
  return (
    <div>
      <Row>{task.author}</Row>
      <QuestionAnswer content={task.content} />
    </div>
  );
};

export default Task;
