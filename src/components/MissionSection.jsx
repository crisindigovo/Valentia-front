import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const MissionSection = () => {
  const pillars = [
    {
      icon: <FavoriteBorderIcon sx={{ fontSize: 48, color: '#381d92' }} />,
      title: 'Atención Personalizada',
      description: 'Creamos planes de rehabilitación únicos para cada persona, adaptados a sus necesidades específicas y objetivos individuales.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 48, color: '#381d92' }} />,
      title: 'Equipo Multidisciplinario',
      description: 'Contamos con especialistas en diversas áreas trabajando de forma coordinada para tu recuperación integral.',
    },
    {
      icon: <HomeIcon sx={{ fontSize: 48, color: '#381d92' }} />,
      title: 'Ambiente Acogedor',
      description: 'Ofrecemos un espacio cómodo y cálido donde te sentirás seguro y apoyado durante todo tu proceso.',
    },
  ];

  return (
    <Box id="sobre" sx={{ py: 10, bgcolor: '#F2F2FA' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <TrendingUpIcon sx={{ fontSize: 50, color: '#381d92' }} />
          </Box>
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
            Avanzamos juntos hacia tu bienestar integral
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
            Nuestra misión es guiarte hacia una recuperación plena, basada en valores de empatía, respeto y compromiso
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {pillars.map((pillar, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(56, 29, 146, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4, textAlign: 'center' }}>
                  <Box sx={{ mb: 3 }}>{pillar.icon}</Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: '#381d92',
                    }}
                  >
                    {pillar.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {pillar.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 8,
            p: 4,
            bgcolor: 'white',
            borderRadius: 2,
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: '#381d92',
            }}
          >
            Apoyo Continuo 24/7
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Estamos comprometidos con tu bienestar las 24 horas del día, los 7 días de la semana.
            Nuestro equipo está siempre disponible para brindarte el apoyo que necesitas en cada momento.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MissionSection;
