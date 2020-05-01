// // alert("Hola, soy molesto"); // Aparece en el navegador

// //Input
// // let messg = prompt();
// // console.log(messg); //Output en consola.

// //Tipado dinamico como python
// let nombre = "Héctor" //Mejor usar este tipo.
// var apellido = "Delgado" //Otra forma de declarar variables.
// const PI = 3.1416 //constante

// // Documentacion 3WSchool
// Math.pow(10,3);
// console.log(Math.sqrt(2));

// //Boleano
// let bol0 = new Boolean(1);
// console.log(bol0.toString());

// let bol = new Boolean(0);
// console.log(bol);

// //Aquí no se limita a un true o false
// //undefined, NaN, null, 0, -0, "", false == FALSE
// //true, 1, "Cadena Llena", 124645 == TRUE

// //Operadores de comparación
// let var24 = 24;

// var24 == "24"; //True 
// var24 == 24; //True en ambos el tipo de dato no importa solo el valor o contenido

// var24 === "24";//False El tipo de dato es diferente, a pesar de contener el mismo valor nos da falso. 
// var24 === 24;//True

// var24 !== 24;
// var24 !== "24";

// //Comparadores Logicos && || !True !False

// //IF
// if (23 == 24 || 35 ===35) {
//     console.log(var24 + " if ");
// }else if (false) {
//     console.log(var24 + " else if");
// }else{
//     console.log(var24 + " else");
// }

// let opt = 1;
// switch (opt) {
//     case 1:
//         console.log("Caso 1");
//         break;

//     default:
//         console.log("Default");
//         break;
// }

// for (let i = 0; i <= 5; i++) {
//     if (i%2==0) continue; // Deja solo los pares. 
//     //continue deja seguir el ciclo. 

//     console.log(i)
// }
// let u = 1;
// while (u <= 10) {
//     u++;
//     console.log("Ciclo While");
// }

// do {
//     console.log("DO While")
//     u=12;
// } while (u == 11);

// console.log(typeof bol);

// undefined // variable no definida. Puede ser un tipo de dato.
// null // Variable designada pero vacia, es un tipo de dato, es un objeto.

// null //Ausencia de valor.
// undefined // Valor de una variable sin definir.
// NaN//NonANumber suma entre string y number da NaN.
// 100/0 //Infinity.


//Sabwer si es par o inpar
// n1 = prompt("Coloca un numero");

// if(n1%2 == 0){
//     console.log("Numero Par")
// }else{
//     console.log("Numero Inpar")
// }

//Operacions basicas
// n2= prompt();
// console.log(n1 + n2);
// console.log(n1 - n2);
// console.log(n1 / n2);
// console.log(n1 * n2);

//Fibonacci

// let a=0;
// let b=1;
// let c;

// for (let i=0; i<=n1; i++) {
//     c=a+b;
//     a=b;
//     b=c;
//     console.log(c);
//}
// let magicIn;
// const magia=parseInt(Math.random()*100);

// while (true) {
//     if (magia < magicIn) {
//         magicNum = prompt("El num mágico es mayor");        
//     }else if(magia > magicIn){
//         magicNum = prompt("El num mágico es menor");
//     }else{
//         console.log("Felicidades lo conseguiste");
//         break;
//     }
// }

//Bien hecho
// let MagicIn;
// const magia=parseInt(Math.random()*100);
// while(1){
//    MagicIn=prompt('Adivina adivinador:');
//   if(MagicIn<magia){
//     console.log('el número es mas arriba');
//   }else if(MagicIn>magia){
//     console.log('el número es mas abajo');
//   }
//   else{
//     console.log('Adivino!!');
//     break;
//   }
// }

//Funciones
// function saluda() {
//     console.log("Hola Developer");
// }

// function cuadrado(numero) {
//     return numero * numero;    
// }

// saluda();
// let sqrt2 = cuadrado(2);
// console.log(sqrt2);

//Si no tenemos retun, nos da undefinied.


//Funciones anonimas
//function(){}

//Ejemplo del uso de SCOPE
// var nombre = 'Héctor'; //VAR en SCOPE grlobal.

// function funcion_nombre() {
//     var nombre = 'Abiel';//VAR creada en scope local y muere y vive con la función
//     console.log(nombre);
// }

// funcion_nombre();

// console.log(nombre);

//Es posible crear variables sin let o var pero no es bueno hacerlo
//ya que automaticamente se asignan al scope global.

//Diferencia entre: var | let | const

//const 
//Para constantes.

//let
/*Pensar en usar let primero, porque se añade solo al scope local
y aun mas especifico al bloque donde se creo.
Por ejemplo si declaras let dentro de una funcion solo funciona 
dentro de está. Y si la declaracion es con let en un condicional 
o ciclo, solo la puedes usar en esa seccion, aunque esa condicion o ciclo
se encuentre dentro de una función.
*/

//var
/*Cuando requieras variables globales o locales en funciones pero 
usables en todo lo que la funcion contenga no solo en un bloque.
*/

// var scope_global;
// function dif_var_let() {
// var scope_local_de_funcion0;
// let scope_local_de_funcion1;
// if(false){
//     let scope_local_del_if = true;
//     console.log("Solo trabaj en el if.");
// }
    
// }

//Parametro el que se espera
//Los parametros no tiene tipo, puedes mandar int o string etc, sin problemas

function suma(parametro_el_num = 0) {
    return parametro_el_num + parametro_el_num;
}

//Argumento el que se envia.
//Podemos no enviar nada o muchos mas de lo que se piden
//Se hace undefinied (podemos definirla para evitar bugs) y NaN
//Restriccion al poner valores default
//Los que tinene deben ir despues de loa que no.
//ejemplo
// function hola(nombre = "",apellido){} MAL
// function hola(apellido,nombre = ""){} BIEN

// suma(50);

// //JS es flexible con la cantidad de argumentos que le pueden enviar a una funcion

// function sumaTodosLosQueQuieras(){
//     return arguments[0] + arguments[1] + arguments[2]
// }

// console.log(sumaTodosLosQueQuieras(1,2,5,6,7));


// function ejectar_otra(funcion) {
//     funcion();    
// }

// function hola() {
//     console.log("Hola");
// }

// ejectar_otra(hola);

function executor(funcion) {
    funcion();    
}

executor(function(){
    console.log("Hola");
});

//Funciones, variables son ciudadanos de primera clase
//es decir se puede enviar como argumentos

//Checar this o contexto.

//Arrow Function
let demo = () =>{
    console.log("Arrow fuction");
}
demo();

//Su mandamos llamar una funcion dentro de otra y queremos 
// mantener el contexto en this, es mejor usar => para mantener 
// this con el contexto del a primera y así concervara los atrubutos 
// de la primera