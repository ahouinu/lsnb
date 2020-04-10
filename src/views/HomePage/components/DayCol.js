import React, { useEffect, useState } from "react";
import { Col } from "antd";
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
  const handleDelete = (id) => {
    let allTasks = JSON.parse(localStorage.getItem("allTasks"));
    let task = {};
    task[day] = allTasks[day].filter((task) => task.id != id);
    allTasks = { ...allTasks, ...task };
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
    setTasks(task[day]);
  };
  const renderTaskCard = (tasks) => {
    return tasks.map((task, index) => {
      console.log(task);
      return <TaskCard key={index} task={task} handleDelete={handleDelete} />;
    });
  };
  return (
    <div>
      <Col>
        <h1
          style={{
            fontFamily: "Source Sans Pro",
            fontWeight: "bold",
          }}
        >
          {day}
        </h1>
        {renderTaskCard(tasks)}
      </Col>
    </div>
  );
};

export default DayCol;
