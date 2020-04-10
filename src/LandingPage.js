import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import "./LandingPage.css";

const { Header, Content, Footer } = Layout;

const loading = () => <div>Loading...</div>;
// HomePage
const HomePage = Loadable({
  loader: () => import("./views/HomePage/Board"),
  loading,
});

// About
const About = Loadable({
  loader: () => import("./views/About/About"),
  loading,
});

// about
const FormPage = Loadable({
  loader: () => import("./views/FormPage/FormPage"),
  loading,
});

const LandingPage = () => (
  <Layout className="layout">
    <Router>
      <Header style={{ backgroundColor: "white" }}>
        <div className="logo">Agile Standup Tools</div>
        <Menu
          className="menu"
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/form">Form</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ minHeight: "1000px", padding: "30px 0px 30px 0px" }}>
        <div className="site-layout-content">
          <Switch>
            <Route path="/form" exact component={FormPage} />
            <Route path="/about" exact component={About} />
            <Route path="/" name="HomePage" component={HomePage} />
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Router>
  </Layout>
);

export default LandingPage;
