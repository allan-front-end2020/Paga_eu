import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  background-color: #383838;
`;

export const FormGroup = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #201d1d;
  border-radius: 5px;
  width: 100%;
  max-width: 450px;

  h1 {
    color: white;
    font-size: 26px;
    font-weight: lighter;
    margin-bottom: 18px;
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }

  a {
    color: white;
    font-size: 14px;
  }

  label {
    color: white;
    display: block;
    text-align: left;
  }
  input {
    color: #fff;
    width: 100%;
    height: 45px;
    font-size: 20px;
    background-color: transparent;
    border: 2px solid #6a6a6a;
    border-radius: 8px;
    padding-left: 12px;

    input::placeholder {
      color: #fff;
      font-size: 12px;
      opacity: 0.7;
      padding: 3px;
    }
  }
`;

export const FooterLogin = styled.div`
  margin-top: 23px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const InputGroup = styled.div`
  width: 100%;
  margin: 16px 0px;
`;
export const ButtonLogin = styled.button`
  color: #fff;
  font-size: 20px;
  border: 30px;
  background-color: #6a6a6a;
  border-radius: 8px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  button:hover {
    background-color: black;
  }
`;
