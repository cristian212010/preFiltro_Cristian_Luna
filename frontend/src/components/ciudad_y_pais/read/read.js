import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './read.css';

export default function CiudadRead() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:6996/api/ciudad/all`)
      .then((response) => {
        setAPIData(response.data);
      })
      .catch(() => { });
  }, []);

  const setData = (data) => {
    let {
      _id,
      nombre,
      pais,
      coordenadas_geograficas: { latitud, longitud }
    } = data;

    localStorage.setItem('ID', _id);
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('pais', pais);
    localStorage.setItem('latitud', latitud);
    localStorage.setItem('longitud', longitud);
  };

  const onDelete = (_id) => {
    axios.delete(`http://localhost:6996/api/ciudad/delete/${_id}`)
    .catch(()=> {});
    window.location.href='http://localhost:3000/ciudadYPais'
    };

  return (
    <div className='read-container'>
      <div>
        <Link to='crearCiudad'>
          <button className='btnCrear'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
            </span>
          </button>
        </Link>
      </div>
      <div className='card-container'>
        {APIData.map((data) => {
          return (
            <div className="cookie-card" key={data._id.$oid}>
              <span className="title">{data.nombre}</span>
              <p className="description">
                <strong>País:</strong> {data.pais}<br />
                <strong>Latitud:</strong> {data.coordenadas_geograficas.latitud}<br />
                <strong>Longitud:</strong> {data.coordenadas_geograficas.longitud}<br />
              </p>
              <div className="actions">
                <Link to='/editarCiudad'>
                    <button className="accept" onClick={() => setData(data)}>
                        Editar
                    </button>
                </Link>
                <Link to='/ciudadYPais'>
                    <button className="delete" onClick={() => onDelete(data._id)}>
                        Eliminar
                    </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
