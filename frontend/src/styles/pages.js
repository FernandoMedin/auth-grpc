import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 400px;
  background: #F3F7F0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: #F2545B;
    margin-bottom: 15px;
    border: 1px solid #F2545B;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    margin: 0 .25rem;
    min-width: 380px;
    border: 1px solid #eee;
    border-left: 3px solid;
    border-radius: 5px;
    transition: border-color .5s ease-out;
    padding: 10px;
    margin-bottom: 10px;
  }
  input:optional {
    border-left-color: #999;
  }
  input:required {
    border-left-color: palegreen;
  }
  button {
    color: #F3F7F0;
    font-size: 16px;
    background: #19323C;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #19323C;
    text-decoration: none;
  }
`;