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

function LoginPage() {
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
          <h1>Faça seu Login</h1>
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
            <ButtonLogin type="submit">Entrar</ButtonLogin>
          </InputGroup>

          <FooterLogin>
             <Link to= "cadastro">Esqueceu sua senha?</Link>
             <Link to= "cadastro">Cadastrar</Link>
          </FooterLogin>
        </FormGroup>
      </Container>
    </>
  );
}

export default LoginPage;
