import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
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
