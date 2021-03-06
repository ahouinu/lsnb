import React from "react";
import { Button, Card } from "antd";
import QuestionAnswer from "./QuestionAnswer";
import "../HomePage.css";
import { CloseOutlined } from "@ant-design/icons";
import RAvatar from "react-avatar";

const { Meta } = Card;

const Task = ({ task, handleDelete }) => {
  return (
    <Card
      className="qa-card"
      bordered={false}
      title={
        <Meta
          avatar={<RAvatar name={task.author} size={32} round="20px" />}
          title={task.author}
        />
      }
      extra={
        <Button
          className="del-btn"
          style={{ fontSize: "8px" }}
          onClick={() => handleDelete(task.id)}
        >
          <CloseOutlined />
        </Button>
      }
    >
      <QuestionAnswer content={task.content} />
    </Card>
  );
};

export default Task;
