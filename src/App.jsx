import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import ServicesSection from './components/ServicesSection';
import ReserveSection from './components/ReserveSection';
import NewsSection from './components/NewsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#381d92',
    },
    secondary: {
      main: '#5b3cc4',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <HeroSection />
        <MissionSection />
        <ServicesSection />
        <ReserveSection />
        <NewsSection />
        <ContactForm />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
