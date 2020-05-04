import def, { name,edad } from './moduloDos.mjs'//Puedes importar varios elementos de nombre pero obviamente solo un default

console.log(def,name,edad);

//Crear server estatico con node
/*
npm install -g node-static
y command static en la carpeta raíz del proyecto
*/

//ITERADOR

let iterador = {//Creacion de objeto iterador con JSON
    currentValue: 1, //Para contar de 1 al 5
    next(){//Para ser considerado un iterador debe tener un metodo next()
        let result = {value:null,done:false};//Y ese metodo debe retornar el valor value y done
        //value nos indica que retorno, puede ser una funcion, objeto, valor, etc.
        //done nos dice si se termino la iteracion

        //Estos iteradores no puede volverse a iterar
        if(this.currentValue > 0 && this.currentValue <= 5){
            result = { value: this.currentValue, done:false};
            this.currentValue += 1;
        }else{
            result = {done:true};
        }
        return result;
    }
};

let item = iterador.next(); //Se ejecuta y la variable currentValue hace para saber si hemos terminado o no

while(!item.done){
    console.log(item.value);
    item = iterador.next();
    
}

//GENERADOR
// Son funciones que en palabras simples puedes pausar o detener a media ejecucion para en un momento despues reanudarlas.
//No tienes que cidar el estado como en lo iteradores con done:true | false.

//Yield respeta el protocolo de iteradores y es el que se encarga del estado de iteracion "done: true | false"
// Por lo tanto aunque se manera explicita no veamos los inidicadores nos retorna value y se actualiza done gracias a yield.

// Mismo ejemplo de arriba pero con generadores

function* counter(){//* hace la funcion en generadora
    for(let i = 1;i<= 5; i++){
        yield i; //yield y lo que devuelve
    }

    //Usar return en lugar de yield termina el generador porque lo marca como done:true
    //Y si pongo otro yield no los hara nunca, y aque return lo finaliza.
    //return algo;
    //yield 5 -> esta linea nunca se ejecutara detras del return

}

let generator = counter();

function* retornador(){
    yield* counter();//Puede selegar generadores
    //Hasta que counter no termine no se regresara a retornador
    console.log('Regrese');
    yield 3;
}

let g = retornador();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());



