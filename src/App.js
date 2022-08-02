import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: "Programação",
      corPrimeira: "#57c278",
      corSecundaria: "#d9f7e9"
    },
    {
      nome: "Front-End",
      corPrimeira: "#82cffa",
      corSecundaria: "#e8f8ff"
    },
    {
      nome: "Data Science",
      corPrimeira: "#A6d157",
      corSecundaria: "#f0f8e2"
    },
    {
      nome: "Devops",
      corPrimeira: "#06b69",
      corSecundaria: "#fde7f8"
    },
    {
      nome: "UX e Design",
      corPrimeira: "#DB6EBF",
      corSecundaria: "#fae9f5"
    },
    {
      nome: "Mobile",
      corPrimeira: "#FFBA05",
      corSecundaria: "#fff5d9"
    },
    {
      nome: "Inovação e Gestão",
      corPrimeira: "#ff8A29",
      corSecundaria: "#ffeedf"
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario  times={times.map(item=>item.nome)} aoSubmit={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map((item) => <Time key={item.nome} nome={item.nome} corPrimeira={item.corPrimeira} corSecundaria={item.corSecundaria} />)}
    </div>
  );
}

export default App;