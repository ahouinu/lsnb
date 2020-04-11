import React from "react";
import { Col, Row } from "antd";
import DayCol from "./components/DayCol";
import { defaultTask } from "../../defaultTasks";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const color = ["#FFFFFF", "#84DCC6", "#A5FFD6", "#FFA69E", "#FF686B"];
const Board = () => {
  let allTasks = JSON.parse(localStorage.getItem("allTasks"));
  const storageEmpty = Object.values(allTasks).every((col) => col.length === 0);
  if (storageEmpty) {
    localStorage.setItem("allTasks", JSON.stringify(defaultTask));
    allTasks = defaultTask;
  }
  return (
    <div>
      <Row
        gutter="[60, 60]"
        align="center"
        style={{
          minHeight: "800px",
          overflow: "auto",
          margin: "30px 0px 10px 0px",
        }}
      >
        {/* <DayCol day='Mon'/> */}
        {DAYS.map((day, idx) => {
          return (
            <Col
              classname="column-col"
              span={4}
              style={{
                backgroundColor: color[idx],
                margin: "0 5px 0 5px",
                padding: "3px 3px 3px 3px",
                borderRadius: "20px",
              }}
            >
              <DayCol day={day} key={idx} initialTasks={allTasks[day]} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Board;
