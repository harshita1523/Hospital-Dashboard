import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Card, Descriptions, Divider, Image, Layout, Menu, Space, theme } from 'antd';
import ProfileCard from './components/ProfileCard';
import PatientTable from './components/PatientTable';
import Chart from 'chart.js/auto';
import Graph from './components/Graph';


const { Header, Content, Footer, Sider } = Layout;


    


const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'UserName',
    children: <p>Zhou Maomao</p>,
  },
  {
    key: '2',
    label: 'Telephone',
    children: <p>1810000000</p>,
  },
  {
    key: '3',
    label: 'GST Number',
    children: <p>XYZ1234</p>,
  },
  {
    key: '4',
    label: 'Email',
    children: <p>example@gmail.com</p>,
  },
  {
    key: '5',
    label: 'Address',
    children: <p>No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</p>,
  },
];



const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <h1 style={{color:'white', textAlign:'center', margin:'45%'}}>
          CARE.FI
        </h1>
      </Header>
      <Content>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} width={350}>
            <Card>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <Image style={{borderRadius:"50%", }} width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>


              </div>
            {/* <Avatar  size={'large'}style={{ backgroundColor: '#87d068', marginLeft:'40%' }} icon={<UserOutlined />} /> */}
            <h1 style={{textAlign:'center'}}>Sanjeevani Hospital</h1>
            <Divider/>
            <Descriptions layout='vertical' title="User-Info" items={items} />



            


            </Card>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Space>
              <Graph/>
              
            </Space>
            <Divider/>
            <h2>Patients</h2>
            <PatientTable/>
            <Divider/>
            <h2>Tasks</h2>
            <PatientTable/>
            <Divider/>

            <h2>Cases</h2>
            <PatientTable/>
            <Divider/>

            
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
      </Footer>
    </Layout>
  );
};

export default App;