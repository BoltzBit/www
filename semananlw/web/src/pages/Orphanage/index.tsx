import React from 'react';
import { FiClock, FiInfo } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Marker } from 'react-leaflet';
import Leaflet from 'leaflet';

import Sidebar from '../../components/Sidebar/index';

import mapMarkerImg from '../../images/Local.svg';

import './styles.css';
import PrimaryButton from '../../components/PrimaryButton';
import Map from '../../components/Map';

const happyMapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
});

function Orphanage(){
    return (
        <div id="page-orphanage">
            
            <Sidebar />

            <main>
                <div className="orphanage-details">
                    <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar da Alegria"/>

                    <div className="images">
                        <button className="active">
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar da Alegria"/>
                        </button>
                        <button>
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar da Alegria"/>
                        </button>
                        <button>
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar da Alegria"/>
                        </button>
                        <button>
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar da Alegria"/>
                        </button>
                        <button>
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar da Alegria"/>
                        </button>
                        <button>
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar da Alegria"/>
                        </button>
                    </div>

                    <div className="orphanage-details-content">
                        
                        <h1>Lar da Alegria</h1>
                        <p>
                            Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.
                        </p>

                        <div className="map-container">
                            <Map
                                center = {[-23.321264,-51.2358034]}
                                zoom = {15}
                                style = {{ width: '100%', height: 280}}
                            >

                                <Marker 
                                    interactive = {false}
                                    icon = {happyMapIcon}
                                    position = {[-23.321264,-51.2358034]}
                                />
                            </Map>

                            <footer>
                                <a href="">Ver rotas no google Maps</a>
                            </footer>                         
                        </div>

                        <hr/>

                        <h2>Instruções para visita</h2>
                        <p>
                        Venha como se sentir mais à vontade e traga muito amor para dar.
                        </p>

                        <hr/>

                        <div className="open-details">
                            <div className="hour">
                                <FiInfo size={32} color="#15B6D6"/>
                                <p>Segunda à Sexta <br />
                                8h às 18h</p>
                            </div>

                            <div className="open-on-weekends">
                                <FiClock size={32} color="#39CC83"/>
                                <p>Atendemos <br />
                                fim de semana</p>
                            </div>
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
