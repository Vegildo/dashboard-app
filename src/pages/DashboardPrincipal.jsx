import { useState } from 'react';
import { carData } from '../data/carData';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const DashboardPrincipal = () => {
  const [marcaSelecionada, setMarcaSelecionada] = useState(null);

  return (
    <Box p={2}>
      <Typography variant="h5">Selecione uma marca:</Typography>
      {carData.map((marca) => (
        <button key={marca.id} onClick={() => setMarcaSelecionada(marca)}>
          {marca.nome}
        </button>
      ))}

      {marcaSelecionada && (
        <>
          <Typography variant="h6" mt={3}>Modelos da {marcaSelecionada.nome}</Typography>
          <Grid container spacing={2}>
            {marcaSelecionada.modelos.map((modelo) => (
              <Grid item xs={12} sm={6} md={4} key={modelo.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{modelo.nome}</Typography>
                    <Link to={`/modelo/${modelo.id}`}>Ver detalhes</Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default DashboardPrincipal;