//Tener .mjs es solo por cosenso de la insdustria, para archivos que seran modulos
//Bien exporta o importa, se considera modulo.

export const name = 'Héctor';
export const edad = 34;

let valorPorDefecto = 23;
valorPorDefecto = 1651651;

export default valorPorDefecto;//Valor por defecto solo existe uno en el modulo

// READONLY
//Todo elemento que importo es readonly en los archivos a los que lo importe
//El valor de una variable que exporto solo puede ser cambiada dentro del modulo donde fue creada.

//