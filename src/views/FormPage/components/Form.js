import React from "react";
import { Button, Card, Form, Input, Select } from "antd";
import { v4 as uuidv4 } from "uuid";
import { defaultTask } from "../../../defaultTasks";
import { defaultQuestion } from "../../../defaultQuestions";
import { useHistory } from "react-router-dom";
import "../FormPage.css";

const { Option } = Select;
const { TextArea } = Input;
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
          {
            id: uuidv4(),
            question: defaultQuestion[0],
            answer: values["answer1"],
          },
          {
            id: uuidv4(),
            question: defaultQuestion[1],
            answer: values["answer2"],
          },
          {
            id: uuidv4(),
            question: defaultQuestion[2],
            answer: values["answer3"],
          },
        ],
      },
    ];
    allTasks = { ...allTasks, ...obj };
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
    history.push("/");
  };
  return (
    <Card className="form-card">
      <h1>Personal Daily Report</h1>
      <Form
        labelCol={{ span: 4 }}
        labelAlign="left"
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
        <h3>{defaultQuestion[0]}</h3>
        <Form.Item label="Answer" name="answer1">
          <TextArea rows={4} />
        </Form.Item>
        <h3>{defaultQuestion[1]}</h3>
        <Form.Item label="Answer" name="answer2">
          <TextArea rows={4} />
        </Form.Item>
        <h3>{defaultQuestion[2]}</h3>
        <Form.Item label="Answer" name="answer3">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FormLayout;
