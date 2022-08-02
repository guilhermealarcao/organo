import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([]);


  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    console.log(colaboradores)
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores.length)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoSubmit={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    </div>
  );
}

export default App;