/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Funcão global simples
var soma = function (a, b) {
    return a + b;
};
soma(2, 4);

//Passando uma função como parametro
var produto = {nome: 'Sapato', preco: 150};

var formulaImpostoA = function (preco) {
    return preco * 0.1;
};
var formulaImpostoB = function (preco) {
    return preco * 0.2;
};

var calcularPreco = function (produto, formulaImposto) {
    return produto.preco + formulaImposto(produto.preco);
};

calcularPreco(produto, formulaImpostoA);
calcularPreco(produto, formulaImpostoB);

//retornando uma função

var helloWorld = function () {
    return function () {
        return 'Hello World!';
    };
};
console.log(helloWorld);//[Function]
console.log(helloWorld());//[Function]
console.log(helloWorld()());//'Hello World!'

/*
 helloWorld; //[Function]
 helloWorld(); //[Function]
 helloWorld()();//'Hello World!'
 */

// Utilizando a função como método, declarada dentro do objeto

var pessoa = {
    nome: 'João',
    idade: 20,
    getIdade: function () {
        return this.idade;
    }
};

console.log(pessoa);//pessoa = {nome: 'João',idade: 20, getIdade: function () {return this.idade;}};
console.log(pessoa.getIdade);//[Function]
console.log(pessoa.getIdade());//20 

// outro metodo porem a base da função fica fora
var getIdade = function () {
    return this.idade;
};

var pessoa = {
    nome: 'João',
    idade: 20,
    getIdade: getIdade
};
console.log(getIdade()); // undefined
console.log(pessoa.getIdade()); //20

//Invodando uma função com call e apply

// CALL
var getIdade = function () {
    return this.idade;
};

var pessoa = {
    nome: 'João',
    idade: 20,
    getIdade: getIdade
};
console.log(getIdade()); // undefined
console.log(pessoa.getIdade()); //20
console.log(getIdade.call(pessoa));//20

// APPLAY
var getIdade = function (extra) {
    return this.idade + extra;
};

var pessoa = {
    nome: 'João',
    idade: 20,
    getIdade: getIdade
};

console.log(getIdade()); // undefined
console.log(pessoa.getIdade(2)); //22
console.log(getIdade.call(pessoa, 2));//22
console.log(getIdade.apply(pessoa, [2]));//22
/*
 * Obs. caso coloque mais coisas no parentese pode ver elas por meio do comando
 * console.log(arguments);
 * e se colocar a menos vai ficar como undefined
 */

// Funções construtoras  vs. Funções Fábrica

//função fabrica
var criarPessoa = function (nome, idade) {
    return {nome: nome,
        idade: idade
    };
};

console.log(criarPessoa('Pedro', 20));
console.log(criarPessoa('Maria', 30));

//Função Construtora

var Pessoa = function (nome, idade) {
    this.nome = nome,
            this.idade = idade;
};

console.log(new Pessoa('Pedro', 20));
console.log(new Pessoa('maria', 30));

// Closures

//Retornando uma Função dentro de outra função
var helloWorld = function () {
    var message = "Hello World\!";
    return function () {
        return message;
    };
};

var fnHelloWorld = helloWorld();
console.log(fnHelloWorld());// 'Hello World!'

// Encapsulando usandoum objeto

var counter = {
    value: 0,
    add: function () {
        return ++this.value;
    }
};
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var itens = {
    value: [],
    add: function () {
        this.value.push(item);
        return this.value;
    }
};

console.log(itens.add('A'));
console.log(itens.add('B'));
console.log(itens.add('C'));

// Encapsulando usando função

//Usando uma função fabrica

var createCounter = function () {
    var value = 0;
    return{
        add: function () {
            return ++value;
        }
    };
};

var counter = createCounter();
counter.value; //undefined
counter.add(); //1
counter.add(); //2
counter.add(); //3

// Usando função construtora

var Counter = function () {
    var value = 0;
    this.add = function () {
        return ++value;
    };
};
var counter = new Counter();
console.log(counter.value); // undefined
console.log(counter.add()); //1
console.log(counter.add()); //2
console.log(counter.add()); //3

