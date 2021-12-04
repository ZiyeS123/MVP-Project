import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal.jsx";
import image from "../assets/img1.png";
import Form from "./Form.jsx";

const App = () => {

  return (
    <div>
      <Outer>
        <ImageConatiner url={image} />
        <Form />
      </Outer>
    </div>
  );
};

export default App;

const Outer = styled.div`
  height: 100%;
  weight: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fefef3;
`;

const ImageConatiner = styled.div`
  margin-top: 50px;
  display: flex;
  width: 380px;
  height: 320px;
  // border: solid;
  background-image: url(${(props) => props.url || ""});
  background-size: 100% 100%;
`;

const Title = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  border: solid;
`;

