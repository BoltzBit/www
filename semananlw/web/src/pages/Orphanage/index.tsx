import React, { useEffect, useState } from 'react';
import { FiClock, FiInfo } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Marker } from 'react-leaflet';
import Leaflet from 'leaflet';

import Sidebar from '../../components/Sidebar/index';

import mapMarkerImg from '../../images/Local.svg';

import './styles.css';
import PrimaryButton from '../../components/PrimaryButton';
import Map from '../../components/Map';

import { useParams } from 'react-router-dom';
import api from '../../services/api';

const happyMapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
});

interface Orphanage{
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: string;
    images: Array<{
        id: number;
        url: string;
    }>;
}

interface OrphanageParams{
    id: string;
}

function Orphanage(){
    const params = useParams<OrphanageParams>();
    const [ orphanage, setOrphanage ] = useState<Orphanage>();
    const [activeIndexImg, setActiveIndexImg ] = useState(0);

    useEffect(() => {
        api.get(`orphanages/${params.id}`).then(response => {
            setOrphanage(response.data);
        });
    }, [params.id]);
    
    if(!orphanage)
        return (<h1>Carregando</h1>);
    
    return (
        <div id="page-orphanage">
            
            <Sidebar />

            <main>
                <div className="orphanage-details">
                    <img src={orphanage?.images[activeIndexImg].url} alt={orphanage?.name}/>

                    <div className="images">

                        {orphanage?.images.map((image, index) => (
                            <button 
                                className={activeIndexImg === index ? 'active' : ''}
                                type="button"
                                key={image.id}
                                onClick={() => { setActiveIndexImg(index)}}
                            >
                                <img src={image.url} alt={orphanage.name}/>
                            </button>
                        ))}
                    </div>

                    <div className="orphanage-details-content">
                        
                        <h1>{orphanage?.name}</h1>
                        <p>
                            {orphanage?.about}
                        </p>

                        <div className="map-container">
                            <Map
                                center = {[orphanage?.latitude,orphanage?.longitude]}
                                zoom = {15}
                                style = {{ width: '100%', height: 280}}
                            >

                                <Marker 
                                    interactive = {false}
                                    icon = {happyMapIcon}
                                    position = {[orphanage?.latitude,orphanage?.longitude]}
                                />
                            </Map>

                            <footer>
                                <a href="#">Ver rotas no google Maps</a>
                            </footer>                         
                        </div>

                        <hr/>

                        <h2>{orphanage?.instructions}</h2>
                        <p>
                            Venha como se sentir mais à vontade e traga muito amor para dar.
                        </p>

                        <hr/>

                        <div className="open-details">
                            <div className="hour">
                                <FiInfo size={32} color="#15B6D6"/>
                                <p>{orphanage.opening_hours}</p>
                            </div>

                            {orphanage?.open_on_weekends ? (
                                <div className="open-on-weekends">
                                    <FiClock size={32} color="#39CC83"/>
                                    <p>Atendemos <br />
                                    fim de semana</p>
                                </div>
                            ) : (
                                <div className="open-on-weekends dont-open">
                                    <FiClock size={32} color="#39CC83"/>
                                    <p>Não Atendemos <br />
                                    fim de semana</p>
                                </div>
                            )}
                        </div>

                        <PrimaryButton type="button">
                            <FaWhatsapp size={20} color="#fff"/>
                            Entrar em contato
                        </PrimaryButton>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Orphanage;
