import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  const menuItems = [
    { label: "Contacto", href: "#contacto" },
    { label: "Reserva", href: "#reserva" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre", href: "#sobre" },
    { label: "Noticias y Recursos", href: "#noticias" },
  ];

  const handleMenuClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#381d92",
        color: "white",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <LocalHospitalIcon sx={{ fontSize: 40 }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Centro de Rehabilitación Valentía
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Tratamiento profesional para adicciones en Santiago. Atención
              personalizada, terapias integrales y apoyo 24/7
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Enlaces
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  component="button"
                  onClick={() => handleMenuClick(item.href)}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    opacity: 0.9,
                    textAlign: "left",
                    "&:hover": {
                      opacity: 1,
                      textDecoration: "underline",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Síguenos
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.2)",
                  },
                }}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/p/Centro-de-rehabilitaci%C3%B3n-valentia-61576555484633/",
                    "_blank"
                  )
                }
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.2)",
                  },
                }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/centroderehabilitacionvalentia/",
                    "_blank"
                  )
                }
              >
                <InstagramIcon />
              </IconButton>
              {/* <IconButton
                sx={{
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.2)",
                  },
                }}
              >
                <XIcon />
              </IconButton> */}
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Centro de Rehabilitación Valentía.
            Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
