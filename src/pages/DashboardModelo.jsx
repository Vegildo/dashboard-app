import { useParams } from 'react-router-dom';

const DashboardModelo = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Dashboard do modelo: {id}</h1>
    </div>
  );
};

export default DashboardModelo;

