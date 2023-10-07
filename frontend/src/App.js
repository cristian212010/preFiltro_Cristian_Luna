import './App.css';
import Read from './components/pronostico_actual/read/read';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SideBar from './components/sidebar/sidebar';
import Create from './components/pronostico_actual/create/create';
import Update from './components/pronostico_actual/update/update';
import AlertaRead from './components/alerta_meteorologica/read/read'
import AlertCreate from './components/alerta_meteorologica/create/create';
import AlertaUpdate from './components/alerta_meteorologica/update/update';
import CiudadRead from './components/ciudad_y_pais/read/read';
import CiudadCreate from './components/ciudad_y_pais/create/create';
import CiudadUpdate from './components/ciudad_y_pais/update/update';

function App() {
  return (
    <Router>
      <SideBar></SideBar>
        <div className='main'>
          <div>
            <Route exact path='/pronosticoActual' component={Read}></Route>
            <Route exact path='/crearPronosticoActual' component={Create}></Route>
            <Route exact path='/editarPronosticoActual' component={Update}></Route>
          </div>
          <div>
            <Route exact path='/alertaMeteorologica' component={AlertaRead}></Route>
            <Route exact path='/crearAlerta' component={AlertCreate}></Route>
            <Route exact path='/editarAlerta' component={AlertaUpdate}></Route>
          </div>
          <div>
            <Route exact path='/ciudadYPais' component={CiudadRead}></Route>
            <Route exact path='/crearCiudad' component={CiudadCreate}></Route>
            <Route exact path='/editarCiudad' component={CiudadUpdate}></Route>
          </div>
        </div>
    </Router>
  );
}

export default App;