//PointsCoordinate.js

const allPoints = [
    { latitude: 48.8566, longitude: 2.3522, visibleSurLaCarte: 1, ville: 'Paris' }, // Paris
    { latitude: 43.2965, longitude: 5.3698, visibleSurLaCarte: 1, ville: 'Marseille' }, // Marseille
    { latitude: 43.7102, longitude: 7.2620, visibleSurLaCarte: 1, ville: 'Nice' }, // Nice
    { latitude: 48.8647, longitude: 2.3490, visibleSurLaCarte: 1, ville: 'Montmartre' }, // Montmartre
    { latitude: 45.7640, longitude: 4.8357, visibleSurLaCarte: 1, ville: 'Lyon' }, // Lyon
    { latitude: 48.1371, longitude: 11.5754, visibleSurLaCarte: 1, ville: 'Munich' }, // Munich
    { latitude: 43.6045, longitude: 1.4440, visibleSurLaCarte: 1, ville: 'Toulouse' }, // Toulouse
    { latitude: 50.8503, longitude: 4.3517, visibleSurLaCarte: 1, ville: 'Brussels' }, // Brussels
    { latitude: 51.1657, longitude: 10.4515, visibleSurLaCarte: 1, ville: 'Germany' }, // Germany
    { latitude: 48.5734, longitude: 7.7521, visibleSurLaCarte: 1, ville: 'Strasbourg' }, // Strasbourg
    { latitude: 49.4360, longitude: -2.3522, visibleSurLaCarte: 1, ville: 'Sark' }, // Sark
    { latitude: 47.2184, longitude: -1.5536, visibleSurLaCarte: 1, ville: 'Nantes' }, // Nantes
    { latitude: 44.8378, longitude: -0.5792, visibleSurLaCarte: 1, ville: 'Bordeaux' }, // Bordeaux
    { latitude: 43.7057, longitude: -1.2788, visibleSurLaCarte: 1, ville: 'Biarritz' }, // Biarritz
    { latitude: 48.1173, longitude: -1.6778, visibleSurLaCarte: 1, ville: 'Rennes' }, // Rennes
    { latitude: 47.9022, longitude: 1.9099, visibleSurLaCarte: 1, ville: 'Orleans' }, // Orleans
    { latitude: 48.3887, longitude: -4.5262, visibleSurLaCarte: 1, ville: 'Brest' }, // Brest
    { latitude: 44.8376, longitude: -0.5810, visibleSurLaCarte: 1, ville: 'Le Haillan' }, // Le Haillan
    { latitude: 48.4127, longitude: -4.4622, visibleSurLaCarte: 1, ville: 'Guipavas' }, // Guipavas
    { latitude: 48.4663, longitude: -4.4180, visibleSurLaCarte: 1, ville: 'Plouzané' }, // Plouzané
    { latitude: 48.5530, longitude: -4.7388, visibleSurLaCarte: 1, ville: 'Le Conquet' }, // Le Conquet
    { latitude: 47.6100, longitude: -3.9843, visibleSurLaCarte: 1, ville: 'Quiberon' }, // Quiberon
    { latitude: 48.5301, longitude: -4.4080, visibleSurLaCarte: 1, ville: 'Plougonvelin' }, // Plougonvelin
    { latitude: 48.2683, longitude: -3.9832, visibleSurLaCarte: 1, ville: 'Lannion' }, // Lannion
    { latitude: 48.4486, longitude: -4.4426, visibleSurLaCarte: 1, ville: 'Bohars' }, // Bohars
    { latitude: 47.9960, longitude: -4.1024, visibleSurLaCarte: 1, ville: 'Concarneau' }, // Concarneau
    { latitude: 48.0046, longitude: -3.9323, visibleSurLaCarte: 1, ville: 'Fouesnant' }, // Fouesnant
    { latitude: 48.4080, longitude: -4.5992, visibleSurLaCarte: 1, ville: 'Ploumoguer' }, // Ploumoguer
    { latitude: 48.3721, longitude: -4.6122, visibleSurLaCarte: 1, ville: 'Plouzané' }, // Plouzané
    { latitude: 48.3925, longitude: -4.6170, visibleSurLaCarte: 1, ville: 'Plouzané' }, // Plouzané
    { latitude: 48.5422, longitude: -4.5754, visibleSurLaCarte: 1, ville: 'Plouzané' }, // Plouzané
    { latitude: 48.4885, longitude: -4.5612, visibleSurLaCarte: 1, ville: 'Plouzané' }, // Plouzané
    { latitude: 48.5602, longitude: -4.5164, visibleSurLaCarte: 1, ville: 'Plouzané' }, // Plouzané
    { latitude: 48.5559, longitude: -4.5566, visibleSurLaCarte: 1, ville: 'Plouzané' }, // Plouzané
    { latitude: 48.4620, longitude: -4.4139, visibleSurLaCarte: 1, ville: 'Plouzané' }, // Plouzané
    { latitude: 48.4013, longitude: -4.5942, visibleSurLaCarte: 1, ville: 'Plouzané' }, // Plouzané
    { latitude: 48.4219, longitude: -4.5361, visibleSurLaCarte: 1, ville: 'Plouzané' }, // Plouzané
    { latitude: 48.5517, longitude: -4.5434, visibleSurLaCarte: 1, ville: 'Plouzané' }, // Plouzané
    { latitude: 48.5021, longitude: -4.5601, visibleSurLaCarte: 1, ville: 'Plouzané' }, // Plouzané
    { latitude: 48.5589, longitude: -4.5233, visibleSurLaCarte: 1, ville: 'Plouzané' }, // Plouzané  
    // ... Ajoutez d'autres points
];

export { allPoints };
