// AIFunctions.js

// Importation des points de coordonnées depuis le fichier pointsCoordinate.js
import { allPoints } from '../pointsCoordinate';


// Fonction pour convertir degrés en radians
const degToRad = (deg) => deg * (Math.PI / 180);

const CalculDistance = (lat1, lon1, lat2, lon2) => {
    // Rayon moyen de la Terre en kilomètres
    const earthRadius = 6371;

    // Calcul des différences en latitude et longitude en radians
    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);

    // Formule de la distance entre deux points sur une sphère (formule de Haversine)
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Calcul de la distance entre le point et la position centrale
    const distanceToPoint = earthRadius * c;

    return distanceToPoint;
};

export const generatePointsAround = (centerPosition, distance) => {
    // Filtrage des points pour sélectionner ceux qui se trouvent dans le rayon spécifié
    const pointsWithDistances = allPoints.map((point) => {
        // Coordonnées de la position centrale
        const lat1 = centerPosition.latitude;
        const lon1 = centerPosition.longitude;

        // Coordonnées du point en cours d'examen
        const lat2 = point.latitude;
        const lon2 = point.longitude;

        const distanceToPoint = CalculDistance(lat1, lon1, lat2, lon2);

        // Retourne un objet contenant le point et sa distance
        return { point , distance: distanceToPoint };
    });

    // Filtrer les points en fonction de la distance spécifiée
    const filteredPoints = pointsWithDistances.filter(entry => entry.distance <= distance);

    // Retourne la liste des points et distances dans le rayon spécifié
    return filteredPoints;
};



export const genererItinéraire = (centerPosition, distance, checkboxState) => {
    const trajet = generatePointsAround(centerPosition, distance / (checkboxState + 1));
    const allItineraries = generateAllItineraries(trajet, distance);

    for (const itinerary of allItineraries) {
        const totalDistance = calculateTotalDistance(centerPosition, itinerary);
        console.log(`Itinéraire: ${itinerary.map(point => point.ville).join(' > ')}`);
        console.log(`Distance totale: ${totalDistance.toFixed(2)} km`);
    }

    return allItineraries;
}


const calculateTotalDistance = (centerPosition, itinerary) => {
    if (itinerary.length === 0) {
        return 0; // No points in the itinerary, distance is 0
    }
    let totalDistance = CalculDistance(centerPosition.latitude, centerPosition.longitude, itinerary[0].latitude, itinerary[0].longitude);
    
    for (let i = 1; i < itinerary.length; i++) {
        const prevPoint = itinerary[i - 1];
        const currentPoint = itinerary[i];
        const distance = CalculDistance(prevPoint.latitude, prevPoint.longitude, currentPoint.latitude, currentPoint.longitude);
        totalDistance += distance;
    }
    
    return totalDistance;
};



const generateAllItineraries = (points, distanceMax) => {
    const allItineraries = []; // Stocke tous les itinéraires possibles
    
    // Fonction récursive pour générer les itinéraires
    const generateItineraryRecursive = (currentItinerary, currentDistance, currentIndex) => {
        // Si la distance dépasse la distance maximale, arrêter cette branche
        if (currentDistance > distanceMax) {
            return;
        }
        
        // Si on a parcouru tous les points, ajouter l'itinéraire courant à la liste si non vide
        if (currentIndex >= points.length) {
            if (currentItinerary.length > 0) {
                allItineraries.push(currentItinerary.slice()); // Copie de l'itinéraire courant
            }
            return;
        }
        
        const candidatePoint = points[currentIndex];
        const distanceToCandidate = candidatePoint.distance;
        
        // Si en ajoutant le point candidat la distance reste dans la limite, l'ajouter
        if (currentDistance + distanceToCandidate <= distanceMax) {
            currentItinerary.push(candidatePoint.point); // Ajouter le point actuel
            generateItineraryRecursive(currentItinerary, currentDistance + distanceToCandidate, currentIndex + 1);
            currentItinerary.pop(); // Retour en arrière
        }
        
        // Passer au point suivant sans ajouter le point candidat
        generateItineraryRecursive(currentItinerary, currentDistance, currentIndex + 1);
    };
    
    // Appeler la fonction récursive avec les valeurs initiales
    generateItineraryRecursive([], 0, 0);
    
    return allItineraries; // Retourner tous les itinéraires possibles
};
