import React from 'react';
import { Layout, Menu, ConfigProvider, Avatar } from 'antd';
import { ProjectOutlined, UserOutlined, HomeOutlined, ReadOutlined, FileTextOutlined, MailOutlined } from '@ant-design/icons';
import Home from './pages/Home';
import About from './pages/About';
import './App.styl';
import { fbIcon, githubIcon, linkedinIcon, igIcon, avatar } from './assets';


const { Content, Footer, Sider } = Layout;

const items = [HomeOutlined, UserOutlined, ReadOutlined, ProjectOutlined, MailOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);

items[0].label = 'Home';
items[1].label = 'About';
items[2].label = 'Skill';
items[3].label = 'Projects';
items[4].label = 'Contact';


function App() {
  return (
    <div className='P-app'>
      <Layout hasSider className='layout'>
        <ConfigProvider
          theme={{
            components: {
              Layout: {
                siderBg: 'rgb(226, 226, 226)'
              },
            },
          }}
        >
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
            <div className="info-container">
              <div className='avatar-wrapper'>
                <Avatar
                  src={avatar}
                  size={{ xs: 28, sm: 40, md: 48, lg: 72, xl: 96, xxl: 120 }}
                />
              </div>
              <div className='name-wrapper'>
                <span className='name'>
                  Yuchen Wang
                </span>
              </div>
            </div>

            <ConfigProvider
              theme={{
                components: {
                  Menu: {
                    itemBg: 'rgb(226, 226, 226)',
                    itemHeight: '3.5rem',
                    fontSize: '1.3rem',
                    iconSize: '1.3rem',
                    iconMarginInlineEnd: '1.5rem'
                  },
                },
              }}
            >
              <Menu mode="inline" defaultSelectedKeys={['1']} items={items} />
            </ConfigProvider>


            <div className="social-container">
              <a href="https://linkedin.com/in/yuchen-wang-42b920272" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://github.com/AllenWangyc" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100090374055425" target="_blank" rel="noreferrer">
                <img src={fbIcon} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/omoshiroaw" target="_blank" rel="noreferrer">
                <img src={igIcon} alt="Instagram" />
              </a>
            </div>

          </Sider>
        </ConfigProvider>

        <Layout>
          <Content className='content'>
            <Home />
            <About />
            <Footer style={{ textAlign: 'center' }}>
              © {new Date().getFullYear()} Yuchen Wang. All rights reserved.
            </Footer>
          </Content>
        </Layout>

      </Layout>
    </div>
  )
}

export default App
