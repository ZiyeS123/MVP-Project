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
    review_count: business.review_count,
    categories: business.categories, //array
    price: business.price,
    location: business.location.display_address, //array
    distance: business.distance
  }
  console.log(details);

  const {img, name, rating, categories, price, location, distance, review_count} = details;
  let category = '';
  for (let i = 0; i < categories.length; i++) {
    category = category + categories[i].title + ' · ';
  }
  console.log(category);
  let address = '';
  location.forEach((element) => { address = address + ' ' + element})
  console.log(address);
  let dis = Math.floor(distance);

  return (
    <div>
      <Background>
        <ModalWrapper>
          <ImageContainer url={img}></ImageContainer>
          <DetailsContainer>
            <h3> {name} </h3>
            <p> Rating: {rating} {'   '} {review_count} </p>
            <p> {price} {' ·   '} {category} </p>
            <p> {address} </p>
            <p> Distance: {dis} m </p>
            <MoreButton>More Details</MoreButton>
          </DetailsContainer>

          <CloseButton>
            <Button onClick={() => { props.toggleModal() }}>ⓧ</Button>
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
  background-color: #fefef3;
  // flex-direction: column;
  // padding: 15px;
  z-index: 9999
`;

const CloseButton = styled.div`
  width: 40px;
  height: 40px;
`;

const Button = styled.button`
  background-color: #fefef3;
  border: black;
  cursor: pointer;
  font-size: 20px;
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
  height: 380px;
  // border: solid;
  margin-right: 30px;
  padding: 10px;
  // display: felx;
  // flex-direction: column;
`

const MoreButton = styled.button`
  height: 40px;
  width: 120px;
  background-color: #e17140;
  cursor: pointer;
  text-align: center;
  border: 2px solid #e17140;
  color: white;
  font-size: 18px;
  &:hover {
    background-color: white;
    color: #e17140;
  }
`;