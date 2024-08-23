/// import React from 'react'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/dataSlice/dataSlice';
import FirstSection from '../companents/firstSection';
import Header from '../layout/Header';
import Section2 from '../companents/Section2';
import Section3 from '../companents/Section3';
import Section4 from '../companents/Section4';
import Footer from '../layout/Footer';
const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);
  return (
    <div>
        <Header/>
        <FirstSection/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Footer/>

    </div>
  )
}

export default HomePage

