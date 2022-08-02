import CampoTexto from "../CampoTexto";
import ListSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import './Formulario.css';
import { useState } from "react";


const Formulario = (props) => {
    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('https://github.com/viniciosneves.png');
    const [time, setTime] = useState('');
    
    const aoSalvar = (event) => {
        event.preventDefault();

        props.aoSubmit(
          {
            nome,
            cargo,
            imagem,
            time
          }
        )
    }


    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador  no orgrana</h2>
                <CampoTexto 
                    valor={nome} 
                    obrigatorio="true" 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    aoAlterado={valor=>setNome(valor)}
                    />
                <CampoTexto 
                    valor={cargo} 
                    obrigatorio="true"
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    aoAlterado={valor=>setCargo(valor)}
                 />
                <CampoTexto 
                    valor={imagem}
                    label="Imagem" 
                    placeholder="Digite a url da imagem"
                    aoAlterado={valor=>setImagem(valor)}
                 />
                <ListSuspensa 
                    valor={time} 
                    obrigatorio="true" 
                    label="Cargo" 
                    itens={props.times} 
                    aoAlterado={valor=>setTime(valor)}
                    />
                <Botao>Criar Card</Botao>
            </form >
        </section >
    )
}
export default Formulario;