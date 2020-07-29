// Questão 7

/*
const nome = 'Diego';
const idade = 23;

const usuario = {
    nome,
    idade,
    cidade: 'Rio do Sul',
};

console.log(usuario);
*/
// Questão 6

/*
const usuario = 'Diego';
const idade = 23;

console.log(`O usuário ${usuario} possui ${idade} anos`);
*/
// Questão 5

/*
//5.1
const arr = [1,2,3,4,5,6];
const [x, ...y] = arr;

console.log(x);
console.log(y);

function soma(...x){
    return x.reduce((total, next) => total + next);
}

console.log(soma(1,2,2,2,10,20,100));
//5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};

console.log(usuario2);

const usuario3 = {...usuario, endereco:{cidade: 'lontras'}};

console.log(usuario3);
*/
// Querstão 4

/*
//4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nome, endereco: {cidade}, endereco: {estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

//4.2

function mostraInfo(usuario) {
    const {nome,idade} = usuario;
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({nome: 'Diego', idade: 23}));
*/
// Questão 3

/*
//3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

//3.2
const usuario = {nome: 'Diego', idade: 23};
const mostraIdade = aluno => aluno.idade;

//3.3
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome,idade}) ;

console.log(mostraUsuario(nome,idade)); 
console.log(mostraUsuario(nome));

//3.4
const promise = () => new Promise( (resolve,reject) => resolved())
*/
// Questão 2

/*
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];


const idades = usuarios.map(usuario => usuario.idade);

console.log(idades);

const maiores = usuarios.filter( usuario => usuario.idade>18 && usuario.empresa == 'Rocketseat');

console.log(maiores);

const google = usuarios.find(usuario => usuario.empresa == 'Google');

console.log(google);

let especiais = usuarios.map(function(usuario){
    usuario.idade = usuario.idade * 2;
    return usuario;
});

especiais = especiais.filter(usuario => usuario.idade<=50);

console.log(especiais)
*/
// Questão 1

/*
class Usuario {    
    constructor(email,senha){
        email;
        senha;
        this.admin = false
    }
    isAdmin() { 
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(){
        super();
        this.admin = true;
    }
    
}


const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
 */
"use strict";
