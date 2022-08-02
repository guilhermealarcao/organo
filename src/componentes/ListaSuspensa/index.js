import './ListSuspensa.css';

const ListSuspensa = ({ label, itens, obrigatorio, aoAlterado }) => {

    const aoDigitar = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div onChange={aoDigitar} className='lista-suspensa'>
            <label>{label}</label>
            <select  onChange={aoDigitar}  required={obrigatorio}>
                <option disabled>selecione</option>
                {itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}
export default ListSuspensa;