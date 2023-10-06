import React, { useState } from "react";

import { Button, Table, Space, Modal, Input } from "antd";
import { Container } from "./styled";
// import { ContentPage } from "./styled";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function CadastrarClientes() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingClinte, setEditingCliente] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "allan tavares",
      email: "allan.tavares@estudante.ufla.br",
      address: "rua cabure",
    },
    {
      id: 2,
      name: "allan tavares",
      email: "allan.tavares@estudante.ufla.br",
      address: "rua cabure",
    },
    {
      id: 3,
      name: "allan tavares",
      email: "allan.tavares@estudante.ufla.br",
      address: "rua cabure",
    },
    {
      id: 4,
      name: "allan tavares",
      email: "allan.tavares@estudante.ufla.br",
      address: "rua cabure",
    },
    {
      id: 5,
      name: "allan tavares",
      email: "allan.tavares@estudante.ufla.br",
      address: "rua cabure",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "Id",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Nome",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "E-mail",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Endereço",
      dataIndex: "address",
    },
    {
      title: "Ações",
      key: "05",
      render: (record) => (
        <Space size="middle">
          <a href="#">
            <EditOutlined
              style={{ color: "blue" }}
              onClick={() => {
                editCliente(record);
                console.log("sssssssssssssssssssss");
              }}
            />
          </a>
          <a href="#">
            <DeleteOutlined
              onClick={() => {
                deleteCliente(record);
              }}
              style={{ color: "red" }}
            />
          </a>
        </Space>
      ),
    },
  ];
  //  ADICIONA CLIENTE
  const AddCliente = () => {
    const randomNumber = parseInt(Math.random() * 100);
    const newCliente = {
      id: randomNumber,
      name: "Name" + randomNumber,
      email: randomNumber + "@gmail.com",
      address: "rua" + randomNumber,
    };

    setDataSource((pre) => {
      return [...pre, newCliente];
    });
  };

  //    DELETA CLIENTE
  const deleteCliente = (record) => {
    Modal.confirm({
      title: "Deseja realmente excluir???",
      okText: "Sim!",
      cancelText: "Cancelar",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((cliente) => cliente.id !== record.id);
        });
      },
    });
  };

  //   Editar Cliente
  const editCliente = (record) => {
    setIsEditing(true);
    setEditingCliente({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingCliente(null);
  };

  return (
    <Container>
      <h1>Cadastrar Cliente</h1>
      <Button onClick={AddCliente}>Add Cliente</Button>
      <Table columns={columns} dataSource={dataSource}></Table>
      <Modal
        title="Editar Cliente"
        visible={isEditing}
        okText="Salvar"
        cancelText="Cancelar"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((cliente) => {
              if (cliente.id === editingClinte.id) {
                return editingClinte;
              } else {
                return cliente;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editingClinte?.name}
          onChange={(e) => {
            setEditingCliente((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <Input
          value={editingClinte?.email}
          onChange={(e) => {
            setEditingCliente((pre) => {
              return { ...pre, email: e.target.value };
            });
          }}
        />
        <Input value={editingClinte?.address} />
      </Modal>
    </Container>
  );
}

export default CadastrarClientes;
