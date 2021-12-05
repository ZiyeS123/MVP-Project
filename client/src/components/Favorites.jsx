import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useState } from "react";
import Modal from './Modal.jsx';
import RestaurantList from './RestaurantList.jsx';
const axios = require("axios");

const Favorites = (props) => {

  return(
    <div>
    <Background>
      <HomeButton onClick={() => {props.toggleFav()}}>Home</HomeButton>
      <h1>this is my fav list</h1>
    </Background>
    </div>
  )

}

export default Favorites;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #fefef3;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999
`;

const HomeButton = styled.button`
  height: 30px;
  width: 100px;
`