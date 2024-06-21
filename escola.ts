let r = require("readline-sync")
class prof {
    nome: string
    idade:number
    ano_xp:number
    
    constructor(nome:string,idade:number,ano_xp:number) {
        this.nome = nome
        this.idade = idade
        this.ano_xp = ano_xp
    }
    getpf():void{
        console.log("sou o ", this.nome," tenho ",this.idade," e tenho ",this.ano_xp," de experiencia")
    }
    setpf():void{
        let nomeN = r.question("novo nome")
        let idadeN = parseInt(r.question("nova idade"))
        let ano_xpN = parseInt(r.question("novo ano de experiencia"))
        this.nome = nomeN
        this.idade = idadeN
        this.ano_xp = ano_xpN
    }

}
class school {
    profer:prof
    nome:string
    endereco:string
    num_end:number
    constructor(profer:prof,nome:string,endereco:string,num_end:number) {

        this.profer = profer
        this.nome = nome
        this.endereco = endereco
        this.num_end = num_end
        
    }
    getesc():void{
        console.log("sou a escola ",this.nome," localizado em ",this.endereco,"numero ",this.num_end," e tenho o prof ",this.profer.nome)
        }
        setesc():void{
            this.profer.setpf()
            let nomeN = r.question("novo nome da escola")
            let enderecoN = r.question("novo endereco da escola")
            let num_endN = (r.questionInt("novo numero do endereco da escola"))
            this.nome = nomeN
            this.endereco = enderecoN
            this.num_end = num_endN
            this.profer.setpf()
            }
}

let profc = new prof("", 0,0)
let mal = new school (profc,"","",0)

console.log(mal)


profc.getpf()
profc.setpf()
profc.getpf()


let n = true

let NovProf: Array<prof> = []
let NovEsc: Array<school> = []

while (n == false) {
    let opc = r.questionInt("qual a opção? \n[1]criar professor\n[2]criar nova escola\n[3]mudar prof\n[4]mudar escola\n[5]ver prof\n[6]ver escola\n[7]sair\n")

    switch (opc) {
        case 1:
            profc.setpf()
            NovProf.push(profc)

            break;
            case 2:
                mal.setesc()
                NovEsc.push(mal)
                break;
                case 3:
                    profc.setpf()
                    
                    break;
                    case 4:
                        mal.setesc()
                        break;
                        case 5:
                            console.log(NovProf)
                            
                            break;
                            case 6:
                                console.log(NovEsc)
                
                                break;
                        case 7:
            n = false
            break;
    
        default:
            console.log("invalido essa opção")
            break;
    }
}