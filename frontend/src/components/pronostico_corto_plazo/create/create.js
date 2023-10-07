import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function PronosticoCortoCreate (){
    let history = useHistory();
    const [hora, setHora] = useState(null);
    const [temperatura, setTemperatura] = useState(null);
    const [condicion, setCondicion] = useState(null);

    const postData = () => {
        axios.post('http://localhost:6996/api/pronosticoCorto/insert', {
            hora, temperatura, condicion
        }).then(() => {
            history.push('/pronosticoCorto');
        });
    };

    return (
        <div>
            <div className="form-container">
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="hora">Hora</label>
                        <input 
                            type="text"
                            id="hora" 
                            name="hora" 
                            required="" 
                            placeholder='Ingrese la hora'
                            onChange={(e) => setHora(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="temperatura">Temperatura</label>
                        <input 
                            type="number"
                            id="temperatura" 
                            name="temperatura" 
                            required="" 
                            placeholder='Ingrese la temperatura'
                            onChange={(e) => setTemperatura(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="condicion">Condición</label>
                        <input 
                            type="text"
                            id="condicion" 
                            name="condicion" 
                            required="" 
                            placeholder='Ingrese la condición meteorológica'
                            onChange={(e) => setCondicion(e.target.value)}
                        />
                    </div>
                    <button className="form-submit-btn" type="submit" onClick={(e) => { e.preventDefault(); postData(); }}>Enviar</button>
                </form>
            </div>
        </div>
    );
}
