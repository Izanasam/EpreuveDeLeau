// PARSING
var chiffre = process.argv.slice(2);

// FONCTION
const chiffreOnly = () => {
    let resultat = "";
    for (var i = 0; i < chiffre.length; i++) {
        for (var j = 0; j < chiffre[i].length; j++) {
            resultat += chiffre[i][j];
        }
    }
    return resultat;
}

// GESTION D'ERREUR
const aUnProbleme = () => {
    const result = chiffreOnly();

    for (var i = 0; i < result.length; i++) {
        if (result[i] < '0' || result[i] > '9') {
            console.error("error");
            process.exit(1);
        }
    }
    return false;
}

// RÉSOLUTION
const problem = aUnProbleme();

// AFFICHAGE DE LA RÉSOLUTION
if (problem) {
    console.log("false");
} else {
    console.log("true");
}
