import React, { useState } from "react";

import { Button, Table, Space, Modal, Input } from "antd";
import { Container, BoxButton, BoxLoading } from "./styled";
// import { ContentPage } from "./styled";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

import { useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

function CadastrarClientes() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  const handleInputChange = (e) => {

    setInputData(e.target.value);
    console.log(handleInputChange)
  };


  const [inputData, setInputData] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingClinte, setEditingCliente] = useState(null);
  const [dataSource, setDataSource] = useState([]);
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
            {" "}
            <Button
              onClick={() => {
                editCliente(record);
                console.log("sssssssssssssssssssss");
              }}
            >
              <EditOutlined style={{ color: "blue" }} />
              Editar
            </Button>
          </a>
          <a href="#">
            <Button
              onClick={() => {
                deleteCliente(record);
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />
              Deletar
            </Button>
          </a>
        </Space>
      ),
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //  ADICIONA CLIENTE
  const AddCliente = () => {
    const randomNumber = parseInt(Math.random() * 100);
    const newCliente = {
      id: randomNumber,
      name: inputData,
      email: inputData,
      address: inputData,

    };

    

    setDataSource((pre) => {
      return [...pre, newCliente];
    });
    setInputData('');
  };

  //    DELETA CLIENTE
  const deleteCliente = (record) => {
    Modal.confirm({
      title: "Desejva realmente excluir???",
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
      {loading ? (
        <BoxLoading>
          <HashLoader color={"black"} loading={loading} size={50} />
        </BoxLoading>
      ) : (
        <>
          <h1>Cadastrar Cliente</h1>
          <BoxButton>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              onClick={showModal}
            >
              Add Cliente
            </Button>
          </BoxButton>

          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >

              nome:
               <Input value={inputData} 
                  onChange={handleInputChange}
               />
              email:   
               <Input />
               endereço:   
               <Input />

               <Button onClick={AddCliente}> Cadastar cliente</Button>
          </Modal>

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
            <Input
              value={editingClinte?.address}
              onChange={(e) => {
                setEditingCliente((pre) => {
                  return { ...pre, email: e.target.value };
                });
              }}
            />
          </Modal>
        </>
      )}
    </Container>
  );
}

export default CadastrarClientes;
