import api from './api';


class App {
    constructor () {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');
        

        this.registerHandlers();
        }

        registerHandlers() {
            this.formEl.onsubmit = event =>             this.addRepository(event);
        }

        setLoading(loading = true) {
            if(loading === true) {
                let loadingEl = document.createElement('span');
                loadingEl.appendChild(document.createTextNode('Carregando'));
                loadingEl.setAttribute('id', 'loading');

                this.formEl.appendChild(loadingEl);
            } else {
                document.getElementById('loading').remove();
            }
        }

        async addRepository(event) {
            event.preventDefault();

            const repoInput = this.inputEl.value;

            if (repoInput.length === 0)
                return;

            this.setLoading();

            try{
                const response = await api.get(`/repos/${repoInput}`);

                const { name, description, html_url, owner: {avatar_url} } = response.data;

                this.repositories.push({
                    name,
                    description,
                    avatar_url,
                    html_url,
                });

                this.inputEl.value = '';

                this.render();
            }
            catch (err){
                this.inputEl.value = '';
                alert('O repositório não existe!')
            }
            this.setLoading(false);
        }


        render() {
            this.listEl.innerHTML = '';

            this.repositories.forEach(repo => {
                let imgEl = document.createElement('img');
                imgEl.setAttribute('src', repo.avatar_url);

                let titleEl = document.createElement('strong');
                titleEl.appendChild(document.createTextNode(repo.name));

                let descriptionEl = document.createElement('p');
                descriptionEl.appendChild(document.createTextNode(repo.description));

                let linkEl = document.createElement('a');
                linkEl.setAttribute('target', '_blank');
                linkEl.appendChild(document.createTextNode('Acessar'));
                linkEl.setAttribute('href', repo.html_url);

                let listItemEl = document.createElement('li');
                listItemEl.appendChild(imgEl);
                listItemEl.appendChild(titleEl);
                listItemEl.appendChild(descriptionEl);
                listItemEl.appendChild(linkEl);
        
                this.listEl.appendChild(listItemEl);


            });
        }
}

new App();

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