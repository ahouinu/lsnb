import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
  loader: () => import("./views/AboutPage/AboutPage"),
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
        <div className="logo">Agile Standup Tool</div>
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
      <Content
        style={{ padding: "0 50px", margin: "50px 0 0 0", minHeight: "500px" }}
      >
        <div className="site-layout-content">
          <Switch>
            <Route path="/form" component={FormPage} />
            <Route path="/about" component={About} />
            <Route path="/" name="HomePage" component={HomePage} />
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <a href="https://membership.acs.org.au/flattenthecurvehack.html">
          #flattenthecurvehack Hackathon ACS 2020
        </a>
        <span style={{ margin: "0px 5px 0px 5px" }}>|</span>
        <a href="/about">Team LSNB</a>
      </Footer>
    </Router>
  </Layout>
);

export default LandingPage;
