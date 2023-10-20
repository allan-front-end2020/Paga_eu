import styled from "styled-components";
import { Content } from "antd/es/layout/layout";
import { Card, Table } from "antd";

export const ContentPage = styled.div`
  padding: 21px 35px;
  width: 94%;

  h2 {
    margin: 10px;
    color: blue;
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 23px;
  small {
    text-align: left;
  }
`;
export const CardAndt = styled(Card)`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`;
export const TableAntd = styled(Table)`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 7px;

`;
export const BoxLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
