import CampoTexto from "../CampoTexto";
import ListSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import './Formulario.css';


const Formulario = () => {
    var list =[
        "Front-end",
        "Back-end",
        "Data sciencie"
    ]

    const aoSalvar = (event)=>{
        event.preventdefault();
    }


    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador  no orgrana</h2>
                <CampoTexto obrigatorio="true" label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio="true" label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite a url da imagem" />
                <ListSuspensa obrigatorio="true" label="Cargo" itens={list} />
                <Botao>Criar Card</Botao>
            </form >
        </section >
    )
}
export default Formulario;