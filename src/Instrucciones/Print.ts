import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";
import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { Instruccion } from "../Interfaces/Instruccion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";

// print("hola mundo");

export class Print implements Instruccion{
    fila: number;
    columna: number;
    public expresion:Expresion;

    constructor(exp:Expresion, linea:number, columna:number){
        this.expresion = exp;
        this.fila = linea;
        this.columna = columna;
    }

    traducir(controlador: Controlador, arbol: TablaSimbolos) {
        throw new Error("Method not implemented.");
    }

    ejecutar(controlador: Controlador, arbol: TablaSimbolos) {
        const valor = this.expresion.getValor(controlador, arbol);
        if(valor!==null){
            console.log('>',valor);
        }else{
            console.log('>> Error, no se pueden imprimir valores nulos');
        }
    }

}