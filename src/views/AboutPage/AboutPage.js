import React from "react";
import { Row, Col, Card } from "antd";
import Profile from "./Profile";

const profileData = [
  {
    name: "Eric Zhao",
    role: "Data Scientist",
    img:
      "https://media-exp1.licdn.com/dms/image/C5603AQER4XUD4LwjTw/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=QfGw1wGd_tC2ZLlUXp49Bhfem88TVlMg4MgvQhq2jHY",
    link: "https://www.linkedin.com/in/ericzzz/",
    github: "https://github.com/Eric-Zzz",
  },
  {
    name: "Tim Chen",
    role: "Software Engineer",
    img:
      "https://media-exp1.licdn.com/dms/image/C5603AQG4FSEM8tCcbA/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=tnBgs5iT7GiU_7YLsrC7PesOxfxJIaMCDGFOJHk6P0o",
    link: "https://www.linkedin.com/in/tim-chen-130030157/",
    github: "https://www.github.com/ahouinu/",
  },
  {
    name: "Zachary Lin",
    role: "Software Engineer",
    img:
      "https://media-exp1.licdn.com/dms/image/C5603AQG19fIT0wW3Bg/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=IylVjn8TUUPc7cieYZmCn2Q09RhGyXcW9saxizOk1GE",
    link: "https://www.linkedin.com/in/zachary-lin-05149016b/",
    github: "https://github.com/zacharylin123",
  },
];

const About = () => (
  <div>
    <Card title="About US" bordered="false">
      <Row gutter="[60, 60]" align="center">
        {profileData.map((p) => (
          <Col
            span={6}
            style={{
              margin: "0 5px 0 5px",
              padding: "3px 3px 3px 3px",
              borderRadius: "20px",
            }}
          >
            <Profile {...p} />
          </Col>
        ))}
      </Row>
    </Card>
  </div>
);
export default About;
