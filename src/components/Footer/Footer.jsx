import { Box, Typography, Link } from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <Box component="footer" className="app-footer">
      <Typography variant="body2" color="text.secondary">
        Criado por{' '}
        <Link
          href="https://github.com/Vegildo"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          Leonardo Braga
        </Link>{' '}
        ©
      </Typography>
    </Box>
  );
};

export default Footer;
