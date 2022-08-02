import './ListSuspensa.css';

const ListSuspensa = ({ label, itens, obrigatorio, aoAlterado }) => {

    // const [valor, setValor] = useState(value);

    const aoDigitar = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div onChange={aoDigitar} className='lista-suspensa'>
            <label>{label}</label>
            <select required={obrigatorio}>
                {itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}
export default ListSuspensa;