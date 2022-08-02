import Card from '../Card'
import './Time.css'

const Time = (props) =>{

    const cssSection = {backgroundColor: props.corSecundaria}

    const cssTitle = {borderColor: props.corPrimeira}

    return(
        <section className='time' style={cssSection}>
            <h3 style={cssTitle}>{props.nome}</h3>
            <Card />
        </section>
    )
}
export default Time;