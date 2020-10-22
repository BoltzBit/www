import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Marker } from 'react-leaflet';

import Sidebar from '../../components/Sidebar';
import PrimaryButton from '../../components/PrimaryButton/index';

import Map from '../../components/Map/index';
import happyMapImg from '../../components/Map/happyMapImg'

import './styles.css';

function CreateOrphanage(){
    return (
        <div id="page-create-orphanage">
            <Sidebar />

            <main>
                <form className="create-orphanage-form">
                    <fieldset>
                        <legend>Dados</legend>

                        <Map
                            style={{ width: '100%', height: 280 }}
                        >
                            <Marker 
                                interactive={false}
                                icon={happyMapImg}
                                position={[-27.2092052,-49.6401092]}
                            />
                        </Map>

                        <div className="input-block">
                            <label htmlFor="name">Nome</label>
                            <input id="name"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="about">Sobre<span>Máximo de 300 caracteres</span></label>
                            <input id="about" maxLength={300}/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="images">Fotos</label>
                            <div className="uploaded-image">

                            </div>

                            <button className="new-image">
                                <FiPlus size={24} color="#15b6d6"/>
                            </button>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Visitação</legend>

                        <div className="input-block">
                            <label htmlFor="instructions">Instruções</label>
                            <input id="instructions"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening-hours">Horário de Atendimento</label>
                            <input id="opening-hours"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="openon-weekends">Atende fim de Semana</label>

                            <div className="button-select">
                                <button type="button" className="active">Sim</button>
                                <button type="button">Não</button>
                            </div>
                        </div>
                    </fieldset>

                    <PrimaryButton type="submit">
                        Confirmar
                    </PrimaryButton>
                </form>
            </main>
        </div>
    );
}

export default CreateOrphanage;
