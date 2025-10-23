import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import SportsIcon from '@mui/icons-material/Sports';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpaIcon from '@mui/icons-material/Spa';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServicesSection = () => {
  const services = [
    {
      icon: <SportsIcon sx={{ fontSize: 60, color: 'white' }} />,
      title: 'Deportes',
      description: 'Rehabilitación deportiva especializada para recuperación de lesiones y mejora del rendimiento físico.',
      color: '#2196F3',
    },
    {
      icon: <AccessibilityNewIcon sx={{ fontSize: 60, color: 'white' }} />,
      title: 'Rehabilitación Ocupacional',
      description: 'Terapia ocupacional para recuperar y mejorar las habilidades necesarias en tu vida diaria y laboral.',
      color: '#4CAF50',
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 60, color: 'white' }} />,
      title: 'Terapia Psicológica',
      description: 'Apoyo psicológico integral para el manejo de adicciones, ansiedad, depresión y otros desafíos emocionales.',
      color: '#FF9800',
    },
    {
      icon: <SpaIcon sx={{ fontSize: 60, color: 'white' }} />,
      title: 'Terapias Complementarias',
      description: 'Terapias alternativas y complementarias para fortalecer tu proceso de recuperación integral.',
      color: '#9C27B0',
    },
  ];

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box id="servicios" sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: '#381d92',
              fontWeight: 600,
              fontSize: '1rem',
              letterSpacing: 2,
            }}
          >
            NUESTROS SERVICIOS
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              mt: 2,
              color: '#381d92',
              fontSize: { xs: '2rem', md: '2.75rem' },
              letterSpacing: '-0.02em',
            }}
          >
            Tratamientos Especializados
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              color: 'text.secondary',
              fontWeight: 400,
              lineHeight: 1.7,
            }}
          >
            Ofrecemos una amplia gama de servicios diseñados para tu recuperación completa
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
                    '& .service-icon-box': {
                      transform: 'scale(1.1) rotate(5deg)',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    bgcolor: service.color,
                    p: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 160,
                  }}
                >
                  <Box
                    className="service-icon-box"
                    sx={{
                      transition: 'transform 0.3s',
                    }}
                  >
                    {service.icon}
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: '#381d92',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => handleScroll('#contacto')}
            sx={{
              bgcolor: '#381d92',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              '&:hover': {
                bgcolor: '#2a1570',
              },
            }}
          >
            Conoce más sobre nuestros servicios
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
