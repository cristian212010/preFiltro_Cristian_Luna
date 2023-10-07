import axios from 'axios';
import React , {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import './read.css'

export default function Read(){
    const [APIData, setAPIData] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:6996/api/pronostico/all`)
        .then((response)=>{
            setAPIData(response.data);
        })
        .catch(()=>{})
    },[]);

    const setData = (data) => {
        let {
            _id,
            temperatura_actual,
            humedad,
            velocidad_del_viento,
            direccion_del_viento,
            presion_atmosferica,
            visibilidad,
            condicion_meteorologica,
            fecha_y_hora,
            fuente_de_datos,
            ciudad_y_ubicacion,
            pronostico_corto_plazo,
            pronostico_largo_plazo,
            alertas_meteorologicas
        } = data;
    
        localStorage.setItem('ID', _id);
        localStorage.setItem('temperatura_actual', temperatura_actual);
        localStorage.setItem('humedad', humedad);
        localStorage.setItem('velocidad_del_viento', velocidad_del_viento);
        localStorage.setItem('direccion_del_viento', direccion_del_viento);
        localStorage.setItem('presion_atmosferica', presion_atmosferica);
        localStorage.setItem('visibilidad', visibilidad);
        localStorage.setItem('condicion_meteorologica', condicion_meteorologica);
        localStorage.setItem('fecha_y_hora', fecha_y_hora);
        localStorage.setItem('fuente_de_datos', fuente_de_datos);
        ciudad_y_ubicacion = JSON.stringify(ciudad_y_ubicacion);
        localStorage.setItem('ciudad_y_ubicacion', ciudad_y_ubicacion);
        pronostico_corto_plazo =JSON.stringify(pronostico_corto_plazo);
        localStorage.setItem('pronostico_corto_plazo', pronostico_corto_plazo);
        pronostico_largo_plazo = JSON.stringify(pronostico_largo_plazo);
        localStorage.setItem('pronostico_largo_plazo', pronostico_largo_plazo);
        alertas_meteorologicas = JSON.stringify(alertas_meteorologicas)
        localStorage.setItem('alertas_meteorologicas', alertas_meteorologicas);
    };

    const onDelete = (_id) => {
        axios.delete(`http://localhost:6996/api/pronostico/delete/${_id}`)
        window.location.href='http://localhost:3000/pronosticoActual'
    };

    return(
        <div className='read-container'>
            <div>
                <Link to='crearPronosticoActual'>
                        <button className='btnCrear'>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
                            </span>
                        </button>
                </Link>
            </div>
            <div className='card-container'>
                {
                    APIData.map((data)=>{
                        return(
                            <div class="card">
                                <div class="container">
                                    <div class="cloud front">
                                    <span class="left-front"></span>
                                    <span class="right-front"></span>
                                    </div>
                                    <span class="sun sunshine"></span>
                                    <span class="sun"></span>
                                    <div class="cloud back">
                                    <span class="left-back"></span>
                                    <span class="right-back"></span>
                                    </div>
                                </div>
                                <div class="card-header">
                                    <span>{data.ciudad_y_ubicacion[0].nombre}, {data.ciudad_y_ubicacion[0].pais}</span>
                                    <span>{data.fecha_y_hora}</span>
                                    <span>Humedad: {data.humedad}%</span>
                                    <span>Visibilidad: {data.visibilidad}Km</span>
                                </div>

                                <span class="temp">{data.temperatura_actual}°</span>
                                <Link to='/editarPronosticoActual'>
                                    <div className='edit'>
                                        <button onClick={()=>setData(data)} class="btn-edit">
                                            <svg class="svg" viewBox="0 0 512 512">
                                                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </Link>
                                <div class="temp-scale">
                                    <Link to='/pronosticoActual'>
                                        <button onClick={()=>onDelete(data._id)} class="btn-delete">
                                            <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
                                                <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}