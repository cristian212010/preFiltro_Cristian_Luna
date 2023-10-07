import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function PronosticoLargoUpdate() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [temperatura_maxima, setTemperaturaMaxima] = useState(null);
  const [temperatura_minima, setTemperaturaMinima] = useState(null);
  const [condicion, setCondicion] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem('ID'));
    setFecha(localStorage.getItem('fecha'));
    setTemperaturaMaxima(localStorage.getItem('temperatura_maxima'));
    setTemperaturaMinima(localStorage.getItem('temperatura_minima'));
    setCondicion(localStorage.getItem('condicion'));
  }, []);

  const updateAPIData = () => {
    axios.put(`http://localhost:6996/api/pronosticoLargo/update/${_id}`, {
      fecha, temperatura_maxima, temperatura_minima, condicion
    }).then(() => {
      history.push('/pronosticoLargo');
    }).catch(() => { });
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
              placeholder="Ingrese la fecha"
              value={fecha}
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
              placeholder="Ingrese la temperatura máxima"
              value={temperatura_maxima}
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
              placeholder="Ingrese la temperatura mínima"
              value={temperatura_minima}
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
              placeholder="Ingrese la condición meteorológica"
              value={condicion}
              onChange={(e) => setCondicion(e.target.value)}
            />
          </div>
          <button
            className="form-submit-btn"
            type="submit"
            onClick={(e) => { e.preventDefault(); updateAPIData(); }}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
