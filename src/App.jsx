import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, Container, Box } from '@mui/material';

import theme from './shared/provider/theme';

import DashboardPrincipal from './pages/DashboardPrincipal/DashboardPrincipal';
import DashboardModelo from './pages/DashboardModelo/DashboardModelo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Box display="flex">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              width: '100%',
            }}
          >
            <Container maxWidth="lg" sx={{ flexGrow: 1, py: 2 }}>
              <Routes>
                <Route path="/" element={<DashboardPrincipal />} />
                <Route path="/modelo/:id" element={<DashboardModelo />} />
              </Routes>
            </Container>
            <Footer />
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
