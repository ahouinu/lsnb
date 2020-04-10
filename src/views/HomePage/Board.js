import React from "react";
import { Row } from "antd";
import DayCol from "./components/DayCol";
import { defaultTask } from "../../defaultTasks";
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const Board = () => {
  const allTasks = JSON.parse(localStorage.getItem("allTasks")) || defaultTask;
  return (
    <div>
      <Row gutter="[60, 60]" align="center">
        {/* <DayCol day='Mon'/> */}
        {DAYS.map((day, idx) => {
          return <DayCol day={day} key={idx} initialTasks={allTasks[day]} />;
        })}
      </Row>
    </div>
  );
};

export default Board;
