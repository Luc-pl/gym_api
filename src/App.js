import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Anek Latin',
      'sans-serif'
    ].join(','),
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} /> 
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App