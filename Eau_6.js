  //PARSING
    const phrase1 = process.argv[2];
    const phrase2 = process.argv[3];
//GESTION DES ERREURS
const aUnProbleme = () => {
    if ( !isNaN(phrase1) || !isNaN(phrase2)) {
          return false;
    }
}
//FONCTION
  const string = () => {

        var str = 1;

    for (var i = 1; i < phrase1.length - 1; i++) {
        for (var j = 1; j < phrase2.length - 1; j++){

            if (phrase[i] === phrase2[j]) {

                str++;
            }  
        } 
    }
            if (str === phrase2.length) {

            console.log("true")

        }   else {

            console.log("false")
    }
    }
//RESOLUTION
const result = 
    string(phrase1, phrase2);
    const problem = aUnProblement(phrase1, phrase2, result);
   //AFFICHAGE DE RESOLUTION
   if (!problem) {
    console.log("-1");
   } else {
    console.log(result);
   }
   


