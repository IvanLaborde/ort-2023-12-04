const {Texts} = require('../db/models')
//const utils = require('../utils/utils')

async function getTextoByID(id) {
    let aux = await Texts.findByPk(id)
    aux.total_length = contarCaracteres(aux.text)
    aux.words_count = contarEspacios(aux.text)
    aux.paragraphs_count = contarPuntos(aux.text)
    let texto = filtrado(aux)
    console.log(texto)
    return texto
}

function contarCaracteres(texto) {
    return texto.length
}

function contarEspacios(texto) {
    var espacio = /\s/g; 
    var matches = texto.match(espacio); // retorna un array con todas las coincidencias, es decir, con todos los espacios.
    return matches ? matches.length : 0; 
}

function contarPuntos(texto) {
    var punto = /\./g;
    var matches = texto.match(punto); // retorna un array con todas las coincidencias, es decir, con todos los puntos.
    return matches ? matches.length : 0; 
}

function filtrado(texto){
    if (texto) {
        texto = texto.get({ plain: true }); 
        Object.keys(texto).forEach(key => 
            (key === 'createdAt' || key === 'updatedAt' || key === 'id') && delete texto[key]
        ); // Borro el atributo createdAt, updatedAt y id para que no se muestren en el json
    }
    return texto
}

module.exports = {
    getTextoByID,
    contarCaracteres,
    contarEspacios,
    contarPuntos,
    filtrado,
}