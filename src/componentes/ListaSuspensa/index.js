import './ListSuspensa.css';

const ListSuspensa = ({label , itens}) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select>
                {itens.map((item , index)=>{
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}
export default ListSuspensa;