import './ListSuspensa.css';

const ListSuspensa = ({label , itens, obrigatorio }) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select required={obrigatorio}>
                {itens.map((item , index)=>{
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}
export default ListSuspensa;