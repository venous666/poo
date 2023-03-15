class Animal{
    constructor(n,c,p,cr,a,v){
    this.nome = n,
    this.cor = c,
    this.patas = p,
    this.comprimento = cr,
    this.ambiente = a,
    this.velocidade = v

}
}
class Peixe extends Animal{
    constructor(n,c,p,cr,a,v,ca){
        super(n,c,p,cr,a,v)
        this.caracteristica = ca
        
    }
}
class Mamifero extends Animal{
    
    constructor(n,c,p,cr,a,v,af){
        super(n,c,p,cr,a,v)
        this.alimento = af
    }
}

let tubarao = new Peixe('Tubarão','cinzento',0,'300cm','mar','1.5m/s','barbatanas') 
let camelo = new Mamifero('camelo','amarelo', '4','150','terra','2.0m/s')
let urso_canada = new Mamifero('urso canada','vermelho','4','180cm','terra','0.5m/s','mel')
console.log(tubarao)
console.log(camelo)
console.log(urso_canada)