//Module patern

var counter = (function () {
     var value = 0;
    return{
        add: function () {
            return ++value;
        },
        reset: function () {
            value = 0;
        }
    };
})();

console.log(counter.value); // undefined
console.log(counter.add()); //1
console.log(counter.add()); //2
console.log(counter.add()); //3
counter.reset();
console.log(counter.add()); //1

// Jeito diferente

var counter = (function () {
     var value = 0;
     var add = function () {
            return ++value;
        };
        var reset = function () {
            value = 0;
        };
    return{
        add: add,
        reset: reset
    };
})();

console.log(counter.value); // undefined
console.log(counter.add()); //1
console.log(counter.add()); //2
console.log(counter.add()); //3
counter.reset();
console.log(counter.add()); //1

//array forma 1

var carros = [];

// array forma 2

var carros = new Array();// dentro do tamanho vai o tamanho minimo do array, ou as informações diretamente

// comando push (adiciona mais um elemento)

carros.push("Gol");

//comando pop (retira o ultimo elemento)

carros.pop();

//comando unshift (inserir novos elementos no inicio)

carros.unshift('Gol');

//comando shift (retirar o primeiro elemento

carros.shift();

// Localizar o indice de um elemento do ARRAY

carros.indexOf("Corsa");

//remover elementos com SPLICE
// Dentro do parentese a primeira informação é a posição e a segunda a quantidade

carros.splice(1,1);

// Substituindo elementos em uma posição com SPLICE
// Dentro do parentese a primeira informação é a posição, a segunda a quantidade e a terceira a informação que será colocada no lugar

carros.splice(1,1,'Sonic');

//Adicionando elementos com SPLICE
// Dentro do parentese a primeira informação é a posição, a segunda a quantidade e a terceira a nova informação que será adicionada
// na segunda informação nesse caso é obrigatorio o zero
carros.splice(1, 0, "Sonic");

// Iterando em um ARRAY com forEach 
 /*
carros.forEach(function(elemento)){
    //logica de iteração
});
*/

//Exemplo

carros.forEach(function(elemento){
    console.log(elemento);
});

//Obs. é mas simplis do que o for comum

//Filtrando o ARRAY com filter

carros[0] = {marca: "Ford", modelo: "Ka"};
carros[1] = {marca: "Chevrolet", modelo: "Corsa"};
carros[2] = {marca: "Fiat", modelo: "Palio"};

var carrosFord = carros.filter(function(elemento){
    return elemento.marca === "Ford";
});

// Obs: quando usar '===' além de comprado se são iguais compara o tipo
// se usasse '==' o numero '0' e a String '0' são iguais se usar '===' é diferente


// Testando os elementos do ARRay com every
// Verificar se todos os elementos são de um mesmo parametro
//Exemplo: se todos os carros são da marca Ford

var carros = [];

carros[0] = {marca: "Ford", modelo: "Ka"};
carros[1] = {marca: "Chevrolet", modelo: "Corsa"};
carros[2] = {marca: "Fiat", modelo: "Palio"};

carros.every(function(elemento){
    return elemento.marca === "Ford";
});

// Testando os elementos do ARRay com some
// Verificar se há elemntos do parametro

var carros = [];

carros[0] = {marca: "Ford", modelo: "Ka"};
carros[1] = {marca: "Chevrolet", modelo: "Corsa"};
carros[2] = {marca: "Fiat", modelo: "Palio"};

carros.some(function(elemento){
    return elemento.marca === "Ford";
});

//Mapeando os elementos do ARRAY com map

var carros = [];

carros[0] = {marca: "Ford", modelo: "Ka"};
carros[1] = {marca: "Chevrolet", modelo: "Corsa"};
carros[2] = {marca: "Fiat", modelo: "Palio"};

carros.map(function(elemento){
    return elemento.marca;
});

// como saber quantos caracteres tem em cada elemento 

var carros = [];

