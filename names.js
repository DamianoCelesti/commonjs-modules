//creo una funzione che accetta due parametri
function nomi(firstName, lastName) {
    return {
        nome: firstName,
        cognome: lastName
    };
}


// const persona = nomi('dada', 'didi')
// console.log(persona);



module.exports = {
    nomi
};