import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Alert,
  Snackbar,
  Grid,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Limpiar error del campo cuando el usuario escribe
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validar nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (formData.nombre.length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    // Validar teléfono (opcional pero si se llena debe ser válido)
    if (formData.telefono && !/^\d{9,15}$/.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'El teléfono debe tener entre 9 y 15 dígitos';
    }

    // Validar asunto
    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es requerido';
    }

    // Validar mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Datos del formulario:', formData);

      setSnackbarMessage('¡Mensaje enviado exitosamente!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      // Limpiar formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: '',
      });
    } else {
      setSnackbarMessage('Por favor, corrige los errores en el formulario');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
    <Box id="contacto" sx={{ py: 10, bgcolor: '#F2F2FA' }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <EmailIcon sx={{ fontSize: 48, color: '#381d92', mb: 2 }} />
            <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#381d92', fontWeight: 700 }}>
              Contáctanos
            </Typography>
            <Typography variant="body1" color="text.secondary">
              ¿En qué podemos ayudarte? Completa el formulario y nos pondremos en contacto contigo
            </Typography>
          </Box>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                error={!!errors.nombre}
                helperText={errors.nombre}
                required
                InputProps={{
                  startAdornment: <PersonIcon sx={{ mr: 1, color: 'action.active' }} />,
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
                InputProps={{
                  startAdornment: <EmailIcon sx={{ mr: 1, color: 'action.active' }} />,
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Teléfono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                error={!!errors.telefono}
                helperText={errors.telefono || 'Opcional'}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                error={!!errors.asunto}
                helperText={errors.asunto}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                error={!!errors.mensaje}
                helperText={errors.mensaje}
                required
                multiline
                rows={6}
                InputProps={{
                  startAdornment: <MessageIcon sx={{ mr: 1, color: 'action.active', alignSelf: 'flex-start', mt: 2 }} />,
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                endIcon={<SendIcon />}
                sx={{
                  py: 1.5,
                  bgcolor: '#381d92',
                  '&:hover': {
                    bgcolor: '#2a1570',
                  },
                }}
              >
                Enviar Mensaje
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  </Box>
    </>
  );
};

export default ContactForm;
