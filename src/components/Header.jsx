import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, fontFamily: '"Lavishly Yours", cursive', fontSize: '30px' }}
          >
            Dashboard de Carros
          </Typography>
        </Link>

        
        
          <Box sx={{ marginLeft: 'auto' }}>
            <IconButton color="inherit" sx={{ mr: 1 }}>
              <AcUnitIcon />
            </IconButton>
            <IconButton color="inherit" >
              <NotificationsIcon />
            </IconButton>
          </Box>        
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
