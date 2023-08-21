import React from 'react';
import { Marker } from 'react-native-maps';
import { allPoints } from '../pointsCoordinate';

const MapViewComponent = ({ handleMapLongPress }) => {
    return (
        <>
            {allPoints.map((point, index) => (
                <Marker
                    key={index}
                    coordinate={point}
                    pinColor='purple' 
                    title={`${point.ville}_index${index}`} 
                    opacity={point.visibleSurLaCarte}
                />
            ))}
        </>
    );
};

export default MapViewComponent;
