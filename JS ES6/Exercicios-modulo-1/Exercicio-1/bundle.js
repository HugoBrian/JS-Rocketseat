"use strict";

// Questão 3
//3.1
var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
}); //3.2

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(aluno) {
  return aluno.idade;
}; //3.3


var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); //3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolved();
  });
}; // Questão 2

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
