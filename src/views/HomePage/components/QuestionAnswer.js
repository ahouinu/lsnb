import React from "react";
import { Row } from "antd";
import "../HomePage.css";

const QuestionAnswer = ({ content }) => {
  const renderQuestionAnswer = (content) => {
    return content.map((qA, index) => {
      return (
        <div key={index}>
          <Row className="question">{qA.question}</Row>
          <Row className="answer">{qA.answer}</Row>
        </div>
      );
    });
  };
  return <div>{renderQuestionAnswer(content)}</div>;
};

export default QuestionAnswer;
