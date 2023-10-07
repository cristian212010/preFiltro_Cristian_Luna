import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import './create.css';

export default function Create() {
    const [APICiudad, SetAPICiudad] = useState([]);
    const [APIPronosticoCorto, SetAPIPronosticoCorto] = useState([]);
    const [APIPronosticoLargo, SetAPIPronosticoLargo] = useState([]);
    const [APIAlertaMeteorologica, SetAPIAlertaMeteorologica] = useState([]);
    let history = useHistory();
    const [temperatura_actual, setTemperatura] = useState();
    const [humedad, setHumedad] = useState();
    const [velocidad_del_viento, setVelocidadDelViento] = useState();
    const [direccion_del_viento, setDireccionDelViento] = useState();
    const [ciudad_y_ubicacion, setCiudadYUbicacion] = useState();
    const [presion_atmosferica, setPresionAtmosferica] = useState();
    const [visibilidad, setVisibilidad] = useState();
    const [condicion_meteorologica, setCondicionMeteorologica] = useState();
    const [fecha_y_hora, setFechaYHora] = useState();
    const [pronostico_corto_plazo, setPronosticoCortoPlazo] = useState();
    const [pronostico_largo_plazo, setPronosticoLargoPlazo] = useState();
    const [alertas_meteorologicas, setAlertasMeteorologicas] = useState();
    const [fuente_de_datos, setFuenteDeDatos] = useState();

    const postData = () => {
        axios.post('http://localhost:6996/api/pronostico/insert', {
            temperatura_actual: parseInt(temperatura_actual),
            humedad: parseInt(humedad),
            velocidad_del_viento: parseInt(velocidad_del_viento),
            direccion_del_viento,
            ciudad_y_ubicacion,
            presion_atmosferica: parseInt(presion_atmosferica),
            visibilidad: parseInt(visibilidad),
            condicion_meteorologica,
            fecha_y_hora,
            pronostico_corto_plazo,
            pronostico_largo_plazo,
            alertas_meteorologicas,
            fuente_de_datos
        }).then(() => {
            history.push('/pronosticoActual')
        })
    }

    useEffect(() => {
        axios.get('http://localhost:6996/api/ciudad/all')
        .then((response) =>{
            SetAPICiudad(response.data)
        })
        axios.get('http://localhost:6996/api/pronosticoCorto/all')
        .then((response) =>{
            SetAPIPronosticoCorto(response.data)
        })
        axios.get('http://localhost:6996/api/pronosticoLargo/all')
        .then((response) =>{
            SetAPIPronosticoLargo(response.data)
        })
        axios.get('http://localhost:6996/api/alerta/all')
        .then((response) =>{
            SetAPIAlertaMeteorologica(response.data)
        })
    },[])

    return (
        <div className='containerForm'>
            <form className="form">
                <div className="flex">
                    <label>
                        <input
                            type="number"
                            className="input"
                            value={temperatura_actual}
                            onChange={(e) => setTemperatura(e.target.value)}
                        />
                        <span>Temperatura Actual</span>
                    </label>

                    <label>
                        <input
                            type="number"
                            className="input"
                            value={humedad}
                            onChange={(e) => setHumedad(e.target.value)}
                        />
                        <span>Humedad</span>
                    </label>
                </div>

                <div className="flex">
                    <label>
                        <input
                            type="number"
                            className="input"
                            value={velocidad_del_viento}
                            onChange={(e) => setVelocidadDelViento(e.target.value)}
                        />
                        <span>Velocidad del Viento</span>
                    </label>

                    <label>
                        <input
                            type="text"
                            className="input"
                            value={direccion_del_viento}
                            onChange={(e) => setDireccionDelViento(e.target.value)}
                        />
                        <span>Dirección del Viento</span>
                    </label>
                </div>

                <div className="flex">
                    <label>
                        <select
                            type="text"
                            className="input"
                            onChange={(e) => setCiudadYUbicacion(e.target.value)}
                        >
                            <option>Seleccione Ciudad</option>
                            {   
                                
                                APICiudad.map((data)=>{
                                    return(
                                        <option value={data._id}>{data.nombre}</option>
                                    )
                                })
                            }
                        </select>
                        <span>Ciudad y Ubicación</span>
                    </label>

                    <label>
                        <input
                            type="number"
                            className="input"
                            value={presion_atmosferica}
                            onChange={(e) => setPresionAtmosferica(e.target.value)}
                        />
                        <span>Presión Atmosférica</span>
                    </label>
                </div>

                <div className="flex">
                    <label>
                        <input
                            type="number"
                            className="input"
                            value={visibilidad}
                            onChange={(e) => setVisibilidad(e.target.value)}
                        />
                        <span>Visibilidad</span>
                    </label>

                    <label>
                        <input
                            type="text"
                            className="input"
                            value={condicion_meteorologica}
                            onChange={(e) => setCondicionMeteorologica(e.target.value)}
                        />
                        <span>Condición Meteorológica</span>
                    </label>
                </div>

                <div className="flex">
                    <label>
                        <input
                            type="date"
                            className="input"
                            value={fecha_y_hora}
                            onChange={(e) => setFechaYHora(e.target.value)}
                        />
                        <span>Fecha y Hora</span>
                    </label>

                    <label>
                        <select
                            type="text"
                            className="input"
                            onChange={(e) => setPronosticoCortoPlazo(e.target.value)}
                        >
                            <option>Seleccione Pronostico</option>
                            {
                                APIPronosticoCorto.map((data) => {
                                    return(
                                        <option value={data._id}>{data.condicion}</option>
                                    )
                                })
                            }
                        </select>
                        <span>Pronóstico Corto Plazo</span>
                    </label>
                </div>

                <div className="flex">
                    <label>
                        <select
                            type="text"
                            className="input"
                            onChange={(e) => setPronosticoLargoPlazo(e.target.value)}
                        >
                            <option>Seleccione Pronostico</option>
                            {
                                APIPronosticoLargo.map((data) =>{
                                    return(
                                        <option value={data._id}>{data.condicion}</option>
                                    )
                                })
                            }
                        </select>
                        <span>Pronóstico Largo Plazo</span>
                    </label>

                    <label>
                        <select
                            type="text"
                            className="input"
                            onChange={(e) => setAlertasMeteorologicas(e.target.value)}
                        >
                            <option>Seleccione Alerta</option>
                            {
                                APIAlertaMeteorologica.map((data)=>{
                                    return(
                                        <option value={data._id}>{data.tipo}</option>
                                    )
                                })
                            }
                        </select>
                        <span>Alertas Meteorológicas</span>
                    </label>
                </div>

                <div className="flex">
                    <label>
                        <input
                            type="text"
                            className="input"
                            value={fuente_de_datos}
                            onChange={(e) => setFuenteDeDatos(e.target.value)}
                        />
                        <span>Fuente de Datos</span>
                    </label>
                </div>
                            
                <button className="fancy" onClick={(e)=>{e.preventDefault();postData()}}>
                    <span className="top-key"></span>
                    <span className="text">Enviar</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </button>
            </form>
        </div>
    )
}
