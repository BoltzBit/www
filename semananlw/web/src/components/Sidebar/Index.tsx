import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../../images/Local.svg';
import './styles.css';

function Sidebar(){
    const { goBack } = useHistory();
    return(
        <aside className="sidebar">
            <img src={mapMarkerImg} alt="Happy"/>

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={26} color="#fff"/>
                </button>
            </footer>
        </aside>
    );
}

export default Sidebar;
