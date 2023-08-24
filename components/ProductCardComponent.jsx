import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #7b8055',
  boxShadow: 24,
  p: 4,
};


export default function ProductCardComponent({ product, addToCart, removeToCart }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography size="small">${product.price}</Typography>
        <StyledButton onClick={handleOpen}>Comprar</StyledButton>
        <StyledButton onClick={()=>addToCart(product)}>Adicionar</StyledButton>
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            >
            <Box sx={style}>
              <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                Parabéns!
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                Compra realizada com sucesso!
              </Typography>
            </Box>
          </Modal>
      </CardActions>
    </Card>
  );
}

const StyledButton = styled(Button)`
  margin-left: 45px;
  font-family: 'Roboto', sans-serif;
  background: #6740ea;
  color:#ffff;
  border-radius:100px;
  &:hover{
    color:#ffff;
    background:#5E35B1;
    transform: translateY(-3px);
  } 
`;