const {nomi} = require("./names.js");
const {hobbies} = require("./hobbies.js");



function personaHobby() {
    return {
        persona: nomi('mario', 'rossi'),
        hobby: hobbies('calcio', 'bici', 'carte')
    };
}
console.log(personaHobby());
