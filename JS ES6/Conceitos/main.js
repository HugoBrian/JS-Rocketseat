

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