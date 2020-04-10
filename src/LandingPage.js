import React from 'react';
import { Layout, Menu, Empty } from 'antd';
import Board from './Board';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const LandingPage = () => (
  <Layout className="layout">
    <Router>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key="2"><Link to='/form'>Form</Link></Menu.Item>
          <Menu.Item key="3"><Link to='/about'>About</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', height: '1000px' }}>
        <div className="site-layout-content">

          <Route path='/' exact component={Board} />
          <Route path='/form' exact render={() => <Empty />} />
          <Route path='/about' exact render={() => <Empty />} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Router>
    </Layout>
)

export default LandingPage;
