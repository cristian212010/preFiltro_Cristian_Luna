import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow.svg';
import search from '../../assets/search.svg';
import pronosticoActual from '../../assets/pronosticoActual.svg'
import city from '../../assets/city.svg';
import meteor from '../../assets/meteor.svg';
import sun from '../../assets/sun.svg';
import rainbow from '../../assets/rainbow.svg';
import { Link } from 'react-router-dom'
import './sidebar.css'

const SideBar = () => {
  const [sideBarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!sideBarOpen);
  }


  return (
    <div>
      <nav className={`sidebar ${sideBarOpen ? 'close' : ''}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="" className="logo" />
            </span>
            <div className="text logo-text">
              <span className="name">Tiempo</span>
              <span className="profession">Artemis</span>
            </div>
          </div>
          <img src={arrow} className='bx bx-chevron-right toggle arrow' onClick={toggleSidebar}></img>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <img src={search} className='bx bx-search search' ></img>
              <input type="text" placeholder="Search..." />
            </li>
            <ul className="menu-links">
              <Link to='/pronosticoActual'>
                <li className="nav-link">
                  <a href="">
                    <img src={pronosticoActual} className='bx bx-home-alt icon menu-icon'></img>
                    <span className="text nav-text">Pronostico Actual</span>
                  </a>
                </li>
              </Link>
              <Link to='/ciudadYPais'>
                <li className="nav-link">
                  <a href="">
                    <img src={city} className='bx bx-home-alt icon menu-icon'></img>
                    <span className="text nav-text">Ciudad</span>
                  </a>
                </li>
              </Link>
              <Link to='/alertaMeteorologica'>
                <li className="nav-link">
                  <a href="">
                    <img src={meteor} className='bx bx-home-alt icon'></img>
                    <span className="text nav-text">Alerta Meteorologica</span>
                  </a>
                </li>
              </Link>
              <Link to='/pronosticoCorto'>
                <li className="nav-link">
                  <a href="">
                    <img src={sun} className='bx bx-home-alt icon'></img>
                    <span className="text nav-text">Pronostico Corto</span>
                  </a>
                </li>
              </Link>
              <Link to='/pronosticoLargo'>
                <li className="nav-link">
                  <a href="">
                    <img src={rainbow} className='bx bx-home-alt icon'></img>
                    <span className="text nav-text">Pronostico Largo</span>
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
