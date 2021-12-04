import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useState } from "react";
import Modal from './Modal.jsx';

const Form = () => {
  const [modal, setModal] = useState(false);

  const toggleMoal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <FormConatiner>
          <h1>Hmm... 🤔 Where should I eat?</h1>
          <Filter>
            <label>
              Location: <input type="text" name="location" />
            </label> <br></br>
            <label>

              Category: <input type="text" name="category" />{" "}
            </label> <br></br>
            <label>
              Ratings:
              <select>
                <option value="ratings">ratings</option>
                <option value="5">5 </option>
                <option value="4">4 + </option>
                <option value="3">3 +</option>
                <option value="2">2 +</option>
              </select>
            </label> <br></br>
            <label>
              Price:
              <select>
                <option value="price">price</option>
                <option value="$">$ </option>
                <option value="$$">$$ </option>
                <option value="$$$">$$$ </option>
              </select>
            </label>
          </Filter>
          <h2>Let's find good place for you!</h2>
          <SearchButton onClick={() => setModal(!modal)}>Search</SearchButton>
        </FormConatiner>
        {modal ? <Modal toggleMoal={toggleMoal} /> : ""}
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
