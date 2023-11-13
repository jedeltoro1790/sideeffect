import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Box, Fade, Grid, Slide, Typography, Zoom } from '@mui/material';
import { useEffect, useState } from 'react';

function FooterApp() {
  const[scrollPosition, setScrollPosition] = useState(0);
  let limitScroll = (Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight) * .95;

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <Fade in={scrollPosition >= limitScroll} timeout={500}>
      <footer style={{ marginTop: '10rem', backgroundColor:'black', color:'white', padding:'1rem'}} className="border-top">
        <Grid container spacing={1}>
          <Zoom in={scrollPosition >= limitScroll} timeout={1000}>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Typography
                variant="h6"
                noWrap
                component="label">Siguenos en nuestras redes sociales:
              </Typography> <br/>
              <FacebookIcon style={{ fontSize: '4rem' }} onClick={() => { window.open('https://www.facebook.com/profile.php?id=100055675013664&ref=xav_ig_profile_web', 'blank') }} /> &nbsp;
              <InstagramIcon style={{ fontSize: '4rem' }} onClick={() => { window.open('https://www.instagram.com/the.sideeffect_/?hl=es', 'blank') }} />
            </Grid>
          </Zoom>

          <Zoom in={scrollPosition >= limitScroll} style={{ transitionDelay: scrollPosition >= limitScroll ? '500ms' : '0ms' }} timeout={1000}>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Typography
                variant="h6"
                noWrap
                component="label">
                Nuestros teléfonos:
              </Typography>
              <br/>
              <Typography
                variant="h6"
                noWrap
                component="button"
                display="flex" alignItems="center" backgroundColor="inherit" color="inherit" border="none"
                onClick={() => {window.open('https://wa.me/3322546612', 'blank') }}> 
                <WhatsAppIcon/> &nbsp; 33 2254 6612
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="button"
                display="flex" alignItems="center" backgroundColor="inherit" color="inherit" border="none"
                onClick={() => {window.open('https://wa.me/3333273809', 'blank') }}> 
                <WhatsAppIcon/> &nbsp; 33 3327 3809
              </Typography>
            </Grid>
          </Zoom>

          <Zoom in={scrollPosition >= limitScroll} style={{ transitionDelay: scrollPosition >= limitScroll ? '1000ms' : '0ms' }} timeout={1000}>
            <Grid item xs={12} sm={12} md={12} lg={4} display="flex" justifyContent="right" alignItems="end"> 
              <Box width="100%">
                <iframe title="Domicilio"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791.786967667656!2d-103.47632152345804!3d20.778766572583276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428a642180456cf%3A0xaf1cd6f9047e164d!2sFuente%20Grafito%208929%2C%20Villa%20Fontana%2C%2045200%20Tesist%C3%A1n%2C%20Jal.!5e0!3m2!1ses!2smx!4v1698079570333!5m2!1ses!2smx" 
                  width="100%" 
                  style={{border: 0}}
                  loading="lazy">
                </iframe>
              </Box>
            </Grid>
          </Zoom>

          <Slide direction="up" in={scrollPosition >= limitScroll} mountOnEnter unmountOnExit timeout={1000}>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="end" style={{marginTop: '2rem'}}>
              Copyright&nbsp;<CopyrightIcon />&nbsp;The Side Effect Clothing 2023
            </Grid>
          </Slide>
        </Grid>
    </footer>
  </Fade>
  );
}

export default FooterApp;
