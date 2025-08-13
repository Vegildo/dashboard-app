import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <AppBar position="static" className="app-header">
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
            className="app-header-title"
          >
            Dashboard de Carros
          </Typography>
        </Link>

        
        
          <Box className="app-header-icons" sx={{ marginLeft: 'auto' }}>
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
