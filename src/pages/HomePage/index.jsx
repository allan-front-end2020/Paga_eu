import { Menu, Layout, Card, Space, Divider, Row, Col, Table } from "antd";

import Sider from "antd/es/layout/Sider";
import { Typography } from "antd";
import { HomeOutlined,StockOutlined, TeamOutlined, TableOutlined  } from '@ant-design/icons';

import { Header, Content } from "antd/es/layout/layout";
import { ContentPage } from "./styled";
import { faker } from "@faker-js/faker";
import { Outlet, useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const generateData = () => {
  const dat = [];

  for (let i = 0; i < 34; i++) {
    dat.push({
      name: faker.person.fullName(),
      email: faker.internet.email(),
    });
  }
  return dat;
};

const data = generateData();

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Layout className="container">
        <Header style={{ background: "white" }}>
          <h2 className="title" style={{ margin: 0 }}>
            Pega-eu
          </h2>
        </Header>

        <Layout>
          <Sider theme="light">
            <Menu
              onClick={(item) => {
                navigate(item.key);
              }}
              mode="inline"
              items={[
                {
                  label: "Home",
                  key: " home-page",
                  icon: <HomeOutlined /> 
                },
                {
                  label: "Cadastrar Cliente",
                  key: "cadastrar-clientes",
                  icon:<TeamOutlined /> 
                },
                {
                  label: "Cadastrar Produtos",
                  key: "cadastrar-produtos",
                  icon:<TableOutlined /> 
                },
                {
                  label: "Dashbord",
                  key: "Dashbord-page",
                  icon:<StockOutlined />
                },
              ]}
            />
          </Sider>

          <ContentPage>
    
            <Outlet />
          </ContentPage>
        </Layout>
      </Layout>
    </>
  );
}

export default HomePage;
