import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import './update.css'

export default function AlertaUpdate (){
    let history = useHistory();
    const [_id,setID] = useState(null);
    const [tipo, setTipo] = useState(null);
    const [descripcion, setDescripcion] = useState(null);

    useEffect(()=>{
        setID(localStorage.getItem('ID'));
        setTipo(localStorage.getItem('tipo'));
        setDescripcion(localStorage.getItem('descripcion'));
    },[])

    const updateAPIData = () => {
        console.log(_id);
        axios.put(`http://localhost:6996/api/alerta/update/${_id}`, {
            tipo, descripcion
        }).then(() => {
            history.push('/alertaMeteorologica')
        }).catch(()=>{
            
        });
    }

    return(
        <div>
            <div class="form-container">
                <form class="form">
                    <div class="form-group">
                    <label for="email">Tipo</label>
                    <input 
                        type="text"
                        id="email" 
                        name="email" 
                        required="" 
                        placeholder='Ingrese el tipo de Alerta'
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    />
                    </div>
                    <div class="form-group">
                    <label for="textarea">Descripción</label>
                    <textarea 
                        name="textarea" 
                        id="textarea" 
                        rows="10" 
                        cols="50" 
                        required="" 
                        placeholder='Ingrese la Descripción'
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    ></textarea>
                    </div>
                    <button class="form-submit-btn" type="submit" onClick={(e)=>{e.preventDefault();updateAPIData()}}>Enviar</button>
                </form>
            </div>
        </div>
    )
}