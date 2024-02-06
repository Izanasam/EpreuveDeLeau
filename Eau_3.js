//GESTION DES ERREURS
const problem = (phrase) => {
    if (phrase == null || phrase == undefined || phrase.length == 0) {
     return true;
    }
    return false;
    }

//FONCTION 
const parameterInverted = () => {
    let phraseInversed = [];
    for (let i = phrase.length - 1; i >= 0  ; i--) {
        
        phraseInversed.push(phrase[i]);
    }
    return phraseInversed;
}

//PARSING 
const parsing = () => {
    return process.argv.slice(2);
   
}
//RESOLUTION
const phrase = parsing();
const aUnProbleme = problem(phrase);
const result = parameterInverted();


//AFFICHAGE RESOLUTION
if (aUnProbleme) {
    console.log("error");
} else {
    result.forEach(element => {
        console.log(element);
    });
}
