//PARSING
var args = process.argv.slice(2);
//GESTION DES ERREURS
const aUnProbleme = () => {
if (args.length < 2 || !isNaN(parseInt(args))) {
    return true;
}
return false;
}
//FONCTION

const ASCII = (args) => {

for (var i = 0; i < args.length - 1; i++) {
    for (var j = i + 1; j < args.length; j++) {
        if (args[i] > args[j]) {

            [args[i], args[j]] = [args[j], args[i]];
        }
    }
}
return args;
}
//RESOLUTION
const result = ASCII(args);
const problem = aUnProbleme(result);
//AFFICHAGE DE RESOLUTION
if (problem) {
    console.log("error");
} else {
    console.log(result)
}