carros[0] = {marca: "Ford", modelo: "Ka"};
carros[1] = {marca: "Chevrolet", modelo: "Corsa"};
carros[2] = {marca: "Fiat", modelo: "Palio"};

carros.map(function(elemento){
    return elemento.marca.length;
});

// Processando os elementos do ARRAY com reduce
//Acumular 
// Exemplo: descobrir o valor total dos carros

var carros = [];

carros[0] = {modelo: "Ka", preco: 28800};
carros[1] = {modelo: "Corsa", preco: 34750};
carros[2] = {modelo: "Palio", preco: 32000};

carros.reduce(function(prev, cur){
    return prev + cur.preco;;
}, 0);

// Concateando dois ARRAYS com concat

var carros = ["Ka", "Corsa", " Palio"];
var motos = ["Honda", "Yamaha"];

var veiculos = carros.concat(motos);

//Fatiando um ARRAY com slice
//primeira informação no parentese é onde comeca e a segunda onde termina(caso va até o final n precisa da segunda)

var carros = [];

carros[0] = "Ka";
carros[1] = "Corsa";
carros[2] = "Palio";
carros[3] = "Gol";

carros.slice(0,2); //["Ka", "Corsa"]
carros.slice(1,3);//[Corsa", "Palio"]
carros.slice(2);//["Palio", "Gol"]

// Inverter a ordem de um ARRAY com reverse

var carros = [];

carros[0] = "Ka";
carros[1] = "Corsa";
carros[2] = "Palio";
carros[3] = "Gol";

carros.reverse();

carros.toString(); // ["Gol","Palio","Corsa","Ka"]

// ordenando os elementos de um ARRAY com sort

var carros = [];

carros[0] = {modelo: "Ka", preco: 28800};
carros[1] = {modelo: "Corsa", preco: 34750};
carros[2] = {modelo: "Palio", preco: 32000};

carros.sort(function(a,b){
    return a.preco - b.preco;
});

//Juntando os elementos de um ARRAY com join
//O resultado é uma String separada pelo parametro definido no parentese

var carros = [];

carros[0] = "Ka";
carros[1] = "Corsa";
carros[2] = "Palio";
carros[3] = "Gol";

carros.join(";"); // "Ka";"Corsa";"Palio";"Gol"

// gerar um string e quebrar em um ARRAY

carros.join(";").split(";"); 
/* [ 'Ka',
 * 'Corsa,'
 * 'Palio',
 * 'Gol' ]
 */

// como multiplica strings

new Array(10);

new Array(10).join("javaScript");

// EXPRESSÕES REGULARES

var regExp = /"< Expressão regular >"/

//ou

var regExp = new regExp ("< Expressão regular >");

//RegExp API exec e test

// serão 12 passos

//Passo 1; reconhecer o numero de telefone 9999-9999

var regExp = /9999-9999/;
var telefone = "9999-9999";

regExp.exec(telefone);
// fala se reconheceu e em qual indice

var regExp = /9999-9999/;
var telefone = "9999-9999";

regExp.test(telefone);
//responde true or false

//Passo 2: Telefone
//Utilizar a \ para escapar os caracteres especiais para que apareça como ele
var regExp = /\(48\) 9999-9999/;
var telefone = "(48) 9999-9999";

regExp.exec(telefone);
regExp.test(telefone);

//Passo 3: Inicioando e finalizando com um determinado caractere
// Usar ^ para que seja obrigatorio estar no inicio e $ para que seja obrigatorio ele estar no final

//usando o ^
var regExp = /^\(48\) 9999-9999/;
var telefone = "(48) 9999-9999 é o numero de telefone";

regExp.exec(telefone);
regExp.test(telefone);

// usando o $

var regExp = /\(48\) 9999-9999$/;
var telefone = "o numero de telefone é(48) 9999-9999";

regExp.exec(telefone);
regExp.test(telefone);

//usando ambos

var regExp = /^\(48\) 9999-9999$/;
var telefone = "(48) 9999-9999";

