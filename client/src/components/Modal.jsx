import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useState } from 'react';
// const axios = require("axios");

const Modal = (props) => {

  const info = props.info;
  let index = 0;
  let business = info[index]
  let details = {
    img: business.image_url,
    name: business.name,
    rating: business.rating,
    catrgories: business.categories, //array
    price: business.price,
    location: business.location,
    distance: business.distance
  }
  console.log(details);

  return (
    <div>
      <Background>
        <ModalWrapper>
          <ImageContainer url={details.img}></ImageContainer>
          <DetailsContainer>details</DetailsContainer>
          <CloseButton>
            <Button onClick={() => { props.toggleModal() }}>X</Button>
          </CloseButton>

        </ModalWrapper>
      </Background>
    </div>
  )

}

export default Modal;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #fff9f4;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999
`;

const ModalWrapper = styled.div`
  width: 900px;
  height: 400px;
  border-radius: 12px;
  background-color: white;
  box-shadow: #f6f7fb 0px 5px 15px;
  display: flex;
  // flex-direction: column;
  padding: 25px;
  z-index: 9999
`;

const CloseButton = styled.div`
  width: 30px;
  height: 30px;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`

const ImageContainer = styled.div`
  width: 500px;
  height: 400px;
  // border: solid;
  margin-right: 20px;
  background-image: url(${props => props.url || '' });
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

const DetailsContainer = styled.div`
  width: 500px;
  height: 400px;
  border: solid;
  margin-right: 30px;
`
