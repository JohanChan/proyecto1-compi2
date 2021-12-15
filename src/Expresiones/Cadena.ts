import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";
import { Operacion, Operador } from "./Operacion";

export class Cadena extends Operacion implements Expresion {
    constructor(expIzq, operador, expDer, linea, columna, esUnario) {
        super(expIzq, operador, expDer, linea, columna, esUnario);
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
        let valorIzq;
        let valorDer;
        let valorUnario;

        if (this.esUnario === false) {
            valorIzq = this.expIzq.getValorImplicito(controlador, tabla);
            valorDer = this.exprDer.getValorImplicito(controlador, tabla);
        } else {
            valorUnario = this.expIzq.getValorImplicito(controlador, tabla);
        }

        switch (this.operador) {
            case Operador.CONCATENACION:
                /*if (typeof valorIzq === 'string') {
                    if (valorIzq.length === 1) {
                        console.log('No se puede :c');
                    } else {
                        if (typeof valorDer === 'string') {
                            if (valorDer.length === 1) {
                                console.log('No se puede :c');
                            }*/
                            return valorIzq + valorDer;
                        /*} else {
                            console.log('Error semantico: se esperaba valor tipo string');
                        }
                    }
                } else {
                    console.log('Error semantico: se esperaba valor tipo string');
                }*/
                break;
            case Operador.REPETICION:
                if (typeof valorIzq === 'string') {
                    if (typeof valorDer === 'number') {
                        let res: string = "";
                        for (let i = 0; i < valorDer; i++) {
                            res += valorIzq;
                        }
                        return res;
                    } else {
                        console.log('Error semantico: se esperaba valor tipo numerico');
                    }
                } else {
                    console.log('Error semantico: se esperaba valor tipo string');
                }
                break;
        }
    }
}