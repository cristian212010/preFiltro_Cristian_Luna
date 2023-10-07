import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import './update.css';

export default function CiudadUpdate() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [pais, setPais] = useState(null);
  const [latitud, setLatitud] = useState(null);
  const [longitud, setLongitud] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem('ID'));
    setNombre(localStorage.getItem('nombre'));
    setPais(localStorage.getItem('pais'));
    setLatitud(localStorage.getItem('latitud'));
    setLongitud(localStorage.getItem('longitud'));
  }, []);

  const updateAPIData = () => {
    axios.put(`http://localhost:6996/api/ciudad/update/${_id}`, {
      nombre,
      pais,
      coordenadas_geograficas: {
        latitud,
        longitud
      }
    }).then(() => {
      history.push('/ciudadYPais');
    }).catch(() => { });
  };

  return (
    <div>
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required=""
              placeholder="Ingrese el nombre de la ciudad"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pais">País</label>
            <input
              type="text"
              id="pais"
              name="pais"
              required=""
              placeholder="Ingrese el país"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="latitud">Latitud</label>
            <input
              type="number"
              id="latitud"
              name="latitud"
              required=""
              placeholder="Ingrese la latitud"
              value={latitud}
              onChange={(e) => setLatitud(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="longitud">Longitud</label>
            <input
              type="number"
              id="longitud"
              name="longitud"
              required=""
              placeholder="Ingrese la longitud"
              value={longitud}
              onChange={(e) => setLongitud(e.target.value)}
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
