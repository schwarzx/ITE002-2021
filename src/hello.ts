// Criando variável tipada(possui tipo)
const isValid: boolean = true;

// do tipo number
const actualYear: number = 2021;

// do tipo string
const aula: string = "Iniciando com Typescript";

// outros tipos de dados
let idade: any; // aceita qualquer valor
idade = 18;
idade = "dezoito"


// vetores - arrays
const months: string[] = ["jan", "fev", "mar", "abr", "mai", "Jun", "jul"];
const fruits: Array<string> = ["laranja", "banana", "maçã"];

// tuples
const alunos: [string, number] =  ["Bruno", 21]

// enum
enum Techs {
	Node, 
	Typescript, 
	TypeORM,
    Docker
};

const curse: Techs = Techs.Node;
//console.log(curse) // Irá printar o valor 0

interface Aluno {
    nome: string,
    idade: number,
    publica: boolean,
    notas: number[]
    calculaMedia(): void
};

const aluno1: Aluno = {
    nome: "Bruno",
    idade: 21,
    publica: true,
    notas: [8, 8, 7, 10],
    calculaMedia() {
        let soma = this.notas.reduce((total, elemento)=> total + elemento)
        let length = this.notas.length
        console.log(`Média referente ao aluno ${this.nome}: ` + soma/length);
    }
}

// console.log(aluno1);
// aluno1.calculaMedia();

// ================================================================================

// Criar interface em TS
interface Saudacao {
    bomDia(message: string): void
    boaTarde(message: string): void
    boaNoite(message: string): void
}

class Superior {
    protected titulacao: string;
    constructor(titulacao: string){
        this.titulacao = titulacao;
    }
}

// Criar class que implementa a interface Saudacao
class Professor extends Superior implements Saudacao{
    private nome: string

    // função construtora
    constructor(nome: string, titulacao: string){
        super(titulacao); // chama o construtor da superclass
        this.nome = nome;
    }

    // criar metodos da interface
    bomDia(message: string){
        console.log(`${message}, querido ${this.titulacao} ${this.nome}`);
        
    }
    boaTarde(message: string){
        console.log(`${message}, querido ${this.titulacao} ${this.nome}`);
    }
    boaNoite(message: string){
        console.log(`${message}, querido ${this.titulacao} ${this.nome}`);
    }
}


// exemplo de instancia
let prof1 = new Professor("Daniel", "Doutor"); //chama constr
prof1.bomDia("Seja bem-vindo");
prof1.boaTarde("Tenha uma boa tarde");
prof1.boaNoite("Tenhha uma boa noite");