import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { label: 'Contacto', href: '#contacto' },
    { label: 'Reserva', href: '#reserva' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Noticias y Recursos', href: '#noticias' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => handleMenuClick(item.href)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocalHospitalIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                Centro de Rehabilitación Valentía
              </Typography>
            </Box>

            {isMobile ? (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleMenuClick(item.href)}
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: 'transparent',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
