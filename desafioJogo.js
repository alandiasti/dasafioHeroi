class jogoHeroi {

    /// na função construtor definir os parametros 
    constructor (nome, idade, tipo) {
            this.nome = nome,
            this.idade = idade,
            this.tipo = tipo
    }
    // criei uma função atacar
    atacar(){
        // definir uma variavel chamada ataque 
        let ataque;
        // definir um switch que avalia o paramentro tipo definido na função construtora 
        switch(this.tipo){
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "Não difeniu ataque"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}
let heroi1 = new jogoHeroi ("Quebra Osso ", 100, "guerreiro" )
let heroi2 = new jogoHeroi ("BudaJaspe ", 50, "monge" )
let heroi3 = new jogoHeroi ("Naruto ", 30, "ninja" )
let heroi4 = new jogoHeroi ("Salomani ", 150, "mago" )
heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
console.log(heroi1.nome)
console.log(`O heroi cuja o nome é: ${heroi1.nome}, idade: ${heroi1.idade} anos, do tipo:  ${heroi1.tipo}`);
