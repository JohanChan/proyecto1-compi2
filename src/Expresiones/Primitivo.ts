import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";
import { tipo, Tipo } from "../TablaSimbolos/Tipo";
import { Expresion } from "../Interfaces/Expresion";
import { Controlador } from "../Controlador";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { Temporal, Resultado3D} from "../TablaSimbolos/Temporales";

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
        let resultado3D = new Resultado3D();
        resultado3D.codigo3D= "";
        const valor = this.getValorImplicito(controlador, tabla);
        resultado3D.valor = valor;
        if (typeof (valor) === 'boolean') {
            resultado3D.tipo = tipo.BOOL;
        }
        else if (typeof (valor) === 'string') {
            //  resultado3D.tipo = tipo.STRING;
        }
        else if (typeof (valor) === 'number') {
            if (this.isInt(Number(valor))) {
                resultado3D.tipo = tipo.INT;
            }
            resultado3D.tipo = tipo.DOUBLE;
        }
        console.log("Traduciendo primitivo... ", resultado3D.valor);
        return resultado3D;
        //throw new Error('Method not implemented.');

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