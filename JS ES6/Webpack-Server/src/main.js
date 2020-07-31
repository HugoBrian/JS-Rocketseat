const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve("OK")}, 2000);
});

async function executaPromise () {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();

// Sem Async/await
/*
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve("OK")}, 2000);
    setTimeout(() => { reject("not OK")}, 2100);
});

minhaPromise()
.then(response => {
    console.log(response);
})
.catch(err => {
    console.log(err);
});
*/

// Exercicios: Modulo 02
/*
import Usuario, {idade as IdadeUsuario} from './funcoes';

Usuario.info();
console.log(IdadeUsuario)


import ClasseUsuario from './funcoes';

ClasseUsuario.info();


import {idade} from './funcoes';

console.log(idade);
*/