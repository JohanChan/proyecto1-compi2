import { Controlador } from "../Controlador";
import { If } from "../Instrucciones/SentenciasDeControl/If";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { Etiqueta, Resultado3D, Temporal } from "../TablaSimbolos/Temporales";
import { tipo } from "../TablaSimbolos/Tipo";
import { Operacion, Operador } from "./Operacion";

export class Logica extends Operacion implements Expresion {

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
            case Operador.AND:
                if (typeof valorIzq === 'boolean') {
                    if (typeof valorDer === 'boolean') {
                        return valorIzq && valorDer;
                    } else {
                        console.log('Error semantico: se esperaba tipo boolean');
                    }
                } else {
                    console.log('Error semantico: se esperaba tipo boolean');
                }
                break;
            case Operador.OR:
                if (typeof valorIzq === 'boolean') {
                    if (typeof valorDer === 'boolean') {
                        return valorIzq || valorDer;
                    } else {
                        console.log('Error semantico: se esperaba tipo boolean');
                    }
                } else {
                    console.log('Error semantico: se esperaba tipo boolean');
                }
                break;
            case Operador.NOT:
                if (typeof valorUnario === 'boolean') {
                    return !valorUnario;
                } else {
                    console.log('Error semantico: se esperaba tipo boolean');
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
        let etiqueta1 = Etiqueta.generarEtiqueta();
        let etiqueta2 = Etiqueta.generarEtiqueta();
        
        switch(this.operador){
            case Operador.AND: 
            resultado.codigo3D += nodoIzq.codigo3D;
            resultado.codigo3D += nodoIzq.etiquetaTrue+": \n";
            resultado.codigo3D += nodoDer.codigo3D+"\n";
            resultado.etiquetaTrue = nodoDer.etiquetaTrue;
            resultado.etiquetaFalse = nodoIzq.etiquetaFalse + ": "+nodoDer.etiquetaFalse;
            break;
            case Operador.OR: 
            resultado.codigo3D += nodoIzq.codigo3D;
            resultado.codigo3D += nodoIzq.etiquetaFalse+": \n";
            resultado.codigo3D += nodoDer.codigo3D;
            resultado.etiquetaTrue = nodoIzq.etiquetaTrue + ": "+nodoDer.etiquetaTrue;
            resultado.etiquetaFalse = nodoDer.etiquetaFalse;
            break;
            case Operador.NOT: 
            resultado.codigo3D += nodoIzq.codigo3D;
            resultado.etiquetaTrue = nodoIzq.etiquetaFalse;
            resultado.etiquetaFalse = nodoIzq.etiquetaTrue;
            break;
        }
        return resultado;
    }
}