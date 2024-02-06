// PARSING
var chiffres = process.argv.slice(2);
var a = parseInt(chiffres[0]);
var b = parseInt(chiffres[1]);

// FONCTION
const between = (a, b) => {
  
    let resultat = "";

    if (a < b) {
        
        while (a + 1 < b) {
            a++;
            resultat +=  " "+a + " ";
        }
    } else {
        
        while (b + 1 < a) {
            b++;
            resultat += " "+b + "";
        }
    }

    return resultat;
};

// GESTION D'ERREUR
const aUnProbleme = () => {
    if (isNaN(a) || isNaN(b)) {
        return true;
    }
    return false;
};

// RÉSOLUTION
const result = between(a, b);
const problem = aUnProbleme();

// AFFICHAGE DE LA RÉSOLUTION
if (problem) {
    console.error("error");
    process.exit(1);
} else {
    console.log(result);
}


