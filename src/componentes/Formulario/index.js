import CampoTexto from "../CampoTexto";
import ListSuspensa from "../ListaSuspensa";
import './Formulario.css';


const Formulario = () => {
    var list =[
        "Front-end",
        "Back-end",
        "Data sciencie"
    ]


    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador  no orgrana</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite a url da imagem" />
                <ListSuspensa label="Cargo" itens={list} />
            </form >
        </section >
    )
}
export default Formulario;