//PARSING
const args = process.argv.slice(2);
//FONCTIONS
const estPremier = (nombre) => {
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return nombre > 1;
};

const prochainPremier = (nombre) => {
    let nombreSuivant = nombre + 1;
    while (!estPremier(nombreSuivant)) {
        nombreSuivant++;
    }
    return nombreSuivant;
};
//RESOLUTION
if (args.length !== 1 || isNaN(args[0])) {
    console.log('-1');
} else {
    const nombreFinal = parseInt(args[0]);
    const resultat = prochainPremier(nombreFinal);
    console.log(resultat);
}


