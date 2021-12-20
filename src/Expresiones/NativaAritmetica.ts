import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { Resultado3D, Temporal } from "../TablaSimbolos/Temporales";
import { tipo } from "../TablaSimbolos/Tipo";
import { Aritmetica } from "./Aritmetica";
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
        console.log("Traduciendo Nativa aritmetica");
        let valorNodoIzq;
        let valorNodoDer;
        let tipo2;
        let nodoIzq:Resultado3D = new Resultado3D();
        let nodoDer:Resultado3D = new Resultado3D();
        let resultado:Resultado3D = new Resultado3D(); //nodo
        nodoIzq = this.expIzq.traducir(controlador,tabla);
        let tipo1 = this.expIzq.getTipo(controlador,tabla);
        if(this.exprDer != null){
            nodoDer = this.exprDer.traducir(controlador,tabla);
            tipo2 = this.exprDer.getTipo(controlador,tabla);
        }
        valorNodoIzq = nodoIzq;
        valorNodoDer = nodoDer;
        let temporal = Temporal.generarTemporal();
        if(nodoDer != null){
            if(nodoIzq.temporal != "" && nodoDer.temporal != ""){
                console.log("Estoy en temporales llenos");
                resultado.codigo3D += nodoIzq.codigo3D;
                resultado.codigo3D += nodoDer.codigo3D;
                resultado.codigo3D += (Temporal.nuevaLinea(temporal + " = " + this.operadorString +"("+ nodoIzq.temporal+","+nodoDer.temporal+")", "" ));           
            }else if(nodoIzq.temporal != "" && nodoDer.temporal == ""){
                console.log("Estoy en temporal derecho vacio");
                resultado.codigo3D += nodoIzq.codigo3D;
                resultado.codigo3D += (Temporal.nuevaLinea(temporal + " = " + this.operadorString +"("+ nodoIzq.temporal+ ","+nodoDer.valor+")", "" ));                                
            }else if(nodoIzq.temporal == "" && nodoDer.temporal != ""){
                console.log("Estoy en temporal izquierdo vacio");
                resultado.codigo3D += nodoDer.codigo3D;
                resultado.codigo3D += (Temporal.nuevaLinea(temporal + " = " + this.operadorString +"("+ nodoIzq.valor+ ","+nodoDer.temporal+")", "" ));  
                                            
            }else if(nodoIzq.temporal == "" && nodoDer.temporal == ""){
                console.log("Estoy en temporales vacios");
                resultado.codigo3D += (Temporal.nuevaLinea(temporal + " = " + this.operadorString +"("+ nodoIzq.valor+ ","+nodoDer.valor+")", "" ));                                  
            }
        }else{
            if (nodoIzq.temporal != "") {
                resultado.codigo3D += nodoIzq.codigo3D;
                resultado.codigo3D += (Temporal.nuevaLinea(temporal + " = " + this.operadorString +"("+ nodoIzq.temporal+ ")", "" ));
            }else {
                resultado.codigo3D += (Temporal.nuevaLinea(temporal + " = " + this.operadorString +"("+ nodoIzq.valor+ ")", "" ));
            }
        }
        resultado.temporal = temporal;
        resultado.valor = valorNodoIzq + valorNodoDer;
        return resultado;
    }
}