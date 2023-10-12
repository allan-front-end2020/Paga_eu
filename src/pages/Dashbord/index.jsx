import { Menu, Layout, Card, Space, Divider, Row, Col, Table } from "antd";

import Sider from "antd/es/layout/Sider";
import { Typography } from "antd";

import { Header, Content } from "antd/es/layout/layout";
import { ContentPage, CardContent, BoxLoading } from "./styled";
import { faker } from "@faker-js/faker";
import { Outlet, useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <BoxLoading>
          <HashLoader color={"black"} loading={loading} size={50} />
        </BoxLoading>
      ) : (
        <>
          <h1>Dashbord</h1>
          <Row gutter={8}>
            <Col span={8}>
              <Card>
                <CardContent>
                  <Space direction="vertical" className="cardtitle">
                    <small>Total á receber</small>
                  </Space>
                  <Typography.Title>
                    <div style={{ display: "flex", fontSize: "34px" }}>
                      R$ <Number n={1234} />,<Number n={97} />
                    </div>
                  </Typography.Title>
                </CardContent>
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <CardContent>
                  <Space direction="vertical" className="cardtitle">
                    <small>Total de cliente</small>
                  </Space>
                  <Typography.Title>
                    <div style={{ display: "flex", fontSize: "34px" }}>
                      <Number n={70} />
                    </div>
                  </Typography.Title>
                </CardContent>
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <CardContent>
                  <Space direction="vertical" className="cardtitle">
                    <small>Valor da Ultima Comra</small>
                  </Space>
                  <Typography.Title>
                    <div style={{ display: "flex", fontSize: "34px" }}>
                      R$ <Number n={334} />,<Number n={17} />
                    </div>
                  </Typography.Title>
                </CardContent>
              </Card>
            </Col>
          </Row>
          <Divider />
          <h2>Historico de Fiados</h2>
          <Row gutter={8}>
            <Col span={24}>
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
            <Col span={24}>
              {/* <h2>Graficos de fiados</h2>
    <Chart
      chartType="ScatterChart"
      data={[
        ["Mês", "Valor"],
        [4, 5.5],
        [8, 22],
        [8, 200],
        [8, 22],
        [8, 23],
        [8, 33],
        [8, 3],
      ]}
      width="100%"
      height="400px"
      legendToggle
    /> */}
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

export default DashbordPage;
