import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useState } from "react";
import Modal from './Modal.jsx';
import RestaurantList from './RestaurantList.jsx';
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
  return (
    //Find open restaurants near you that serve the food you're craving & fit your price range - then spin the roulette wheel to randomly pick one!
    <div>
      <FormConatiner>
          <h1>Hmm... 🤔 Can't decide where to eat? </h1>
          <p> Find open restaurants near you that serve the food you're craving and fit your price range </p>
          <Filter onChange={handleInputChange}>
            <label> Location: </label>
            <Input type="text" name="location" /> <br></br>
            <label>Category: </label>
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
          {/* <h2>Find one for me => </h2> */}
          <SearchConatiner>
          <h2>Find one for me >> </h2>
          <SearchButton onClick={toggleModal}>Search</SearchButton>
          </SearchConatiner>
          {/* <SearchButton onClick={toggleModal}>Search</SearchButton> */}
        </FormConatiner>
        {/* {modal ? <Modal toggleModal={toggleModal} inputs={inputs}/> : ""} */}
        {modal ? <RestaurantList toggleModal={toggleModal} inputs={inputs}/> : ""}
    </div>
  )

}

export default Form;

const FormConatiner = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  //border: solid;
  // background-color: #fff9f4;
`;

const Filter = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const SearchButton = styled.button`
  border
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

const SearchConatiner = styled.div`
  width: 400px;
  height: 60px;
  //border: solid;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
