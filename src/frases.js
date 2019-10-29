const frases = [
    "Obedece, sirve, ama y sé excelente. unirse a Dios deben obedecer esta ley. Y esta nunca cambiará.", 
    "El dolor y la calamidad son retos que te dan fuerza interior. Cuando estás en dolor, tus oraciones se vuelven muy fuertes.", 
    "Tu eres la verdad. Cada vez que hablas la verdad con el corazón abierto, esa es la llave al corazón de cada persona.",
    "La compasión no es más que la realización de valores ajustables. Nadie es malo.", 
    "Una flor que no florece no tiene fragancia. Y el corazón de un humano no florece cuando no tiene a Dios", 
    "Si el amor pudiera comprarse, todo el mundo habría pagado mil dólares la libra para comprarlo. Tú sabes que eso no funciona de esa manera.", 
    "Las tres características principales del amor son: donde hay amor, no hay duda; donde hay amor, no hay dolor; donde hay amor, no existe lo imposible."
];

module.exports.generaFrase = function() {
    const fraseIndex = Math.round(Math.random() * frases.length);
    return frases[fraseIndex];
};