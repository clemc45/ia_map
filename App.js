import React, { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import MapViewComponent from './fonctions/MapViewComponent';
import ContextMenuModal from './fonctions/ContextMenuModal';
import { generatePointsAround, genererItinéraire, generateRoutesWithPoints  } from './fonctions/AIFunctions';


const App = () => {
    // State pour gérer la visibilité du menu contextuel et les coordonnées sélectionnées
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [selectedCoordinate, setSelectedCoordinate] = useState(null);

    // Gérer le long clic sur la carte
    const handleMapLongPress = (e) => {
        const coordinate = e.nativeEvent.coordinate;
        setSelectedCoordinate(coordinate); // Stocker les coordonnées sélectionnées
        setMenuVisible(true); // Afficher le menu contextuel
        console.log('Long Press Coordinate:', coordinate);
    };

    // Gérer la sélection d'une option dans le menu contextuel
    const handleMenuSelection = (action) => {
        if (action === 'takeCoordinates' && selectedCoordinate) {
            console.log('Coordonnées sélectionnées:', selectedCoordinate);
            // Faites quelque chose avec les coordonnées (par exemple, les enregistrer)
        }
        setMenuVisible(false); // Cacher le menu contextuel
    };

    // Fermer le menu contextuel
    const closeModal = () => {
        setMenuVisible(false);
    };

    const handleGenerateOptimalRoute = (distance, checkboxState) => {
        console.log('____________________________________')
        // Obtenir les points à 100 km autour de la position actuelle
        console.log(distance);
        const centerPosition = selectedCoordinate;
        /*const pointsAround = generatePointsAround(centerPosition, distance);
        console.log(`${pointsAround.length} Points à ${distance} km autour:`, pointsAround);*/

        const trajets = genererItinéraire(centerPosition, distance, checkboxState)
        //console.log(`itinéraires disponibles : `, trajets)
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Composant de la carte */}
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 47.8566,
                    longitude: 2.3522,
                    latitudeDelta: 10,
                    longitudeDelta: 10,
                }}
                onLongPress={handleMapLongPress}
            >
                {/* affichage des markers de la carte */}
                <MapViewComponent />
            </MapView>

            {/* Menu contextuel */}
            <ContextMenuModal
                isVisible={isMenuVisible}
                handleMenuSelection={handleMenuSelection}
                handleGenerateOptimalRoute={handleGenerateOptimalRoute}
                closeModal={closeModal}
                
            />
        </View>
    );
};

export default App;
