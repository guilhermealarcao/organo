import './Card.css'

const Card = ({ imagem, nome, cargo, corDeFundo }) => {

    const css = { backgroundColor: corDeFundo }

    return (
        <div className='card'>
            <div className='cabecalho' style={css}>
                <img src={imagem} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}
export default Card;