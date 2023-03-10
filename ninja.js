// //1
// class Animal{
//     //construtor
//     constructor(n, i){
//      this.nome = n // nome = atributo do animal
//      this.idade = i
//     }latir(){
//         console.log('faz o L')
//     }correr(km){
//         console.log('correu'+ km + 'km')
//     }
//     beber(ml){
//         console.log('bebeu'+ml+ 'mls de agua');
//     }comer(comida){
//         return 'Comeu toda a comida' + comida
//     }
// }

// let dog = new Animal('Nina',1)
// let dog2 = new Animal('cacau',3)

// console.log(dog)
// console.log(dog2)
// dog.latir()
// dog.correr(7)
// dog.beber(450)

// console.log(dog.comer('meia'))

// class Ninja{
//     constructor(n, e){
//         this.nome = n,
//         this.estrela = e,
//         this.vivo = true
//     }
//     AtirarShuriken(inimigo){
//         if(this.estrela > 0){
//             console.log('tcha tcha tcha')                    
//             this.estrela -= 1
//             inimigo.vivo = false
//         }else{
//             console.log('Sem poder :( Corre!')
//         }
//     }
// }
// let naruto = new Ninja('Naruto', 3)
// console.table(naruto)
        

// let inimigo = new Ninja('orochimaru', 3)
// console.table(inimigo)

// naruto.AtirarShuriken(inimigo)

// console.log(naruto)
// console.log(inimigo)

// let instancia
// if(naruto instanceof Ninja){
//     instancia = 'positivo'
// } else{
//     instancia = 'negativo'
// }
// console.log(instancia)

let caminhao = {
    rodas: 4,
    motorista: 'ciclano',
    portas:2,
    carga:'animais'
}
console.log(caminhao)

let{rodas, motorista, portas, carga} = caminhao
console.log(caminhao)
