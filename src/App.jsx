import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import { FaRegHeart } from 'react-icons/fa';
import Navbar from './components/navbar';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  transition: "box-shadow 0.3s, transform 0.3s",
  '&:hover': {
    boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
    transform: "scale(1.05)"
  },
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1 }} px={15}>
      <Navbar/>
      <Grid container spacing={2}>
        {/**/}
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70ad2421c4ed44d7a678afc600fe2d9c_9366/Camiseta_Train_Essentials_AEROREADY_Logo_Ajuste_Clasico_Blanco_IJ9566_01_laydown.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$88.763</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$119.950</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$83.965 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta Train Essentials AEROREADY Logo Ajuste Clásico</Typography>
              <Typography fontSize="12px" color="#D9D9D9">Niño Sportswear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="12px" color="#767677">3 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        {/**/}
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70ad2421c4ed44d7a678afc600fe2d9c_9366/Camiseta_Train_Essentials_AEROREADY_Logo_Ajuste_Clasico_Blanco_IJ9566_01_laydown.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$88.763</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$119.950</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$83.965 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta Train Essentials AEROREADY Logo Ajuste Clásico</Typography>
              <Typography fontSize="12px" color="#D9D9D9">Niño Sportswear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="12px" color="#767677">3 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70ad2421c4ed44d7a678afc600fe2d9c_9366/Camiseta_Train_Essentials_AEROREADY_Logo_Ajuste_Clasico_Blanco_IJ9566_01_laydown.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$88.763</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$119.950</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$83.965 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta Train Essentials AEROREADY Logo Ajuste Clásico</Typography>
              <Typography fontSize="12px" color="#D9D9D9">Niño Sportswear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="12px" color="#767677">3 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70ad2421c4ed44d7a678afc600fe2d9c_9366/Camiseta_Train_Essentials_AEROREADY_Logo_Ajuste_Clasico_Blanco_IJ9566_01_laydown.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$88.763</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$119.950</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$83.965 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta Train Essentials AEROREADY Logo Ajuste Clásico</Typography>
              <Typography fontSize="12px" color="#D9D9D9">Niño Sportswear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="12px" color="#767677">3 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70ad2421c4ed44d7a678afc600fe2d9c_9366/Camiseta_Train_Essentials_AEROREADY_Logo_Ajuste_Clasico_Blanco_IJ9566_01_laydown.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$88.763</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$119.950</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$83.965 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta Train Essentials AEROREADY Logo Ajuste Clásico</Typography>
              <Typography fontSize="12px" color="#D9D9D9">Niño Sportswear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="12px" color="#767677">3 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70ad2421c4ed44d7a678afc600fe2d9c_9366/Camiseta_Train_Essentials_AEROREADY_Logo_Ajuste_Clasico_Blanco_IJ9566_01_laydown.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$88.763</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$119.950</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$83.965 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta Train Essentials AEROREADY Logo Ajuste Clásico</Typography>
              <Typography fontSize="12px" color="#D9D9D9">Niño Sportswear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="12px" color="#767677">3 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70ad2421c4ed44d7a678afc600fe2d9c_9366/Camiseta_Train_Essentials_AEROREADY_Logo_Ajuste_Clasico_Blanco_IJ9566_01_laydown.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$88.763</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$119.950</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$83.965 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta Train Essentials AEROREADY Logo Ajuste Clásico</Typography>
              <Typography fontSize="12px" color="#D9D9D9">Niño Sportswear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="12px" color="#767677">3 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70ad2421c4ed44d7a678afc600fe2d9c_9366/Camiseta_Train_Essentials_AEROREADY_Logo_Ajuste_Clasico_Blanco_IJ9566_01_laydown.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$88.763</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$119.950</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$83.965 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta Train Essentials AEROREADY Logo Ajuste Clásico</Typography>
              <Typography fontSize="12px" color="#D9D9D9">Niño Sportswear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="12px" color="#767677">3 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Item>
            <Stack position="relative">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70ad2421c4ed44d7a678afc600fe2d9c_9366/Camiseta_Train_Essentials_AEROREADY_Logo_Ajuste_Clasico_Blanco_IJ9566_01_laydown.jpg" alt="" />
              <Box sx={{ position: "absolute", right: "12px", top: "12px" }}>
                <FaRegHeart size={20} color="#000000"/>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, left: "5px", background: "#fff", p: "2px 5px", display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                <Typography fontSize="14px" color="#D20000" fontWeight="300">$88.763</Typography>
                <Typography sx={{ textDecoration: "line-through" }} fontSize="14px" color="#000000" fontWeight="400">$119.950</Typography>    
              </Box>
              {/* Cuadro adicional para el precio para miembros */}
              <Box sx={{ position: "absolute", bottom: "-25px", left: "5px", background: "#fff", p: "2px 5px", width: "95%" }}>
                <Typography fontSize="14px" color="#64A3CD" fontWeight="300">$83.965 para miembros</Typography>
              </Box>
            </Stack>
            <Stack padding="30px">
              <Typography fontSize="17px" color="#000000" fontWeight="400">Camiseta Train Essentials AEROREADY Logo Ajuste Clásico</Typography>
              <Typography fontSize="12px" color="#D9D9D9">Niño Sportswear</Typography>
              <Box display="flex" flexDirection="row" gap={1}>
                <Typography fontSize="12px" color="#767677">3 colores</Typography> 
              </Box>              
            </Stack>
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}

export default App;
