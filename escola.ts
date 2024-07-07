let rl = require("readline-sync")
class professor{
    nome: string
    idade: number
    salario: number
    anos_xp:number
    matéria:number
    constructor(nome:string,idade:number,salario:number,anos_xp:number,matéria:number){
        this.nome = nome
        this.idade = idade
        this.salario = salario
        this.anos_xp = anos_xp
        this.matéria = matéria
        }
        darAula():void{
            console.log("Professor "+this.nome+" está dando aula de "+this.matéria)
        }
        curriculo():void{
            console.log("Nome: "+this.nome+"\nIdade: "+this.idade+"\nSalário: "+this.salario+"\nAnos de experiência: "+this.anos_xp+"\nMatéria: "+this.matéria)
        }
        novoProf(){
        let nomeN = rl.question("novo nome")
        let idadeN = parseInt(rl.question("nova idade"))
        let anos_xpN = parseInt(rl.question("novo ano de experiencia"))
        let salario = parseInt(rl.question("qual o seu salario"))
        let matéria = parseInt(rl.question("qual a sua matéria"))
        this.nome = nomeN
        this.idade = idadeN
        this.anos_xp = anos_xpN
        this.salario = salario
        this.matéria = matéria
        }

}
class alunos{
    nome:string
    idade:number
    mensalidade:number
    constructor(nome:string,idade:number,mensalidade:number){
        this.nome = nome
        this.idade = idade
        this.mensalidade = mensalidade
        }
        getalunos(){
            console.log("Nome: "+this.nome+"\nIdade: "+this.idade+"\nMensalidade: "+this.mensalidade)
                }
            setalunos(){
                    let nome = rl.question("qual o seu nome")
                    let idade = parseInt(rl.question("qual a sua idade"))
                    let mensalidade = parseInt(rl.question("qual a sua mensalidade"))
                    this.nome = nome
                    this.idade = idade
                    this.mensalidade = mensalidade
                }
        }


class sala_de_aula {
    professor: professor[]
    qntd_alunos: number
    constructor(professor: professor[],qntd_alunos:number) {
        this.professor = professor
        this.qntd_alunos = qntd_alunos
        }
        troca_de_periodo():void{
            console.log("Professor "+this.professor[0].nome+" está dando aula de "+this.professor[0].matéria+" para "+this.qntd_alunos+" alunos")
        }
  
}
class diretor {
    nome: string
    idade: number
    salario: number
    anos_xp: number
    professor:professor
    alunos:alunos
    constructor(nome:string,idade:number,salario:number,anos_xp:number){
        this.nome = nome
        this.idade = idade
        this.salario = salario
        this.anos_xp = anos_xp
    }
    admEscola(){
        let lucro 
        let gastos 
        let lucro_ano = lucro - gastos


    }


}