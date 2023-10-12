import React from "react";
import { useEffect, useState} from "react";
import HashLoader from "react-spinners/HashLoader";

function CadastrarProdutos() {
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
       <HashLoader color={"black"} loading={loading} size={50} />
      ) : (
        <h1>Cadastrar Produtos</h1>
      )}





      
    </>
  );
}

export default CadastrarProdutos;
