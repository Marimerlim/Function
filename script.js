//Desafio 04 

//1 - crie uma função que exiba uma mensagem no console
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) 
//    e exiba no console
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

//*Bônus:
//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função


console.log('------------1-------------')
//1 - crie uma função que exiba uma mensagem no console

function mensagem(){
    console.log('É muita coisa para lembrar. Só me faz refletir sobre as capacidades de armazenamento so cérebro humano')
}
mensagem();


console.log('------------2-------------')
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function meuNome (Mariana){
    console.log(Mariana)
}
meuNome('Mariana Merlim');


console.log('------------3-------------')
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) 

function apresentacao(nome, idade, estiloMusical){
    return `Meu nome é ${nome}, tenho ${idade} anos e gosto de ouvir ${estiloMusical} ` 
}
console.log(apresentacao('Mariana', 19, 'Rock Indie (Imagine Dragons)'))


console.log('------------4-------------')
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function preferido(filme, musica){
    return `Meu filme preferido é ${filme} e a música que mais gosto de ouvir é ${musica} ` 
}
console.log(preferido('Kung Fu Panda 1, 2 e 3, se tiver, 4 e 5', "todas as 31 musicas dos 5 albuns do Imagine Dragons (atual, porque tem outro album pra lançar dia 1/07)"))


console.log('------------5-------------')
//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(numero){
    return numero * 3; 
}
console.log(triplo(3))
console.log(triplo(30))
console.log(triplo(300))
