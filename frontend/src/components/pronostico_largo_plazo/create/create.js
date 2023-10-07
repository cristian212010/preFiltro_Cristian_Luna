import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function PronosticoLargoCreate (){
    let history = useHistory();
    const [fecha, setFecha] = useState(null);
    const [temperatura_maxima, setTemperaturaMaxima] = useState(null);
    const [temperatura_minima, setTemperaturaMinima] = useState(null);
    const [condicion, setCondicion] = useState(null);

    const postData = () => {
        axios.post('http://localhost:6996/api/pronosticoLargo/insert', {
            fecha, temperatura_maxima, temperatura_minima, condicion
        }).then(() => {
            history.push('/pronosticoLargo');
        });
    };

    return (
        <div>
            <div className="form-container">
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="fecha">Fecha</label>
                        <input 
                            type="text"
                            id="fecha" 
                            name="fecha" 
                            required="" 
                            placeholder='Ingrese la fecha'
                            onChange={(e) => setFecha(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="temperatura_maxima">Temperatura Máxima</label>
                        <input 
                            type="number"
                            id="temperatura_maxima" 
                            name="temperatura_maxima" 
                            required="" 
                            placeholder='Ingrese la temperatura máxima'
                            onChange={(e) => setTemperaturaMaxima(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="temperatura_minima">Temperatura Mínima</label>
                        <input 
                            type="number"
                            id="temperatura_minima" 
                            name="temperatura_minima" 
                            required="" 
                            placeholder='Ingrese la temperatura mínima'
                            onChange={(e) => setTemperaturaMinima(e.target.value)}
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