regExp.exec(telefone);
regExp.test(telefone); //só sera dado como verdadeiro se estiver cumprindo a exigencia do ^ e do $

// Passo 4: Grupo de caracteres

var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone = "(90) 9761-4568";

regExp.exec(telefone);
regExp.test(telefone);

//Passo 5

/*
 * quantificadores
 * {n} - Quantifica um número específico
 * {n,} - Quantifica um número mínimo
 * {n.m} - Quantifica um número mínimo e máximo
 */

var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
var telefone = "(90) 9761-4568";

regExp.exec(telefone);
regExp.test(telefone);

//Passo 6: 

var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
var telefone1 = "(90) 9761-4568";
var telefone1 = "(90) 94565-7641";

regExp.exec(telefone1);
regExp.test(telefone1);
regExp.exec(telefone2);
regExp.test(telefone2);

//Passo 7: não é obrigatorio o uso de ifen

/*
 * ? - Zero ou um
 * * - zero ou mais
 * + - um ou mais
 */

var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
var telefone1 = "(90) 9761-4568";
var telefone1 = "(90) 94565-7641";

regExp.exec(telefone1);
regExp.test(telefone1);
regExp.exec(telefone2);
regExp.test(telefone2);

// Passo 8: Telefone está em uma tabela

var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

regExp.exec(telefone);
regExp.test(telefone);

//Passo 9: Substituir grupos por meta caracteres

var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{5}-?\d{4}<\/td>)+<\/tr><\/table>/;
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

regExp.exec(telefone);
regExp.test(telefone);

//Passo 10:
//String API
//comando match

var regExp = /\(\d{2}\)\s\d{5}-?\d{4}/;
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

telefone.match(regExp);

/*
 * MODIFICADOIRES
 * i - Case-insensitive matching
 * g - Global matching
 * m - Multline matching
 */

// Passo 11

var regExp = /\(\d{2}\)\s\d{5}-?\d{4}/g;
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

telefone.match(regExp);

//Passo 12:Substituir os telefones da tabela

var regExp = /\(\d{2}\)\s\d{5}-?\d{4}/;
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

telefone.replace(regExp, "telefone");

// Date 'DATA'

//Existem 4 formas

//Forma 1:

var hoje = new Date();

//Forma 2: Usando a referencia em ms da UTC

var natal = new Date(1419465600000);

//Forma 2: usando data em string
//Não é aceito qualquer tipo de data, (A forma da escrita da data Brasileira não é aceita)
var natal = new Date("2014/12/25");// Thu Dec 25 2014 00:00:00 GMT-0200 (BRST)
//ou
var natal = new Date("12/25/2014");// Thu Dec 25 2014 00:00:00 GMT-0200 (BRST)
//não aceita
var natal = new Date("25/12/2014");// Invalid Date

//Forma 3:

//Padrões de data String
//RFC 2822

var natal = new Date("Thu Dec 25 2014 00:00:00 GMT-0200 (BRST)");

//ISO 8601

var natal = new Date("2012-12-25");// 2 horas a menos que o horario pedido (12-24-2014 22:00:00)
//ou 
var natal = new Date("2012-12-25T10:30:00");// 2 horas a menos que o horario pedido(12-25-2014 08:30:00)
//ou
var natal = new Date("2012-12-25T10:30:00Z");// 2 horas a menos que o horario pedido (12-25-2014 08:30:00)
//ou
var natal = new Date("2012-12-25T10:30:00-02:00");// O horaio é correto  

//Forma 4: Passando a data como parâmetro

var natal = new Date(2014,11,25);// 25/12/2014 00:00:00
//ou
var natal = new Date(2014,11,25,10,30,00); //25/12/2014 10:30:00

//Como você faria para inicializar a variável mas?

var generateSerial = function(max){
    max = max || 1000;
    return Math.floor(Math.random()* max);
};

generateSerial(1000);//random number between 0-1000
generateSerial(100);//random number between 0-100
generateSerial(10);//random number between 0-10
generateSerial();//NaN