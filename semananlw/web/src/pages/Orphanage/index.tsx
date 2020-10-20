import React from 'react';
import { FiArrowLeft, FiClock, FiInfo } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Leaflet from 'leaflet';

import mapMarkerImg from '../../images/Local.svg';

import './styles.css';

const happyMapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
});

function Orphanage(){
    const { goBack } = useHistory();

    return (
        <div id="page-orphanage">
            <aside className="sidebar">
                <img src={mapMarkerImg} alt="Happy"/>

                <footer>
                    <button type="button" onClick={goBack}>
                        <FiArrowLeft size={26} color="#fff"/>
                    </button>
                </footer>
            </aside>

            <main>
                <div className="orphanage-details">
                    <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar da Alegria"/>

                    <div className="images">
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
                            <p>Aqui é o map</p>

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
                                Segunda à Sexta <br />
                                8h às 18h
                            </div>

                            <div className="open-on-weekends">
                                <FiClock size={32} color="#39CC83"/>
                                Atendemos <br />
                                fim de semana
                            </div>
                        </div>

                        <button>
                            <FaWhatsapp size={20} color="#fff"/>
                            Entrar em contato
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Orphanage;
