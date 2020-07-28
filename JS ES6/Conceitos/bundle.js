//Aula Object Short Syntax

/*
const nome = 'Diego';
const idade = 23;

const usuario = {
    nome,
    idade,
    empresa: 'Rocketseat',
};

console.log(usuario);
*/
//Aula Template Literals

/*
const nome = 'Diego';
const idade = 23;

console.log('Meu nome é '+nome+' e tenho '+idade+' anos')
console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
*/
// Aula rest e spread

/*
//REST

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const { nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2 ,3 , 4];

const [a, b , ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(3,4,5));

//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat',
};

const usuario2 = { ...usuario1, nome: 'Gabriel'};

console.log(usuario2)
*/
// Aula Desestruturação

/*
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

const {nome , idade, endereco: {cidade}} = usuario;

console.log(nome , idade, cidade);

function mostraNome({nome}){
    console.log(nome);
}
mostraNome(usuario)
*/
// Aula Valores Padrão

/*
const soma = (a = 0, b = 0) => a + b;

console.log(soma(1));
console.log(soma());
*/
// Aula Arrow Functions 

/*
const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({ nome: 'Hugo'});

console.log(teste());
*/
// Aula Operações em Array

/*
const arr = [1, 3, 4, 5, 8, 10];

const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum); 

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 5;
});

console.log(find);
*/
//Aula const e let

/*
function teste(x){
    let y = 2;

    if (x > 5){
        y=4;
        console.log(x,y);
    }
}

teste(10)

*/

/*const usuario = { nome:'Hugo'};

usuario.nome = 'Brian';

console.log(usuario.nome);
*/
//Aula classes

/*
class Matematica{
    static soma(a,b){
        return a+b;
    }
}
console.log(Matematica.soma(3,2))
*/

/*
class TodoList {
    constructor() {
        this.todos = [];
    }

    static addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

TodoList.addTodo();

*/

/*class List {
    constructor() {
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List{
    constructor(){
        super();
        this.usuarios = 'Hugo';
    }

    mostraUsuario() {
        console.log(this.usuarios);
    }
   
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
    
}*/
"use strict";
