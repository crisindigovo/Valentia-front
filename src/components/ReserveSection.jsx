import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ScheduleIcon from '@mui/icons-material/Schedule';

const ReserveSection = () => {
  return (
    <Box id="reserva" sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <EventAvailableIcon sx={{ fontSize: 50, color: '#381d92', mb: 2 }} />
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
            Agenda tu Cita
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
            Estamos aquí para ayudarte. Reserva tu consulta de evaluación sin compromiso
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                textAlign: 'center',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(56, 29, 146, 0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <PhoneIcon sx={{ fontSize: 48, color: '#381d92', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#381d92' }}>
                  Por Teléfono
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Llámanos directamente y agenda tu cita
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#381d92' }}>
                  +56 9 1234 5678
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                textAlign: 'center',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(56, 29, 146, 0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <WhatsAppIcon sx={{ fontSize: 48, color: '#25D366', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#381d92' }}>
                  Por WhatsApp
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Escríbenos y agenda fácilmente
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#25D366',
                    '&:hover': {
                      bgcolor: '#1fb855',
                    },
                  }}
                >
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                textAlign: 'center',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(56, 29, 146, 0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <ScheduleIcon sx={{ fontSize: 48, color: '#381d92', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#381d92' }}>
                  Horarios
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Lunes a Viernes
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, mb: 2 }}>
                  9:00 - 20:00 hrs
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Sábados
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  10:00 - 14:00 hrs
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box
          sx={{
            textAlign: 'center',
            p: 4,
            bgcolor: '#381d92',
            borderRadius: 2,
            color: 'white',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Primera Consulta Gratuita
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
            Agenda tu primera consulta de evaluación sin costo y conoce nuestro centro
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: '#381d92',
              px: 4,
              py: 1.5,
              fontWeight: 600,
              '&:hover': {
                bgcolor: '#f5f5f5',
              },
            }}
          >
            Reserva Ahora
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ReserveSection;
