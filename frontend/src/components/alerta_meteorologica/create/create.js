import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import './create.css';

export default function AlertCreate (){
    let history = useHistory();
    const [tipo, setTipo] = useState(null);
    const [descripcion, setDescripcion] = useState(null);

    const postData = () => {
        axios.post('http://localhost:6996/api/alerta/insert', {
            tipo, descripcion
        }).then(() => {
            history.push('/alertaMeteorologica')
        })
    }

    return (
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
                        onChange={(e) => setDescripcion(e.target.value)}
                    ></textarea>
                    </div>
                    <button class="form-submit-btn" type="submit" onClick={(e)=>{e.preventDefault();postData()}}>Enviar</button>
                </form>
            </div>
        </div>
    )
}