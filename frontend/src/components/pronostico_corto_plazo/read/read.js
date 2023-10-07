import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PronosticoCortoRead() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:6996/api/pronosticoCorto/all`)
      .then((response) => {
        setAPIData(response.data);
      })
      .catch(() => { });
  }, []);

  const setData = (data) => {
    let {
      _id,
      hora,
      temperatura,
      condicion
    } = data;

    localStorage.setItem('ID', _id);
    localStorage.setItem('hora', hora);
    localStorage.setItem('temperatura', temperatura);
    localStorage.setItem('condicion', condicion);
  };

  const onDelete = (_id) => {
    axios.delete(`http://localhost:6996/api/pronosticoCorto/delete/${_id}`)
      .then(() => {
        window.location.href = 'http://localhost:3000/pronosticoCorto';
      })
      .catch(() => { });
  };

  return (
    <div className='read-container'>
      <div>
        <Link to='/creatPronosticoCorto'>
          <button className='btnCrear'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
            </span>
          </button>
        </Link>
      </div>
      <div className='card-container'>
        {
          APIData.map((data) => {
            return (
              <div className="cardAlerta" key={data._id}>
                <div className="header">
                  <span className="iconCard">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path clipRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fillRule="evenodd"></path>
                    </svg>
                  </span>
                  <p className="alert">Hora: {data.hora}</p>
                </div>

                <p className="message">
                  <strong>Temperatura:</strong> {data.temperatura}°C<br />
                  <strong>Condición:</strong> {data.condicion}
                </p>

                <div className="actions">
                  <Link to='/editarPronosticoCorto'>
                    <button onClick={() => setData(data)} className="read">
                      Editar
                    </button>
                  </Link>

                  <Link to='/pronosticoCorto'>
                    <button onClick={() => onDelete(data._id)} className="mark-as-read">
                      Eliminar
                    </button>
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
