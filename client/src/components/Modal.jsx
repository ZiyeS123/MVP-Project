import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useState } from 'react';

const Modal = (props) => {
  //console.log(props);
  return (
    <div>
      <Background>
        <ModalWrapper>
          <CloseButton>
            <button onClick={() => { props.toggleMoal()}}>X</button>
          </CloseButton>
          <ImageContainer>

          </ImageContainer>

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
  flex-direction: column;
  padding: 25px;
  z-index: 9999
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 400px;
  border: solid;
`
