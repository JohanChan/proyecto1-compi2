import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";
import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";


export enum Operador{
    SUMA,
    RESTA,
    MULTIPLICACION,
    DIVISION,
    MENORQUE,
    MARYOQUE,
    MENORIGUALQUE,
    MAYORIGUALQUE,
    OR,
    AND,
    NOT,
    UNARIO,
    MOD,
    IGUALIGUAL,
    DIFERENTE,
    REPETICION,
    CONCATENACION,
    POTENCIA,
    RAIZCUADRADA,
    SENO,
    COSENO,
    TANGENTE,
    LOG10,
    CHARPOSITION,
    SUBSTRING,
    LENGTH,
    UPPERCASE,
    LOWERCASE
}

export class Operacion implements Expresion{
    public expIzq: Expresion;
    public exprDer: Expresion;
    public esUnario: boolean;
    public operador: Operador;
    public operadorString: string;
    public linea: number;
    public columna: number;

    constructor(expIzq, operador, expDer, linea, columna, esUnario){
        this.expIzq = expIzq;
        this.exprDer=expDer;
        this.operador = this.getOperador(operador);
        this.linea = linea;
        this.columna = columna;
        this.esUnario = esUnario;
        this.operadorString = operador;
    }

    getOperador(operador: string):Operador{
        switch(operador){
            case '+': return Operador.SUMA; break;
            case '-': return Operador.RESTA; break;
            case '*': return Operador.MULTIPLICACION; break;
            case '/': return Operador.DIVISION; break;
            case '%': return Operador.MOD; break;
            case '==': return Operador.IGUALIGUAL; break;
            case '!=': return Operador.DIFERENTE; break;
            case '<': return Operador.MENORQUE; break;
            case '>': return Operador.MARYOQUE; break;
            case '<=': return Operador.MENORIGUALQUE; break;
            case '>=': return Operador.MAYORIGUALQUE; break;
            case '&&': return Operador.AND; break;
            case '||': return Operador.OR; break;
            case '!': return Operador.NOT; break;
            case '&': return Operador.CONCATENACION; break;
            case '^': return Operador.REPETICION; break;
            case 'pow': return Operador.POTENCIA; break;
            case 'sqrt': return Operador.RAIZCUADRADA; break;
            case 'sin': return Operador.SENO; break;
            case 'cos': return Operador.COSENO; break;
            case 'tan': return Operador.TANGENTE; break;
            case 'log10': return Operador.LOG10; break;
            case 'charposition': return Operador.CHARPOSITION; break;
            case 'substring': return Operador.SUBSTRING; break;
            case 'legth': return Operador.LENGTH; break;
            case 'uppercase': return Operador.UPPERCASE; break;
            case 'lowercase': return Operador.LOWERCASE; break;
            case 'unario': return Operador.UNARIO; break;
        }
    }
    getTipo(controlador: Controlador, tabla:TablaSimbolos): tipo {
        throw new Error("Method not implemented.");
    }
    getValorImplicito(controlador: Controlador, tabla:TablaSimbolos) {
        throw new Error("Method not implemented.");
    }
    traducir(controlador: Controlador, tabla:TablaSimbolos) {
        throw new Error("Method not implemented.");
    }
    
}