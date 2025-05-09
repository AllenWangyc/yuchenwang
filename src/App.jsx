import React from 'react';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Home from './pages/Home';
import './App.styl';


const { Content, Footer, Sider } = Layout;

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);

function App() {
  return (
    <div className='P-app'>
      <Layout hasSider className='layout'>
        <Sider className='sider'
          width="20%"
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout>
          <Content className='content'>
            <Home />
            <Footer style={{ textAlign: 'center' }}>
              Copyright ©{new Date().getFullYear()} Yuchen Wang.
            </Footer>
          </Content>
        </Layout>

      </Layout>
    </div>
  )
}

export default App
