import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useState } from 'react';
import Stars from './Star.jsx'
const axios = require("axios");

const Modal = (props) => {

  const [index, setIndex] = useState(0)
  const [fav, setFav] = useState([])

  const info = props.info;
  const business = info[index]
  const details = {
    img: business.image_url,
    name: business.name,
    rating: business.rating,
    review_count: business.review_count,
    categories: business.categories, //array
    price: business.price,
    location: business.location.display_address, //array
    distance: business.distance,
    yelp: business.url
  }
  const {img, name, rating, categories, price, location, distance, review_count, yelp} = details;
  let category = '';
  for (let i = 0; i < categories.length; i++) {
    category = category + categories[i].title + ' · ';
  }

  let address = '';
  location.forEach((element) => { address = address + ' ' + element})

  const dis = Math.floor(distance);

  const businessInfo = {
    business_name: name,
    rating: rating,
    category: category,
    price: price.length,
    business_location: address,
    distance: dis,
    review_count: review_count,
    yelp: yelp
  }

  //console.log(fav);

  const handleLikeButtonClick = (businessInfo) => {
    const yelp = businessInfo.yelp;
    if (!fav.includes(yelp)) {
      //console.log('not in fav')
      setFav(fav => [...fav, yelp])
      axios
      .post('/restaurants/add', businessInfo)
      .then((data) => {
        alert('Add to favorite list!')
      })
      .catch((err)=> {
        console.log('ERROR IN handleLikeButtonClick: ', err)
      })
    } else if (fav.includes(yelp)) {
      alert('Already in favorite list!')
    }
  }


  return (
    <div>
      <Background>
      <h1>Good place recommended for you 🙌</h1>
        <ModalWrapper>
          <ImageContainer url={img}>
            <LikeButtonContainer>
              <LikeButton onClick={() => {handleLikeButtonClick(businessInfo)}}>⭐️</LikeButton>
            </LikeButtonContainer>
          </ImageContainer>
          <DetailsContainer>
            <h3> {name} </h3>
            <Stars rating={rating}/>
            <p> {price} {' ·   '} {category} </p>
            <p> {address} </p>
            <p> Distance: {dis} m </p>
            <a href={yelp}> <MoreButton >View more details on Yelp</MoreButton> </a>
            <NextButton onClick={() => {setIndex(index + 1)}} >Find another one for me</NextButton>
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
  flex-direction: column;
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
  &:hover {
    color: #e17140;
  }
`

const ImageContainer = styled.div`
  width: 500px;
  height: 400px;
  // border: solid;
  margin-right: 30px;
  background-image: url(${props => props.url || '' });
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

const DetailsContainer = styled.div`
  width: 550px;
  height: 380px;
  // border: solid;
  margin-right: 30px;
  padding: 10px;
  // display: felx;
  // flex-direction: column;
`

const MoreButton = styled.button`
  margin-top: 10px;
  border-radius: 5px;
  height: 40px;
  width: 300px;
  background-color: #e17140;
  cursor: pointer;
  text-align: center;
  border: 2px solid #e17140;
  color: white;
  border: #e17140;;
  font-size: 18px;
  &:hover {
    background-color: white;
    color: #e17140;
    border: 2px solid #e17140;
  }
`;

const NextButton = styled(MoreButton)`
  background-color: #fef9de;
  color: #e17140;
  border: 2px solid #e17140;
  &:hover {
    background-color: white;
    color: #e17140;;
  }
`
const LikeButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LikeButton = styled.button`
  border: none;
  color: red;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;