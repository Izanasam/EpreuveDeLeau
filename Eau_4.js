// PARSING
let fib = [0, 1];
var index = process.argv[2];

// FONCTION
const fibonacci = () => {
    for (let i = 2; i < 50; i++) {
        const fib_next = fib[i - 1] + fib[i - 2];
        fib.push(fib_next);
    }
    return fib;
}

// GESTION DES ERREURS
const aUnProblem = () => {
    if (isNaN(index) || index < 0 || index === undefined) {
        return true;
    }
    return false;
}

// RESOLUTION
const result = aUnProblem() ? -1 : fibonacci(index);

// AFFICHAGE DE RESOLUTION
console.log(result[index]);
