"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Criando variável tipada(possui tipo)
var isValid = true;
// do tipo number
var actualYear = 2021;
// do tipo string
var aula = "Iniciando com Typescript";
// outros tipos de dados
var idade; // aceita qualquer valor
idade = 18;
idade = "dezoito";
// vetores - arrays
var months = ["jan", "fev", "mar", "abr", "mai", "Jun", "jul"];
var fruits = ["laranja", "banana", "maçã"];
// tuples
var alunos = ["Bruno", 21];
// enum
var Techs;
(function (Techs) {
    Techs[Techs["Node"] = 0] = "Node";
    Techs[Techs["Typescript"] = 1] = "Typescript";
    Techs[Techs["TypeORM"] = 2] = "TypeORM";
    Techs[Techs["Docker"] = 3] = "Docker";
})(Techs || (Techs = {}));
;
var curse = Techs.Node;
;
var aluno1 = {
    nome: "Bruno",
    idade: 21,
    publica: true,
    notas: [8, 8, 7, 10],
    calculaMedia: function () {
        var soma = this.notas.reduce(function (total, elemento) { return total + elemento; });
        var length = this.notas.length;
        console.log("M\u00E9dia referente ao aluno " + this.nome + ": " + soma / length);
    }
};
var Superior = /** @class */ (function () {
    function Superior(titulacao) {
        this.titulacao = titulacao;
    }
    return Superior;
}());
// Criar class que implementa a interface Saudacao
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    // função construtora
    function Professor(nome, titulacao) {
        var _this = _super.call(this, titulacao) || this;
        _this.nome = nome;
        return _this;
    }
    // criar metodos da interface
    Professor.prototype.bomDia = function (message) {
        console.log(message + ", querido " + this.titulacao + " " + this.nome);
    };
    Professor.prototype.boaTarde = function (message) {
        console.log(message + ", querido " + this.titulacao + " " + this.nome);
    };
    Professor.prototype.boaNoite = function (message) {
        console.log(message + ", querido " + this.titulacao + " " + this.nome);
    };
    return Professor;
}(Superior));
// exemplo de instancia
var prof1 = new Professor("Daniel", "Doutor"); //chama constr
prof1.bomDia("Seja bem-vindo");
prof1.boaTarde("Tenha uma boa tarde");
prof1.boaNoite("Tenhha uma boa noite");
