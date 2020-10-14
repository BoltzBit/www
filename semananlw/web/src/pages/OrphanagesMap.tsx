import React from 'react';
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/Local.svg';
import '../styles/pages/OrphanagesMap.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita!</p>
                </header>

                <footer>
                    <strong>Londrina</strong>
                    <span>Santa Catarina</span>
                </footer>
            </aside>

            <Map
                center={[-23.321264,-51.2358034]}
                zoom={12}
                style={{ width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="/" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;
