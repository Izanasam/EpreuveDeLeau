//PARSING
var string = process.argv[2];

//FONCTION
function minToMaj (string) {
    var resultat = "";
for (let i = 0; i < string.length; i++) {
    
    if (i%2 == 0) {
     resultat += string[i].toUpperCase();
    }
    else {
     resultat += string[i];
    }
}
return resultat;
}

//GESTION D'ERREUR
const aUnProblem = () => {
    if (!isNaN(string)) {

        return true;
    }
}
//RESOLUTION
const result = minToMaj(string);
const problem = aUnProblem(string);
//AFFICHAGE DE RESOLUTION
if (problem) {
    console.log("error")
} else {
    console.log(result);
}
