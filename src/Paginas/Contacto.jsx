import { Box, Grid } from "@mui/material";

const Contacto = () =>{
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={3} style={{padding:'2rem'}} display="flex" justifyContent="left" alignItems="end">
        1
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3} style={{padding:'2rem'}} display="flex" justifyContent="left" alignItems="end">
        2
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3} style={{padding:'2rem'}} display="flex" justifyContent="left" alignItems="end">
        3
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3} display="flex" justifyContent="right" alignItems="end">
        <Box>
          <iframe title="Domicilio"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791.786967667656!2d-103.47632152345804!3d20.778766572583276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428a642180456cf%3A0xaf1cd6f9047e164d!2sFuente%20Grafito%208929%2C%20Villa%20Fontana%2C%2045200%20Tesist%C3%A1n%2C%20Jal.!5e0!3m2!1ses!2smx!4v1698079570333!5m2!1ses!2smx" 
            width="100%" 
            height="300" 
            style={{border: 0}}
            loading="lazy">
          </iframe>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contacto;