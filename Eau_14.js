//PARSING
var array = process.argv.slice(2);
//GESTION D'ERREUR
const aUnProblem = () => {
 if (array.length === 0 || isNaN(parseInt(array))) {
	return true;
}
return false;
}
//FONCTION
const my_select_sort = (array) => {

	for (var i = 0; i < array.length - 1; i++) {	
		for (var j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				[array[i], array[j]] = [array[j], array[i]];
}
}
 
}

return array;
}
//RESOLUTION

const result = my_select_sort(array);
const problem = aUnProblem();

//AFFICHAGE DE RESOLUTION

if (problem) {
	console.log("error");
	process.exit(1)
} else {
	console.log(result);
}

