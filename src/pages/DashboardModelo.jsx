import { useParams } from 'react-router-dom';
import { carData } from '../data/carData';
import { Box, Typography, CircularProgress } from '@mui/material';

const DashboardModelo = () => {
  const { id } = useParams();
  const modelo = carData
    .flatMap((m) => m.modelos)
    .find((m) => m.id === id);

  if (!modelo) return <Typography>Modelo não encontrado</Typography>;

  return (
    <Box p={3}>
      <Typography variant="h4">{modelo.nome}</Typography>

      <Box mt={2}>
        <Typography>Potência</Typography>
        <CircularProgress variant="determinate" value={modelo.potencia} />
        <Typography>{modelo.potencia}%</Typography>
      </Box>

      <Box mt={2}>
        <Typography>Torque</Typography>
        <CircularProgress variant="determinate" value={modelo.torque} />
        <Typography>{modelo.torque}%</Typography>
      </Box>

      <Box mt={2}>
        <Typography>Eficiência</Typography>
        <CircularProgress variant="determinate" value={modelo.eficiencia} />
        <Typography>{modelo.eficiencia}%</Typography>
      </Box>

      <Box mt={2}>
        <Typography>Segurança</Typography>
        <CircularProgress variant="determinate" value={modelo.segurança} />
        <Typography>{modelo.segurança}%</Typography>
      </Box>

      <Box mt={2}>
        <Typography>Sustentabilidade</Typography>
        <CircularProgress variant="determinate" value={modelo.sustentabilidade} />
        <Typography>{modelo.sustentabilidade}%</Typography>
      </Box>

      <Box mt={2}>
        <Typography>Tecnologia</Typography>
        <CircularProgress variant="determinate" value={modelo.tecnologia} />
        <Typography>{modelo.tecnologia}%</Typography>
      </Box>

      <Box mt={2}>
        <Typography>Espaço Interno</Typography>
        <CircularProgress variant="determinate" value={modelo.espaçoInterno} />
        <Typography>{modelo.espaçoInterno}%</Typography>
      </Box>

      <Box mt={2}>
        <Typography>Consumo</Typography>
        <CircularProgress variant="determinate" value={modelo.consumo} />
        <Typography>{modelo.consumo}%</Typography>
      </Box>
    </Box>
  );
};

export default DashboardModelo;