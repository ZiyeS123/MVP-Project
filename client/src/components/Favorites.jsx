import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Modal from './Modal.jsx';
import RestaurantList from './RestaurantList.jsx';
import Star from './Star.jsx'
const axios = require("axios");

const Favorites = (props) => {

  const [fav, setFav] = useState([]);

  useEffect(() => { getFavData() }, [fav])

  const getFavData = () => {
    axios.get('restaurants/fav')
    .then((results) => {
      setFav(results.data)
    })
    .catch((err) => {
      console.log('ERROR IN getFavData: ', err);
    })
  }

  const removeFav = (info) => {
    axios.post('/restaurants/remove', info)
    .then((results) => {
      const index = fav.indexOf(info.yelp)
      fav.splice(index, 1)
      alert('Removed!')
    })
    .catch((err) => {
      console.log('ERROR IN removeFav:', err)
    })
  }

  return(
    <div>
    <Background>
      <HomeButton onClick={() => {props.toggleFav()}}>Home</HomeButton>
      <Outer>
        {fav.map((info, i) => {
          const { id, img, business_name, rating, category, price, business_location, distance, review_count, yelp } = info;
          return (
            <Container>
              <ImageContainer url={img}/>
              <Details>
              <h3>{business_name}</h3>
              <Star rating={rating}/>
              <p> {business_location} </p>
              <p> Distance: {distance} m </p>
              <RemoveButton onClick={() => {removeFav(info)}}>Remove</RemoveButton>
              </Details>
            </Container>
          )
        })}
      </Outer>
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
  //justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999
`;

const HomeButton = styled.button`
  margin-top: 30px;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  text-align: center;
  border: 2px solid #e17140;
  color: #e17140;;
  font-size: 18px;
  &:hover {
    background-color: #fef9de;
    color: #e17140;
    border: 2px solid #e17140;
  }
`

const Outer = styled.div`
  height: 90%;
  width: 90%;
  //border: solid;
  display: flex;
  flex-wrap: wrap;
`

const Container = styled.div`
  height: 250px;
  width: 600px;
  //border: solid;
  margin-top: 30px;
  //padding: 10px;
  display: flex;
  background-color: white;
  border-radius: 10px; 10px;
  box-shadow: #f6f7fb 10px 5px 5px;
  margin: 15px;
`

const ImageContainer = styled.div`
  height: 250px;
  width: 300px;
  //border: 1px solid red;
  background-image: url(${props => props.url || '' });
  background-repeat: no-repeat;
  background-size: 100% 100%;
`
const Details = styled.div`
  height: 300px;
  width: 300px;
  //border: solid;
  margin-left: 20px;
`

const RemoveButton = styled.button`
  height: 25px;
  width: 100px;
  //border: 1px solid red;
  align-self: flex-end;
  border-radius: 5px;
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
`


