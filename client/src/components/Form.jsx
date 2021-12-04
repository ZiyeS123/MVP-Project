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
    <div>
      <FormConatiner>
          <h1>Hmm... 🤔 Too many choices! </h1>
          <h2>Where should I eat?</h2>
          <Filter onChange={handleInputChange}>
            <label>
              Location: <input type="text" name="location" />
            </label> <br></br>
            <label>
              Category: <input type="text" name="category" />
            </label> <br></br>
            <label>
              Sort By:
              <select name="sort">
                <option value="sort by">sort by</option>
                <option value="best_match"> best match </option>
                <option value="rating"> rating </option>
                <option value="review_count"> review count </option>
                <option value="distance"> distance </option>
              </select>
            </label> <br></br>
            <label>
              Price:
              <select  name="price">
                <option value="price">price</option>
                <option value="$">$ </option>
                <option value="$$">$$ </option>
                <option value="$$$">$$$ </option>
              </select>
            </label>
          </Filter>
          <h2>Find one for me!</h2>
          <SearchButton onClick={toggleModal}>Search</SearchButton>
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
  height: 30px;
  width: 100px;
`;
