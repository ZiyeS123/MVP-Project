import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useState } from 'react';
import Modal from './Modal.jsx';

const App = () => {
  const [modal, setModal] = useState(false);

  const toggleMoal = () => {
    setModal(!modal)
  }

  //console.log(modal);
  return(
    <div>
    <Title>
      <h1>Hmm... 🤔 Where should I eat?</h1>
    </Title>
    <FormConatiner>
      <Form>
        <label> Location: <input type="text" name="location"/> </label>
        <label> Category: <input type="text" name="category"/> </label>
        <label> Ratings:
        <select>
          <option value="ratings">ratings</option>
          <option value="5">5 </option>
          <option value="4">4 + </option>
          <option value="3">3 +</option>
          <option value="2">2 +</option>
      </select>
      </label>
      <label> Price:
        <select>
          <option value="price">price</option>
          <option value="$">$ </option>
          <option value="$$">$$  </option>
          <option value="$$$">$$$ </option>
      </select>
      </label>
      </Form>
      <h2>Let's find good place for you!</h2>
      <SearchButton onClick={ () => setModal(!modal)}>Search</SearchButton>
    </FormConatiner>

    {modal ? <Modal toggleMoal={toggleMoal}/> : ''}

    </div>

  )
}

export default App;

const Title = styled.div`
  padding-top: 50px;
  width: 100%;
  height: 200px;
  background-color: white;
  display: flex;
  justify-content: center;`

const FormConatiner = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
  border: solid;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const SearchButton = styled.button`
  height: 30px;
  width: 100px;
`

