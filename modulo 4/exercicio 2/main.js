var repos = [];

var list = document.querySelector('ul#listRepos');


function searchUser() {
    var user = document.querySelector('input#inUser');
    axios.get('https://api.github.com/users/'+user.value+'/repos')
    .then(function(response){
        addRepo(response);
    })
    .catch(function(error){
        alert('User not found');
    });
    user.focus();
}

function renderList() {

    list.innerHTML = '';

    for(repo of repos){
        var repoElement = document.createElement('li');
        var repoText = document.createTextNode(repo);

        repoElement.appendChild(repoText);

        list.appendChild(repoElement);
    }
}

function addRepo(response) {
    repos = [];
    for(names of response.data){
        repos.push(names.name);
    }
    renderList();
}