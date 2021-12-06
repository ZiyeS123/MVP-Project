import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useState } from "react";
import Modal from './Modal.jsx';
import RestaurantList from './RestaurantList.jsx';
import Favorites from './Favorites.jsx'
const axios = require("axios");


const Form = () => {

  const initialInputs = { location: '', category: '', sort: '', price: '' }
  const [modal, setModal] = useState(false);
  const [inputs, setInput] = useState(initialInputs);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleInputChange = (e) => {
    setInput((prevState) => (
      {...prevState, [e.target.name]: e.target.value }
      ))

  }

  const [showFav, setFav] = useState(false);

  const handleFavClick = () => {
    setFav(!showFav)
  }

  return (

    <div>
      <FormConatiner>
          <Filter onChange={handleInputChange}>
            <label> Location: </label>
            <Input type="text" name="location" /> <br></br>
            <label>Name/Category: </label>
            <Input type="text" name="category" /> <br></br>
            <label> Sort By: </label>
            <Select name="sort">
                <option value="sort by"> </option>
                <option value="best_match"> best match </option>
                <option value="rating"> rating </option>
                <option value="review_count"> review count </option>
                <option value="distance"> distance </option>
            </Select> <br></br>
            <label> Price: </label>
            <Select name="price">
                <option value="price"> </option>
                <option value="$">$ </option>
                <option value="$$">$$ </option>
                <option value="$$$">$$$ </option>
            </Select>
          </Filter>
          <SearchOuter>
          <SearchConatiner>
          <h3>Find one for me >>  </h3>
          <SearchButton onClick={toggleModal}>Search</SearchButton>
          </SearchConatiner>
          <SearchConatiner2>
          <h3>Checkout My Favorites List >> </h3>
          <FavButton onClick={handleFavClick}>My Favorites List </FavButton>
          {showFav && <Favorites toggleFav={handleFavClick} />}
          </SearchConatiner2>
          </SearchOuter>
        </FormConatiner>
        {modal ? <RestaurantList toggleModal={toggleModal} inputs={inputs}/> : ""}
    </div>
  )

}

export default Form;

const FormConatiner = styled.div`
  //margin-top: -70px;
  display: flex;
  flex-direction: column;;
  align-items: center;
  width: 900px;
  height: 450px;
  //border: solid;
  // background-color: #fff9f4;
`;

const Filter = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
`;

const SearchOuter = styled.div`
  height: 300px;
  width: 400px;
  display: flex;
  flex-direction: column;
  //border: solid;
`

const SearchButton = styled.button`
  margin-left: 60px;
  height: 30px;
  width: 120px;
  background-color: #fef9de;
  cursor: pointer;
  text-align: center;
  border: 2px solid #e17140;
  color: #e17140;
  font-size: 18px;
  border-radius: 10px; 10px;
  &:hover {
    background-color: white;
    color: #e17140;
  }
`;

const SearchConatiner = styled.div`
  width: 400px;
  height: 70px;
  //border: solid;
  display: flex;
  align-items: center;
  //justify-content: space-between;
`

const SearchConatiner2 = styled.div`
  width: 500px;
  height: 60px;
  //border: solid;
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Input = styled.input`
  margin-top: 5px;
  border: 1px solid  #e17140;
  width: 300px;
  height: 20px;
  border-radius: 4px;
`

const Select = styled.select`
  margin-top: 5px;
  border: 1px solid  #e17140;
  width: 300px;
  height: 25px;
  border-radius: 4px;
`
const FavButton = styled.button`
  height: 30px;
  width: 180px;
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