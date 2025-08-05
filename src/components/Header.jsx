import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
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
            className="lavishly" 
            sx={{ flexGrow: 1, fontFamily: '"Lavishly Yours", cursive', fontSize: '30px' }}
          >
            Dashboard de Carros
          </Typography>
        </Link>

        
        <IconButton 
          color="inherit"
          style={{
            display: 'flex', 
            justifyContent: 'flex-end', 
            padding: '20px'
          }}
        >
          <AcUnitIcon />
        </IconButton>

        <IconButton 
          color="inherit"
          style={{
            display: 'flex', 
            justifyContent: 'flex-end', 
            padding: '20px'
          }}  
        >          
          <NotificationsIcon />
        </IconButton>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
