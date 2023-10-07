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
import PronosticoCortoRead from './components/pronostico_corto_plazo/read/read';
import PronosticoCortoCreate from './components/pronostico_corto_plazo/create/create';
import PronosticoCortoUpdate from './components/pronostico_corto_plazo/update/update';
import PronosticoLargoRead from './components/pronostico_largo_plazo/read/read';
import PronosticoLargoCreate from './components/pronostico_largo_plazo/create/create';
import PronosticoLargoUpdate from './components/pronostico_largo_plazo/update/update';

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
          <div>
            <Route exact path='/pronosticoCorto' component={PronosticoCortoRead}></Route>
            <Route exact path='/creatPronosticoCorto' component={PronosticoCortoCreate}></Route>
            <Route exact path='/editarPronosticoCorto' component={PronosticoCortoUpdate}></Route>
          </div>
          <div>
            <Route exact path='/pronosticoLargo' component={PronosticoLargoRead}></Route>
            <Route exact path='/crearPronosticoLargo' component={PronosticoLargoCreate}></Route>
            <Route exact path='/editarPronosticoLargo' component={PronosticoLargoUpdate}></Route>
          </div>
        </div>
    </Router>
  );
}

export default App;