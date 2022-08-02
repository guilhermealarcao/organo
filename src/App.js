import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]


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
      {times.map(item=><Time nome={item} />)}
    </div>
  );
}

export default App;