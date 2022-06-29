import React, { useState} from 'react';
import { Box } from '@mui/material';

import Hero from '../components/Hero';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  return (
    <Box>
      <Hero />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home