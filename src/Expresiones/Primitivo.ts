import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";
import { tipo, Tipo } from "../TablaSimbolos/Tipo";
import { Expresion } from "../Interfaces/Expresion";
import { Controlador } from "../Controlador";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";

export class Primitivo implements Expresion {
    linea: number;
    columna: number;
    valor: any;

    constructor(valor: any, linea: number, columna: number) {
        this.linea = linea;
        this.columna = columna;
        this.valor = valor;
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        throw new Error("Method not implemented.");
    }

    getTipo(controlador: Controlador, tabla: TablaSimbolos): tipo {
        const valor = this.getValorImplicito(controlador, tabla);
        if (typeof (valor) === 'boolean') {
            return tipo.BOOL;
        }
        else if (typeof (valor) === 'string') {
            return tipo.STRING;
        }
        else if (typeof (valor) === 'number') {
            if (this.isInt(Number(valor))) {
                return tipo.INT;
            }
            return tipo.DOUBLE;
        }

        return tipo.VOID;
    }

    getValorImplicito(controlador: Controlador, tabla: TablaSimbolos) {
        return this.valor;
    }

    isInt(n: number) {
        return Number(n) === n && n % 1 === 0;
    }

}