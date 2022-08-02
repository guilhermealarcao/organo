import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = ({ valor, label, placeholder, obrigatorio, aoAlterado }) => {

    const aoDigitar = (evento) => {
        console.log(evento.target.value)
        aoAlterado(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{label}</label>
            <input value={valor} onChange={aoDigitar} required={obrigatorio} placeholder={placeholder} />
        </div>
    )
}
export default CampoTexto;