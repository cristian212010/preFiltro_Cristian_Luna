import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import './create.css';

export default function CiudadCreate() {
  let history = useHistory();
  const [nombre, setNombre] = useState(null);
  const [pais, setPais] = useState(null);
  const [latitud, setLatitud] = useState(null);
  const [longitud, setLongitud] = useState(null);

  const postData = () => {
    axios.post('http://localhost:6996/api/ciudad/insert', {
      nombre,
      pais,
      coordenadas_geograficas: {
        latitud,
        longitud
      }
    }).then(() => {
      history.push('/ciudadYPais');
    });
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
              onChange={(e) => setLongitud(e.target.value)}
            />
          </div>
          <button
            className="form-submit-btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              postData();
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
