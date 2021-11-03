import React, {Fragment , useState, useEffect} from "react";

import Footer from '../Home/Footer'
import Header from "./Header";

import axios from 'axios'
import { Divider } from 'antd';

import ThumbnailGallery from "./Gallery/ThumbnailGallery";
import DatePickerContainer from './Date/DatePickerContainer';
import 'react-dates/lib/css/_datepicker.css';
import { Container } from "react-bootstrap";

import styled from "styled-components";



const Salon = (props) => {

  const [salon, setSalon] = useState([])
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/salons/${slug}`

    axios.get(url)
      .then( res => {
        setSalon(res.data)
        setLoaded(true)
      })
      .catch(res => console.log(res))
  }, [])


  return (
    <>
      {
        loaded &&
        <Fragment>
            <Container>
            <ThumbnailGallery 
            // attributes={salon.data.attributes}
            />
            <Header
              attributes={salon.data.attributes}
            />
            <DatePickerContainer />
            <Divider /> 
            </Container>
            <Footer />
          </Fragment>
      }
    </>
  )
}

export default Salon