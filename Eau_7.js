//PARSING
var string = process.argv.slice(2);
var resultat = " ";



//FONCTION
const Maj = (string) => {

    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < string[i].length ; j++) {
            if (j === 0) {
    
          resultat += " "+string[i][j].toUpperCase();

         } else {
          resultat += string[i][j];
         }
}
    }
    return resultat;

}
//GESTION D'ERREUR
const aUnProblem = (string) => {
    if (!isNaN(string) || string === " "){
        return true;
    }
    return false;
}
//RESOLUTION 
const result = Maj(string);
const problem = aUnProblem(string);
//AFFICHAGE DE RESOLUTION
if (problem) {
    console.log("erreur")
}else{
    console.log(result);
}
