import React from "react";
import { Card, Avatar, Row, Col } from "antd";
import {
  UserOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "./Profile.css";

const { Meta } = Card;

const Profile = ({ name, role, img, link, github }) => (
  <div>
    <Card style={{ width: 240 }} hoverable>
      <Avatar
        size={128}
        icon={img ? <img alt="example" src={img} /> : <UserOutlined />}
        style={{ margin: "0px 5px 30px 5px" }}
      />
      <Meta title={name} description={role} />
      <Row style={{ margin: "20px 5px 10px 5px" }}>
        <Col span={12}>
          <span>
            <GithubOutlined
              className="icon-class"
              onClick={() => (window.location.href = github)}
            />
          </span>
        </Col>
        <Col span={12}>
          <span>
            <LinkedinOutlined
              className="icon-class"
              onClick={() => (window.location.href = link)}
            />
          </span>
        </Col>
      </Row>
    </Card>
  </div>
);
export default Profile;
