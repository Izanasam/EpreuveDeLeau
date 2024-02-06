//PARSING
var argument = process.argv.slice(2);
var indexAtrouver = argument[argument.length - 1];
//GESTION D'ERREUR
const aUnProbleme = () => {
    if (argument.length == 0){
        console.error("error");
        process.exit(1);
    }
if (!isNaN(argument) || result == 1) {
return true;}

return false;
}
//FONCTION
const index = (argument, indexAtrouver) => {
    let indexTrouver = "";
    for (let i = 0; i < argument.length; i++) {
        if (argument[i] === indexAtrouver) {
            indexTrouver += [i];
            break;
        }
    }
    return indexTrouver;
} 
//RESOLUTION
const result = index(argument, indexAtrouver);
const problem = aUnProbleme(argument, indexAtrouver);

//AFFICHAGE DE RESOLUTION
if (problem) {
    console.log("-1")
} else {
    console.log(result);
}


