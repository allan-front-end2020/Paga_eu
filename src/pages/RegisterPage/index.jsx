import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Link } from "react-router-dom";
import {
  FormGroup,
  Container,
  FooterLogin,
  InputGroup,
  ButtonLogin,
} from "./styled";

function RegisterPage() {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });
    login(email, password);
  };

  return (
    <>
      <Container id="login">
        {/* <h1>Login do sistemas</h1> */}
        {/* <p>{String(authenticated)}</p> */}
        <FormGroup onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <InputGroup>
            <label htmlFor="email">Nome</label>
            <input
              placeholder="Digite seu nome"
              type="text"
              name="text"
              id="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">E-mail</label>
            <input
              placeholder="Digite seu e-mail"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="passwod">Senha</label>
            <input
              placeholder="Digite sua senha"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="passwod">Cpf</label>
            <input
              placeholder="Digite seu cpf"
              type="text"
              name="cpf"
              id="cpf"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <ButtonLogin type="submit">Efetuar Cadastro</ButtonLogin>
          </InputGroup>

          <FooterLogin>
            <Link to="/">Voltar Para Login</Link>
          </FooterLogin>
        </FormGroup>
      </Container>
    </>
  );
}

export default RegisterPage;
