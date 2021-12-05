
import React from 'react';
import styled from 'styled-components';

const Stars = ({rating}) => {
  const percentage = rating / 5 * 100;

  const containerStyle = {
    'position': 'relative'
  }

  const starStyle = {
    'position': 'absolute',
    'fontSize': 'large',
    'backgroundImage': `-webkit-linear-gradient(0deg, #e17140 ${percentage}%, transparent ${percentage}% 100%)`,
    'WebkitBackgroundClip': 'text',
    'WebkitTextFillColor': 'transparent'
  }

  const emptyStarStyle = {
    'zIndex': '-1',
    'color': '#e17140',
    'position': 'absolute',
    'fontSize': 'large'
  }

  return (
    <Container>
    <span style={containerStyle}>
      <span style={starStyle}>★★★★★</span>
      <span style={emptyStarStyle}>☆☆☆☆☆</span>
    </span>
    </Container>
  )
}

const Container = styled.div`
  height: 30px;
  width: 300px;
  //border: solid;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`



export default Stars;