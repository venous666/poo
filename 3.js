let pessoa1 = {

    nome: 'Ana Beatriz',
    idade: 17
}

let pessoa2 = {
    nome: 'Maria Eduarda',
    idade: 18

}
console.log('Dados da primeira pessoa:\nNome:',pessoa1.nome,'\n', 'Idade:'+ pessoa1.idade + '\n'+ 'dados da segunda pessoa:\nNome:',pessoa2.nome,'\n', 'Idade:'+ pessoa2.idade)

if (pessoa1.idade> pessoa2.idade) {
    console.log('pessoa mais velha: Ana Beatriz')
    
}
else{
    console.log('pessoa mais velha: Maria Eduarda')
}