import React, { useCallback } from 'react';
import { Layout, Menu, ConfigProvider, Avatar, Button } from 'antd';
import { ProjectOutlined, UserOutlined, HomeOutlined, ReadOutlined, DownloadOutlined, MailOutlined } from '@ant-design/icons';
import { Home, About, Skill, Projects, Contact } from './pages';
import './App.styl';
import { fbIcon, githubIcon, linkedinIcon, igIcon, avatar } from './assets';
import { data } from '@/data/project_data'


const { Content, Footer, Sider } = Layout;

const items = [
  { key: 'home', icon: <HomeOutlined />, label: 'Home' },
  { key: 'about', icon: <UserOutlined />, label: 'About' },
  { key: 'skill', icon: <ReadOutlined />, label: 'Skill' },
  { key: 'projects', icon: <ProjectOutlined />, label: 'Projects' },
  { key: 'contact', icon: <MailOutlined />, label: 'Contact' },
];


function App() {
  const handleClick = useCallback(({ key }) => {
    const el = document.getElementById(key);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, []);

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
              <Menu mode="inline" defaultSelectedKeys={['home']} items={items} onClick={handleClick} />
            </ConfigProvider>

            <div className='bottom-wrapper'>
              <div className="resume-btn-wrapper">
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultBg: 'rgba(152,137,125,0.3)',
                        defaultHoverBg: 'rgba(152,137,125,0.8)',
                        defaultBorderColor: 'rgba(152,137,125,0.8)',
                        defaultHoverBorderColor: 'rgba(152,137,125,1)',
                        defaultHoverColor: 'rgb(226,226,226)'
                      },
                    },
                  }}
                >
                  <Button
                    variant='solid'
                    icon={<DownloadOutlined />}
                    size="large"
                    href="/assets/resume.pdf"
                    download
                  >
                    Resume
                  </Button>
                </ConfigProvider>
              </div>
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
            </div>
          </Sider>
        </ConfigProvider>

        <Layout>
          <Content className='content'>
            <Home />
            <About />
            <Skill />
            <Projects {...data} />
            <Contact />
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
