var r = require("readline-sync");
var prof = /** @class */ (function () {
    function prof(nome, idade, ano_xp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_xp = ano_xp;
    }
    prof.prototype.getpf = function () {
        console.log("sou o ", this.nome, " tenho ", this.idade, " e tenho ", this.ano_xp, " de experiencia");
    };
    prof.prototype.setpf = function () {
        var nomeN = rll.question("novo nome");
        var idadeN = parseInt(rll.question("nova idade"));
        var ano_xpN = parseInt(rll.question("novo ano de experiencia"));
        this.nome = nomeN;
        this.idade = idadeN;
        this.ano_xp = ano_xpN;
    };
    return prof;
}());
var school = /** @class */ (function () {
    function school(profer, nome, endereco, num_end) {
        this.profer = profer;
        this.nome = nome;
        this.endereco = endereco;
        this.num_end = num_end;
    }
    school.prototype.getesc = function () {
        console.log("sou o restaurante ", this.nome, " localizado em ", this.endereco, "numero ", this.num_end, " e tenho o cozinheiro ", this.profer.nome);
    };
    school.prototype.setesc = function () {
        this.profer.setpf();
        var nomeN = rll.question("novo nome do restaurante");
        var enderecoN = rll.question("novo endereco do restaurante");
        var num_endN = (rll.questionInt("novo numero do endereco do restaurante"));
        this.nome = nomeN;
        this.endereco = enderecoN;
        this.num_end = num_endN;
        this.profer.setpf();
    };
    return school;
}());
var profcorn = new prof("ela me ama", 19, 8);
var mal = new school(profcorn, "mall", "estrada do inferno", 666);
console.log(mal);
var profc = new prof("corno2", 50, 20);
profc.getpf();
profc.setpf();
profc.getpf();
var n = true;
var opc = r.questionInt("qual a opção? \n[1]criar professor\n[2]criar nova escola\n[3]mudar prof\n[4]mudar escola\n[5]ver prof\n[6]ver escola\n[7]sair\n");
while (n) {
    switch (opc) {
        case 1:
            break;
        default:
            break;
    }
}
