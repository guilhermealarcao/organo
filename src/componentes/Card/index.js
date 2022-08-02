import './Card.css'

const Card =(props)=>{
    return(
        <div className='card'>
            <div className='cabecalho'>
                <img src="https://github.com/viniciosneves.png"/>
            </div>
            <div className='rodape'>
                <h4>Guilherme</h4>
                <h5>Instrutor</h5>
            </div>
        </div>
    )
}
export default Card;