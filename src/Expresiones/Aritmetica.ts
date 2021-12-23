import { Operacion, Operador } from '../Expresiones/Operacion'
import { Expresion } from '../Interfaces/Expresion'
import { tipo } from '../TablaSimbolos/Tipo'
import { TablaSimbolos } from '../TablaSimbolos/TablaSimbolos'
import { AST } from '../AST/AST';
import { Entorno } from '../AST/Entorno';
import { Controlador } from '../Controlador';
import { Resultado3D, Temporal } from '../TablaSimbolos/Temporales';
import { RErrores } from "../TablaSimbolos/RErrores";

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
                        console.log('Error semantico: valor debe ser númerico ', this.linea, " ", this.columna);
                        RErrores.agregarError("Semantico","valor debe ser númerico",this.linea,this.columna);
                    }
                } else {
                    console.log('Error semantico: valor debe ser númerico ' , this.linea, " ", this.columna);
                    RErrores.agregarError("Semantico","valor debe ser númerico",this.linea,this.columna);
                }
                break;
            case Operador.RESTA:
                if (typeof valorIzq === 'number') {
                    if (typeof valorDer === 'number') {
                        return valorIzq - valorDer;
                    } else {
                        console.log('Error semantico: valor debe ser númerico');
                        RErrores.agregarError("Semantico","valor debe ser númerico",this.linea,this.columna);
                    }
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                    RErrores.agregarError("Semantico","valor debe ser númerico",this.linea,this.columna);
                }
                break;
            case Operador.MULTIPLICACION:
                if (typeof valorIzq === 'number') {
                    if (typeof valorDer === 'number') {
                        return valorIzq * valorDer;
                    } else {
                        console.log('Error semantico: valor debe ser númerico');
                        RErrores.agregarError("Semantico","valor debe ser númerico",this.linea,this.columna);
                    }
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                    RErrores.agregarError("Semantico","valor debe ser númerico",this.linea,this.columna);
                }
                break;
            case Operador.DIVISION:
                if (typeof valorIzq === 'number') {
                    if (typeof valorDer === 'number') {
                        return valorIzq / valorDer;
                    } else {
                        console.log('Error semantico: valor debe ser númerico');
                        RErrores.agregarError("Semantico","valor debe ser númerico",this.linea,this.columna);
                    }
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                    RErrores.agregarError("Semantico","valor debe ser númerico",this.linea,this.columna);
                }
                break;
            case Operador.MOD:
                if (typeof valorIzq === 'number') {
                    if (typeof valorDer === 'number') {
                        return valorIzq % valorDer;
                    } else {
                        console.log('Error semantico: valor debe ser númerico');
                        RErrores.agregarError("Semantico","valor debe ser númerico",this.linea,this.columna);
                    }
                } else {
                    console.log('Error semantico: valor debe ser númerico');
                    RErrores.agregarError("Semantico","valor debe ser númerico",this.linea,this.columna);
                }
                break;
            case Operador.UNARIO:
                if(typeof valorUnario === 'number'){
                    return -valorUnario;
                }else{
                    console.log('Error semantico: valor debe ser númerico');
                    RErrores.agregarError("Semantico","valor debe ser númerico",this.linea,this.columna);
                }
                break;
        }
    }


    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        let valorNodoIzq;
        let valorNodoDer;

        let nodoIzq:Resultado3D = new Resultado3D();
        let nodoDer:Resultado3D = new Resultado3D();
        let resultado:Resultado3D = new Resultado3D(); //nodo
        nodoIzq = this.expIzq.traducir(controlador,tabla);
        nodoDer = this.exprDer.traducir(controlador,tabla); 
        let tipo1 = this.expIzq.getTipo(controlador,tabla);
        let tipo2 = this.exprDer.getTipo(controlador,tabla);

        valorNodoIzq = nodoIzq;
        valorNodoDer = nodoDer;

        resultado.codigo3D = resultado.codigo3D.concat(nodoIzq.codigo3D);
        resultado.codigo3D = resultado.codigo3D.concat(nodoDer.codigo3D);

        let temporal = Temporal.generarTemporal();
        //Temporal.temporales.push(temporal);

        if (nodoIzq.temporal != "" && nodoDer.temporal != "") {
            resultado.codigo3D += (Temporal.nuevaLinea(temporal + " = " + nodoIzq.temporal + this.operadorString + nodoDer.temporal, "" ));
        }else if(nodoDer.temporal == "" && nodoIzq.temporal != ""){
            resultado.codigo3D += (Temporal.nuevaLinea(temporal + " = " + nodoIzq.temporal + this.operadorString + nodoDer.valor, "" ));
        }else if(nodoDer.temporal != "" && nodoIzq.temporal == ""){
            resultado.codigo3D += (Temporal.nuevaLinea(temporal + " = " + nodoIzq.valor + this.operadorString + nodoDer.temporal, "" ));
        }
        else if(nodoDer.temporal == "" && nodoIzq.temporal == ""){
            resultado.codigo3D += (Temporal.nuevaLinea(temporal + " = " + nodoIzq.valor + this.operadorString + nodoDer.valor, "" ));
        }
    
        resultado.temporal = temporal;
        resultado.valor = valorNodoIzq + valorNodoDer;
        return resultado;
    }
}