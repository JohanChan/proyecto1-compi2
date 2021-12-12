import { Operacion, Operador } from '../Expresiones/Operacion'
import { Expresion } from '../Interfaces/Expresion'
import { tipo } from '../TablaSimbolos/Tipo'
import { TablaSimbolos } from '../TablaSimbolos/TablaSimbolos'
import { AST } from '../AST/AST';
import { Entorno } from '../AST/Entorno';
import { Controlador } from '../Controlador';

export class Aritmetica extends Operacion implements Expresion {
    public constructor(expIzq, operador, exprDer, linea, columna, esUnario) {
        super(expIzq, operador, exprDer, linea, columna, esUnario);
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
        if (this.esUnario == false) {
            valorIzq = this.expIzq.getValorImplicito(controlador, tabla);
            valorDer = this.exprDer.getValorImplicito(controlador, tabla);
        } else {
            valorUnario = this.expIzq.getValorImplicito(controlador, tabla);
            console.log(this.expIzq.getTipo(controlador, tabla));
        }

        switch (this.operador) {
            case Operador.SUMA:
                if (typeof valorIzq === 'number') {
                    if (typeof valorDer === 'number') {
                        return valorIzq + valorDer;
                    } else {
                        console.log('Error semantico: valor debe ser númerico');
                    }
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                }
                break;
            case Operador.RESTA:
                if (typeof valorIzq === 'number') {
                    if (typeof valorDer === 'number') {
                        return valorIzq - valorDer;
                    } else {
                        console.log('Error semantico: valor debe ser númerico');
                    }
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                }
                break;
            case Operador.MULTIPLICACION:
                if (typeof valorIzq === 'number') {
                    if (typeof valorDer === 'number') {
                        return valorIzq * valorDer;
                    } else {
                        console.log('Error semantico: valor debe ser númerico');
                    }
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                }
                break;
            case Operador.DIVISION:
                if (typeof valorIzq === 'number') {
                    if (typeof valorDer === 'number') {
                        return valorIzq / valorDer;
                    } else {
                        console.log('Error semantico: valor debe ser númerico');
                    }
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                }
                break;
            case Operador.MOD:
                if (typeof valorIzq === 'number') {
                    if (typeof valorDer === 'number') {
                        return valorIzq % valorDer;
                    } else {
                        console.log('Error semantico: valor debe ser númerico');
                    }
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                }
                break;
            case Operador.UNARIO:
                if(typeof valorUnario === 'number'){
                    return -valorUnario;
                }else{
                    console.log('Error semantico: valor debe ser númerico');
                }
                break;
        }
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos): void {
        throw 'Sin data';

    }
}