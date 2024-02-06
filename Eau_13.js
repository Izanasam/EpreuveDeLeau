//PARSING
var array = process.argv.slice(2);

//GESTION D'ERREUR
const aUnProblem = () => {
for (let i = 0; i <= array.length; i++) {
    if (isNaN(array[i]) || array.length <= 1) {
        return true;
    }
    return false;
}

}
//FONCTION
const my_bubble_sort = (array) => {
    var result = true; 
    for (let i = 0; i < array.length - 1; i++) {
        result = true; 
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j + 1] < array[j]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                result = false;
            }
        }
    }
   return array;
}
//RESOLUTION
const result = my_bubble_sort(array);
const problem = aUnProblem();

//AFFICHAGE DE RESOLUTION
if (problem) {
    console.log("error");
    process.exit(1);
} else {
    console.log(result);
}







    