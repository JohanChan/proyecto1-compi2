import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";
import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { Instruccion } from "../Interfaces/Instruccion";

// print("hola mundo");

export class Print implements Instruccion{
    linea: number;
    columna: number;
    public expresion:Expresion;

    constructor(exp:Expresion, linea:number, columna:number){
        this.expresion = exp;
        this.linea = linea;
        this.columna = columna;
    }

    traducir(controlador: Controlador, arbol: AST) {
        throw new Error("Method not implemented.");
    }

    ejecutar(controlador: Controlador, arbol: AST) {
        const valor = this.expresion.getValorImplicito(controlador, arbol);
        if(valor!==null){
            console.log('>',valor);
        }else{
            console.log('>> Error, no se pueden imprimir valores nulos');
        }
    }

}