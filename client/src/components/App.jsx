import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal.jsx";
import image from "../assets/img1.png";
import Form from "./Form.jsx";
import Favorites from "./Favorites.jsx";

const App = () => {

  return (
    <div>
      <Outer>
        <ImageConatiner url={image} />
        <h1>Hmm... 🤔 Can't decide where to eat? </h1>
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
  margin-top: 30px;
  display: flex;
  width: 380px;
  height: 320px;
  //border: solid;
  background-image: url(${(props) => props.url || ""});
  background-size: 100% 100%;
`;


const FavButton = styled.button`
  height: 40px;
  width: 200px;
  background-color: #fef9de;
  cursor: pointer;
  text-align: center;
  border: 2px solid #e17140;
  color: #e17140;
  font-size: 18px;
  &:hover {
    background-color: white;
    color: #e17140;
  }
  border-radius: 10px; 10px;
`
