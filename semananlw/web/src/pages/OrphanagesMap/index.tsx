import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../images/Local.svg';
import './styles.css';

import api from '../../services/api';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 10]
});

interface Orphanages{
    id: string;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap(){

    const [ orphanages, setOrphanages ] = useState<Orphanages[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
        
    }, []);

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
                    <span>Paraná</span>
                </footer>
            </aside>


            

            <Map
                center={[-23.321264,-51.2358034]}
                zoom={12}
                style={{ width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {orphanages.map((orphanage => (
                    <Marker
                        key={orphanage.id}
                        icon={mapIcon}
                        position={[orphanage.latitude, orphanage.longitude]}
                    >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            Lar Feliz
                            <Link to={`/orphanages/${orphanage.id}`}>
                                <FiArrowRight />
                            </Link>
                        </Popup>
                     </Marker>
                )))}
            </Map>

            <Link to="/create" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;
