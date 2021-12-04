import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Modal from './Modal.jsx';
const axios = require('axios');

const RestaurantList = (props) => {

  const [businessInfo, setBusinessInfo] = useState([])
  const { location, category, price, sort } = props.inputs;
  //console.log(businessInfo);

  useEffect(() => { searchBusiness() }, [])

  const searchBusiness = () => {
    const pricelength = price.length;
    axios
      .get(`/restaurants?term=${category}&location=${location}&price=${pricelength}&sort_by=${sort}`)
      .then((results) => {
        setBusinessInfo(results.data.businesses);
        // res.send(results)
      })
      .catch((err) => {
        console.log('ERROR IN searchBusiness: ', err)
      })
  }

  return (
    <div>
      {businessInfo.length && <Modal toggleModal={props.toggleModal} info={businessInfo}/>}
    </div>
  )

}

export default RestaurantList;
