// Questão 4
/*
import axios from 'axios';

const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        
        console.log(response.data);
    }
    catch {
        console.warn('Usuario não existe');
    }
}

buscaUsuario('hugobrian');
buscaUsuario('hugo brian')
*/



// Questão 3
/*
import axios from 'axios';

class Github {
    static async getRepositories (repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            
            console.log(response);
        } catch {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('hugobrian/jogo-da-velha');
Github.getRepositories('rocketseat/dslkvmskv');
*/



// Questão 2
/*
import axios from 'axios';

async function getUserFromGithub(user){
    
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        document.body.innerHTML = responce;
        console.log(response.data.bio);
    } catch {
        console.log('Usuario não existe')
    }
}

getUserFromGithub('hugobrian');
*/




// Questão 1
/*
    const delay = (segundos) => new Promise(resolve => setTimeout(() => resolve(segundos),1000));
    
    async function umPorSegundo () {
        console.log(await delay('1s'));
        console.log(await delay('2s'));
        console.log(await delay('3s'));
    }
    
    umPorSegundo();
*/



// Aula Axios com Async/await
/*
import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try{
        const response = await axios.get(`https://api.github.com/users/${username}`);
        //document.body.innerHTML += "<img src="+response.data.avatar_url+"></img>"
        console.log(response);
    } catch {
        console.warn('Erro na API')
    }
    }
}

Api.getUserInfo('hugobrian');
*/




// Usando Async/await
/*
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve("OK")}, 2000);
});

async function executaPromise () {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();
*/



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