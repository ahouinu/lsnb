import React from "react";
import { Row, Col } from "antd";

const QuestionAnswer = ({ content }) => {
  const renderQuestionAnswer = (content) => {
    return content.map((qA, index) => {
      return (
        <div key={index}>
          <Row>{qA.question}</Row>
          <Row>{qA.answer}</Row>
        </div>
      );
    });
  };
  return <div>{renderQuestionAnswer(content)}</div>;
};

export default QuestionAnswer;
