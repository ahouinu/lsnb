import React, { useEffect, useState } from "react";
import { Col, Empty } from "antd";
import TaskCard from "./TaskCard";
// put data in state, manipulate data in individual component
// tasks = [task, task]
// task = {id, author, content:[qA, qA, qA]}
// qA = {id, question, answer}
const DayCol = ({ day, initialTasks, ...restProps }) => {
  console.log(initialTasks);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(initialTasks);
  }, []);
  const renderTaskCard = (tasks) => {
    return tasks.map((task, index) => {
      console.log(task);
      return <TaskCard key={index} task={task} />;
    });
  };
  return (
    <div>
      <Col>
        <h1>{day}</h1>
        {renderTaskCard(tasks)}
      </Col>
    </div>
  );
};

export default DayCol;
