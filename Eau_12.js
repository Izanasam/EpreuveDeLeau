// PARSING
const arguments = process.argv.slice(2);
const numbers = [];

// GESTION D'ERREUR
const aUnProbleme = () => {
    if (arguments.length < 2) {
        console.error("error");
        return true; // Problème détecté
    }

    for (let i = 0; i < arguments.length; i++) {
        const num = parseFloat(arguments[i]);
        if (!isNaN(num)) {
            numbers.push(num);
        } else {
            console.error("error");
            return true; // Problème détecté
        }
    }

    return false; // Aucun problème détecté
};

// FONCTION
const minimumDiff = () => {
    let minDiff = undefined;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const diff = numbers[i] - numbers[j];
            const absDiff = (diff >= 0) ? diff : -diff;
            if (minDiff === undefined || absDiff < minDiff) {
                minDiff = absDiff;
            }
        }
    }

    return minDiff;
};

// RESOLUTION
const problem = aUnProbleme();
const result = problem ? undefined : minimumDiff();

// AFFICHAGE DE RESOLUTION
if (problem) {
    process.exit(1); // Quitter le programme avec un code d'erreur
} else {
    console.log(result);
}


