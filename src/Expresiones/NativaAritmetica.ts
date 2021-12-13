import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";
import { Operacion, Operador } from "./Operacion";

export class NativaAritmetica extends Operacion implements Expresion {


    constructor(exprIzq, operador, exprDer, linea, columna) {
        super(exprIzq, operador, exprDer, linea, columna, false);
    }
    getTipo(controlador: Controlador, tabla: TablaSimbolos): tipo {
        let value = this.getValorImplicito(controlador, tabla);

        if (typeof value === 'number') {
            return tipo.DOUBLE;
        } else if (typeof value === 'boolean') {
            return tipo.BOOL;
        } else if (typeof value === 'string') {
            return tipo.STRING;
        }
    }
    getValorImplicito(controlador: Controlador, tabla: TablaSimbolos): any {
        let valDer;
        if (this.exprDer != null) {
            valDer = this.exprDer.getValorImplicito(controlador, tabla);
        }
        let valIzq = this.expIzq.getValorImplicito(controlador, tabla);


        switch (this.operador) {
            case Operador.POTENCIA:
                if (typeof valIzq === 'number') {
                    if (typeof valDer === 'number') {
                        return Math.pow(valIzq, valDer);
                    } else {
                        console.log('Error semantico: valor debe ser númerico');
                    }
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                }
                break;
            case Operador.RAIZCUADRADA:
                if (typeof valIzq === 'number') {
                    return Math.sqrt(valIzq);
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                }
                break;
            case Operador.SENO:
                if (typeof valIzq === 'number') {
                    return Math.sqrt(valIzq);
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                }
                break;
            case Operador.COSENO:
                if (typeof valIzq === 'number') {
                    return Math.sqrt(valIzq);
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                }
                break;
            case Operador.TANGENTE:
                if (typeof valIzq === 'number') {
                    return Math.sqrt(valIzq);
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                }
                break;
            case Operador.LOG10:
                if (typeof valIzq === 'number') {
                    return Math.log10(valIzq);
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                }
                break;
        }
    }
    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        throw new Error("Method not implemented.");
    }

}