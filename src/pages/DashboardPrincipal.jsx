import { Link } from 'react-router-dom';



 export default function DashboardPrincipal() {
    const modelos = [
    { id: 'corolla', nome: 'Corolla' },
    { id: 'hilux', nome: 'Hilux' }
  ];

  return (
    <div>
      <h1>Modelos</h1>
      <ul>
        {modelos.map((m) => (
          <li key={m.id}>
            <Link to={`/modelo/${m.id}`}>{m.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
  }

