import Card from '../Card'
import './Time.css'

const Time = (props) => {

    const cssSection = { backgroundColor: props.corSecundaria }

    const cssTitle = { borderColor: props.corPrimeira }

    return (
        props.colaboradores.length > 0 && <section className='time' style={cssSection}>
            <h3 style={cssTitle}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((item, index) => 
                
                    < Card  
                        imagem={item.imagem}
                        nome={item.nome} 
                        cargo={item.cargo} 
                        key={index} 
                        corDeFundo={props.corPrimeira}
                    />)}
            </div>
        </section>
    )
}
export default Time;