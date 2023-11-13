import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, InputLabel, MenuItem, Modal, Select, Typography } from "@mui/material";
import { dataProductos } from '../Data/dataProductos';
import {NumericFormat} from 'react-number-format';
import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import FormControl from '@mui/material/FormControl';


const Productos = () =>{
  const cats = [...new Set(dataProductos.map(c => c.Categoia))];
  const [categoria, setSategoria] = React.useState('');
  const handleChangeSelect = (event) => {
    setSategoria(event.target.value);
  };


  const [producto, setProducto] = React.useState(dataProductos[0]);
  
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  
  const [index, setIndex] = React.useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Grid container spacing={3} style={{padding: '1rem'}} >
        <Grid item xs={12} sm={12} md={12} lg={12} key="0">
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="lbl-cat-prod">Categoria</InputLabel>
            <Select labelId="lbl-cat-prod"
              id="sel-cat-prod"
              value={categoria}
              label="Categoria"
              onChange={handleChangeSelect}
              >
              {cats.map((cat, index) =>{
                return(
                  <MenuItem key={index} value={cat}>{cat}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        {dataProductos.map((producto, index) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={3} key={index}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={producto.imagen}
                  title={producto.nombre}
                  onClick={() => {setProducto(producto); handleOpenModal(); }}
                  key={index}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {producto.nombre} - <NumericFormat value={producto.precio} decimalScale={2} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {producto.descripcion}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => {window.open('https://wa.me/3333273809?text=Hola me interesa el producto ' + producto.nombre, 'blank') }}><WhatsAppIcon/> &nbsp; 33 3327 3809</Button>
                  <Button size="small" onClick={() => {window.open('https://wa.me/3322546612?text=Hola me interesa el producto ' + producto.nombre, 'blank') }}><WhatsAppIcon/> &nbsp; 33 2254 6612</Button>
                </CardActions>
              </Card>
            </Grid>          
          );
        })}
      </Grid>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute', 
          top: '50%', left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: window.innerWidth >= 1000 ? '50%' : window.innerWidth < 1000 ? '80%' : '', 
          bgcolor: 'background.paper', 
          border: '2px solid #000', 
          boxShadow: 24, borderRadius: 2}}
        >
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {producto.imagenes.map((imagen, index) => {
              return (
                <CarouselItem key={index}>
                  <img alt={producto.codigo} src={imagen.imagen} width="100%"/>
                  <Carousel.Caption>
                    <h3>{producto.nombre} - <NumericFormat value={producto.precio} decimalScale={2} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h3>
                    <p>{producto.descripcion}</p>
                  </Carousel.Caption>
                </CarouselItem>
              );
            })}
          </Carousel>     
        </Box>
      </Modal>
    </div>
  );
}

export default Productos;