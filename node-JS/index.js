// //CALLBACK
// const request = require('request');

// request('http://google.com',function(){
//     console.log('Termine la peticion de google');
// })

// console.log("Voy hasta el final.")


// //PROMESAS Mejores que callbacks y más usadas en la insdustria
const rp = require('request-promise');

// //fullfiled
// //rejected
// //pending
// //setled

// rp('http://google.com').then(function(html){
//     console.log("Termine la peticion de google");
//     }).catch(function(err){console.log(err);
//     })


//Como crear una promesa
const request = require('request');

// function asincrona(){
//     return new Promise(function(resolve,reject){// Creamos el objeto promise y dentro va una funcion (Llamada executor) con dos argumentos
//         resolve('Todo salio Bien') //resolve y rejecta por si se cumple o no la promesa

//         reject(new Error('No se pudo completar'));
//     }
// }

function leer(url){
    return new Promise(function(resolve,reject){
        request(url, function(err, response))
    })
}

//PROMESAS MULTIPLES
//Se usa en pedido a base de datos, de varias consultas
let p1 = new Promise((resolve, reject)=> setTimeout(resolve,500,'hola mundo') );
let p2 = new Promise((resolve, reject)=> setTimeout(resolve,600,' segundo hola mundo') );
let p3 = Promise.reject();

let saluda = ()=> console.log('hola a todos');

Promise.all([p1,p2,p3]).then(resultados=>{//En all se recibe un arreglo con las funciones o promesas a ejecutar, 
    console.log(resultados);//si una falla ya no se realiza el .then
    saluda();
}).catch(()=> console.log('falle: (' ) );
//NOTA quitando p3 del arreglo podemos ver los resultados de las promesas anteriores.

//ENCADENAR PROMESAS
//Por ejemplo primero se logea despues se píden sus datos del feed de face

// Tomas el resultado de la primerra y lo usas de entrada en el argumento de la otra.

function calcular(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,400,5);
    })
}

function SegundoCalculo(numero){
    console.log(numero);
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,200,'segunda promesa');
    })
}

calcular().then(SegundoCalculo).then(console.log);
//Ejemplo
//calcular().then(SegundoCalculo).then(TerceraFuncion);
//Se envia la funcion sin () para quenno se ejecute.


