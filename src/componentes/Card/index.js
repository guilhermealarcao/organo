import './Card.css'

const Card = ({ imagem, nome, cargo }) => {
    console.log(imagem)
    return (
        <div className='card'>
            <div className='cabecalho'>
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