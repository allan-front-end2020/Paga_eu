import { Menu, Layout, Card, Space, Divider, Row, Col, Table } from "antd";

import Sider from "antd/es/layout/Sider";
import { Typography } from "antd";

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

function DashbordPage() {
  return (
    <>
      <h1>Dashbord</h1>

      <Row gutter={8}>
        <Col span={6}>
          <Card>
            <Space direction="vertical" className="cardtitle">
              <small>Total á receber</small>
            </Space>
            <Typography.Title>
              <div style={{ display: "flex", fontSize: "34px" }}>
                R$ <Number n={1234} />,<Number n={97} />
              </div>
            </Typography.Title>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Space direction="vertical" className="cardtitle">
              <small>Total á receber</small>
            </Space>
            <Typography.Title>
              <div style={{ display: "flex", fontSize: "34px" }}>
                R$ <Number n={1234} />,<Number n={97} />
              </div>
            </Typography.Title>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Space direction="vertical" className="cardtitle">
              <small>Total á receber</small>
            </Space>
            <Typography.Title>
              <div style={{ display: "flex", fontSize: "34px" }}>
                R$ <Number n={1234} />,<Number n={97} />
              </div>
            </Typography.Title>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Space direction="vertical" className="cardtitle">
              <small>Total á receber</small>
            </Space>
            <Typography.Title>
              <div style={{ display: "flex", fontSize: "34px" }}>
                R$ <Number n={1234} />,<Number n={97} />
              </div>
            </Typography.Title>
          </Card>
        </Col>
      </Row>
      <Divider />
      <h2>Historico de Fiados</h2>
      <Row>
        <Col span={12}>
          <Table
            dataSource={data}
            columns={[
              {
                dataIndex: "id",
                title: "ID",
                key: "id",
              },
              {
                dataIndex: "name",
                title: "name",
                key: "name",
              },
              {
                dataIndex: "email",
                title: "Email Id",
                key: "email",
              },
            ]}
          />
        </Col>
        <Col>
        
        </Col>
      </Row>
    </>
  );
}

export default DashbordPage;
