import React from 'react';
import {Map as LeafletMap, MapProps as LeafletMapProps, TileLayer} from 'react-leaflet';

interface MapProps extends LeafletMapProps{
    interactive?: boolean,
    children: React.ReactNode
}

function Map({ children, interactive=true, ...props} : MapProps){
    return(
        <LeafletMap
            center={[-23.321264,-51.2358034]}
            zoom={15}
            style={{ width: '100%', height: 280}}
            dragging={interactive}
            touchZoom={interactive}
            zoomControl={interactive}
            scrollWheelZoom={interactive}
            doubleClickZoom={interactive}
            {...props}
        >
            <TileLayer
                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {children}
        </LeafletMap>
    );
}

export default Map;
