class Animal {
    constructor(nome,especie, idade, cor){
        this.nome = nome,
        this.especie = especie,
        this.idade = idade,
        this.cor = cor
    } 
    comer(){
        console.log('o animal come todo dias as 4hrs da tarde')
    }
    passear(minutos){
        console.log('o(a) ' + this.nome+' passeia '+ minutos + ' minutos')
    }
}
class Mamifero extends Animal{
    constructor(nome,especie, idade, cor,patas){
        super(nome,especie, idade, cor)
        this.patas = patas
    } 
    andar(km){
       return 'o cachorro andou '+ km + ' kms'
    }
    mamar(hr){
        console.log('o(a) ' + this.nome+' mama por '+ hr + ' hrs')
    }
}
class Ruminantes extends Animal{
    constructor(nome,especie, idade, cor,estomagos){
        super(nome,especie, idade, cor)
        this.estomagos = estomagos
        
    } 
    digerir(min){
        console.log('a '+ this.nome + ' digeriu a grama em ' + min + ' minutos ')
    }
    passear(){
        return('o animal sai para passear as 5hrs da tarde')
    }
}

let porquinho = new Animal ('zequinha', 'da india',6,'rosa')
let cachorro = new Mamifero ('nina','cachorro', 1, 'branca', 4 )
let vaca = new Ruminantes ('kelly','vaca',5,'preta',4)

console.log(cachorro.andar(10))
cachorro.mamar(1)
porquinho.passear(5)
vaca.digerir(135)
console.log(porquinho,cachorro,vaca)