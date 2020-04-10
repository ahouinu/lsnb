import React from "react";
import { Col, Empty } from "antd";

const DayCol = ({ day, arr, ...restProps }) => (
  <div>
    <Col>
      <h1>{day}</h1>
      {arr.map((el) => (
        <Empty />
      ))}
    </Col>
  </div>
);

export default DayCol;
