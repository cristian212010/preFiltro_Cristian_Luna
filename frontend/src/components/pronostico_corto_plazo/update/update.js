import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function PronosticoCortoUpdate() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [hora, setHora] = useState(null);
  const [temperatura, setTemperatura] = useState(null);
  const [condicion, setCondicion] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem('ID'));
    setHora(localStorage.getItem('hora'));
    setTemperatura(localStorage.getItem('temperatura'));
    setCondicion(localStorage.getItem('condicion'));
  }, []);

  const updateAPIData = () => {
    axios.put(`http://localhost:6996/api/pronosticoCorto/update/${_id}`, {
      hora, temperatura, condicion
    }).then(() => {
      history.push('/pronosticoCorto');
    }).catch(() => { });
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
              placeholder="Ingrese la hora"
              value={hora}
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
              placeholder="Ingrese la temperatura"
              value={temperatura}
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
