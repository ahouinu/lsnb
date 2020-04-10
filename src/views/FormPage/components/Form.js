import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { v4 as uuidv4 } from "uuid";
import { defaultTask } from "../../../defaultTasks";
import { defaultQuestion } from "../../../defaultQuestions";
import { useHistory } from "react-router-dom";

const { Option } = Select;
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const daysOptions = DAYS.map((o, index) => (
  <Option value={o} key={o}>
    {o}
  </Option>
));
const FormLayout = () => {
  const [form] = Form.useForm();
  let history = useHistory();
  const onFinish = (values) => {
    form.resetFields();
    let allTasks = JSON.parse(localStorage.getItem("allTasks")) || defaultTask;
    let obj = {};
    obj[values["day"]] = [
      ...allTasks[values["day"]],
      {
        id: uuidv4(),
        author: values["author"],
        content: [
          { id: uuidv4(), question: "1", answer: values["answer1"] },
          { id: uuidv4(), question: "2", answer: values["answer2"] },
          { id: uuidv4(), question: "3", answer: values["answer3"] },
        ],
      },
    ];
    allTasks = { ...allTasks, ...obj };
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
    history.push("/");
  };
  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={{
          author: "",
          answer1: "",
          answer2: "",
          answer3: "",
        }}
      >
        <Form.Item
          label="Reporter"
          name="author"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="day"
          label="Date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>{daysOptions}</Select>
        </Form.Item>
        {defaultQuestion[0]}
        <Form.Item label="Answer" name="answer1">
          <Input />
        </Form.Item>
        {defaultQuestion[1]}
        <Form.Item label="Answer" name="answer2">
          <Input />
        </Form.Item>
        {defaultQuestion[2]}
        <Form.Item label="Answer" name="answer3">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLayout;
