import React from 'react';
import ArticleList from './Hero'
import Features from './Features'
import UpcomingEvents from './TrainNews'
import { Heading } from '@chakra-ui/layout';
const Homepage = () => {
  return (
    <>
    
    <ArticleList/>
    
  <Features />
  <UpcomingEvents/>
  </>
  
  );
};

export default Homepage;
