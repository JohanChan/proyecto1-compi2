import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";
import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { Instruccion } from "../Interfaces/Instruccion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";

// print("hola mundo");

export class Print implements Instruccion{
    linea: number;
    columna: number;
    public expresion:Expresion;
    public salto: boolean;
    constructor(exp:Expresion, linea:number, columna:number, salto){
        this.expresion = exp;
        this.linea = linea;
        this.columna = columna;
        this.salto = salto;
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        throw new Error("Method not implemented.");
    }

    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        const valor = this.expresion.getValorImplicito(controlador, tabla);
        if(valor!==null){
            if(this.salto === true){
                controlador.concatenar(valor+"\n");
            }else{
                controlador.concatenar(valor);
            }

        }else{
            console.log('>> Error, no se pueden imprimir valores nulos');
        }
    }

}