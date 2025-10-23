import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const NewsSection = () => {
  const news = [
    {
      icon: <HealthAndSafetyIcon sx={{ fontSize: 48, color: '#381d92' }} />,
      category: 'Salud Mental',
      title: 'La importancia del apoyo familiar en la recuperación',
      date: '15 Ene 2025',
      excerpt: 'Descubre cómo el apoyo de la familia es fundamental en el proceso de rehabilitación y recuperación integral.',
    },
    {
      icon: <TipsAndUpdatesIcon sx={{ fontSize: 48, color: '#381d92' }} />,
      category: 'Recursos',
      title: 'Técnicas de mindfulness para el manejo del estrés',
      date: '10 Ene 2025',
      excerpt: 'Aprende técnicas efectivas de atención plena que pueden ayudarte en tu proceso de recuperación diaria.',
    },
    {
      icon: <LocalLibraryIcon sx={{ fontSize: 48, color: '#381d92' }} />,
      category: 'Educación',
      title: 'Entendiendo el proceso de rehabilitación',
      date: '5 Ene 2025',
      excerpt: 'Una guía completa sobre las diferentes etapas del proceso de rehabilitación y qué esperar en cada una.',
    },
  ];

  return (
    <Box id="noticias" sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <ArticleIcon sx={{ fontSize: 50, color: '#381d92', mb: 2 }} />
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: '#381d92',
              fontSize: { xs: '2rem', md: '2.75rem' },
              letterSpacing: '-0.02em',
            }}
          >
            Noticias y Recursos
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
            Mantente informado con nuestras últimas publicaciones y recursos educativos
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {news.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(56, 29, 146, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Box sx={{ mb: 3 }}>{item.icon}</Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{
                        bgcolor: '#F2F2FA',
                        color: '#381d92',
                        fontWeight: 600,
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTimeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary">
                        {item.date}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: '#381d92',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.excerpt}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsSection;
