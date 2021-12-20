import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { Etiqueta, Resultado3D, Temporal } from "../TablaSimbolos/Temporales";
import { tipo } from "../TablaSimbolos/Tipo";
import { Operacion, Operador } from "./Operacion";

export class Relacional extends Operacion implements Expresion{
    constructor(expIzq, operador, expDer, linea, columna, esUnario){
        super(expIzq,operador,expDer,linea,columna,esUnario)
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

        if(this.esUnario === false){
            valorIzq = this.expIzq.getValorImplicito(controlador,tabla);
            valorDer = this.exprDer.getValorImplicito(controlador,tabla);
        }else{
            valorUnario = this.expIzq.getValorImplicito(controlador,tabla);
        }

        switch(this.operador){
            case Operador.IGUALIGUAL:
                if(typeof valorIzq === 'number'){
                    if(typeof valorDer === 'number'){
                        return valorIzq === valorDer;
                    }else if (typeof valorDer === 'string' && valorDer.length === 1){
                        return valorIzq === valorDer.charCodeAt(0);
                    }else{
                        console.log('Error semantico: se esperaba valor tipo numero o string');
                    }
                }else if(typeof valorIzq === 'string' && valorIzq.length === 1){
                    if(typeof valorDer === 'number'){
                        return valorIzq.charCodeAt(0) === valorDer;
                    }else if(typeof valorDer === 'string' && valorDer.length === 1){
                        return valorIzq.charCodeAt(0) === valorDer.charCodeAt(0);
                    }else{
                        console.log('Error semantico: se esperaba valor tipo numero o string');
                    }
                }else if(typeof valorIzq === 'string' && typeof valorDer === 'string'){
                    return valorIzq === valorDer;
                }else{
                    console.log('Error semantico: se esperaba valor tipo numero o string');
                }
                break;
            case Operador.DIFERENTE:
                if(typeof valorIzq === 'number'){
                    if(typeof valorDer === 'number'){
                        return valorIzq != valorDer;
                    }else if (typeof valorDer === 'string' && valorDer.length === 1){
                        return valorIzq != valorDer.charCodeAt(0);
                    }else{
                        console.log('Error semantico: se esperaba valor tipo numero o string');
                    }
                }else if(typeof valorIzq === 'string' && valorIzq.length === 1){
                    if(typeof valorDer === 'number'){
                        return valorIzq.charCodeAt(0) != valorDer;
                    }else if(typeof valorDer === 'string' && valorDer.length === 1){
                        return valorIzq.charCodeAt(0) != valorDer.charCodeAt(0);
                    }else{
                        console.log('Error semantico: se esperaba valor tipo numero o string');
                    }
                }else{
                    console.log('Error semantico: se esperaba valor tipo numero o string');
                }
                break;
            case Operador.MARYOQUE:
                if(typeof valorIzq === 'number'){
                    if(typeof valorDer === 'number'){
                        return valorIzq > valorDer;
                    }else if (typeof valorDer === 'string' && valorDer.length === 1){
                        return valorIzq > valorDer.charCodeAt(0);
                    }else{
                        console.log('Error semantico: se esperaba valor tipo numero o string');
                    }
                }else if(typeof valorIzq === 'string' && valorIzq.length === 1){
                    if(typeof valorDer === 'number'){
                        return valorIzq.charCodeAt(0) > valorDer;
                    }else if(typeof valorDer === 'string' && valorDer.length === 1){
                        return valorIzq.charCodeAt(0) > valorDer.charCodeAt(0);
                    }else{
                        console.log('Error semantico: se esperaba valor tipo numero o string');
                    }
                }else{
                    console.log('Error semantico: se esperaba valor tipo numero o string');
                }
                break;
            case Operador.MENORQUE:
                if(typeof valorIzq === 'number'){
                    if(typeof valorDer === 'number'){
                        return valorIzq < valorDer;
                    }else if (typeof valorDer === 'string' && valorDer.length === 1){
                        return valorIzq < valorDer.charCodeAt(0);
                    }else{
                        console.log('Error semantico: se esperaba valor tipo numero o string');
                    }
                }else if(typeof valorIzq === 'string' && valorIzq.length === 1){
                    if(typeof valorDer === 'number'){
                        return valorIzq.charCodeAt(0) < valorDer;
                    }else if(typeof valorDer === 'string' && valorDer.length === 1){
                        return valorIzq.charCodeAt(0) < valorDer.charCodeAt(0);
                    }else{
                        console.log('Error semantico: se esperaba valor tipo numero o string');
                    }
                }else{
                    console.log('Error semantico: se esperaba valor tipo numero o string');
                }
                break;
            case Operador.MAYORIGUALQUE:
                if(typeof valorIzq === 'number'){
                    if(typeof valorDer === 'number'){
                        return valorIzq >= valorDer;
                    }else if (typeof valorDer === 'string' && valorDer.length === 1){
                        return valorIzq >= valorDer.charCodeAt(0);
                    }else{
                        console.log('Error semantico: se esperaba valor tipo numero o string');
                    }
                }else if(typeof valorIzq === 'string' && valorIzq.length === 1){
                    if(typeof valorDer === 'number'){
                        return valorIzq.charCodeAt(0) >= valorDer;
                    }else if(typeof valorDer === 'string' && valorDer.length === 1){
                        return valorIzq.charCodeAt(0) >= valorDer.charCodeAt(0);
                    }else{
                        console.log('Error semantico: se esperaba valor tipo numero o string');
                    }
                }else{
                    console.log('Error semantico: se esperaba valor tipo numero o string');
                }
                break;
            case Operador.MENORIGUALQUE:
                if(typeof valorIzq === 'number'){
                    if(typeof valorDer === 'number'){
                        return valorIzq <= valorDer;
                    }else if (typeof valorDer === 'string' && valorDer.length === 1){
                        return valorIzq <= valorDer.charCodeAt(0);
                    }else{
                        console.log('Error semantico: se esperaba valor tipo numero o string');
                    }
                }else if(typeof valorIzq === 'string' && valorIzq.length === 1){
                    if(typeof valorDer === 'number'){
                        return valorIzq.charCodeAt(0) <= valorDer;
                    }else if(typeof valorDer === 'string' && valorDer.length === 1){
                        return valorIzq.charCodeAt(0) <= valorDer.charCodeAt(0);
                    }else{
                        console.log('Error semantico: se esperaba valor tipo numero o string');
                    }
                }else{
                    console.log('Error semantico: se esperaba valor tipo numero o string');
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
        
        valorNodoIzq = nodoIzq;
        valorNodoDer = nodoDer;

        resultado.codigo3D = resultado.codigo3D.concat(nodoIzq.codigo3D);
        resultado.codigo3D = resultado.codigo3D.concat(nodoDer.codigo3D);

        let etiqueta1 = Etiqueta.generarEtiqueta();
        let etiqueta2 = Etiqueta.generarEtiqueta();
        //Temporal.temporales.push(temporal);
        if(nodoIzq.temporal != "" && nodoDer.temporal != ""){
            resultado.codigo3D += nodoIzq.codigo3D;
            resultado.codigo3D += nodoDer.codigo3D;
            resultado.codigo3D +=Temporal.nuevaLinea("if("+nodoIzq.temporal+this.operadorString+nodoDer.temporal+") goto "+etiqueta1,"");
            resultado.codigo3D +=Temporal.nuevaLinea("goto "+etiqueta2,"");
        }else if(nodoIzq.temporal == "" && nodoDer.temporal != ""){
            resultado.codigo3D += nodoDer.codigo3D;
            resultado.codigo3D +=Temporal.nuevaLinea("if("+nodoIzq.valor+this.operadorString+nodoDer.temporal+") goto "+etiqueta1,"");
            resultado.codigo3D +=Temporal.nuevaLinea("goto "+etiqueta2,"");
        }else if(nodoIzq.temporal != "" && nodoDer.temporal == ""){
            resultado.codigo3D += nodoIzq.codigo3D;
            resultado.codigo3D +=Temporal.nuevaLinea("if("+nodoIzq.temporal+this.operadorString+nodoDer.valor+") goto "+etiqueta1,"");
            resultado.codigo3D +=Temporal.nuevaLinea("goto "+etiqueta2,"");
        }else if(nodoIzq.temporal == "" && nodoDer.temporal == ""){
            resultado.codigo3D +=Temporal.nuevaLinea("if("+nodoIzq.valor+this.operadorString+nodoDer.valor+") goto "+etiqueta1,"");
            resultado.codigo3D +=Temporal.nuevaLinea("goto "+etiqueta2,"");
        }

        //resultado.temporal = temporal;
        //console.log("Valor de relacional en traduccion "+this.getValorImplicito(controlador,tabla));
        resultado.etiquetaTrue = etiqueta1;
        resultado.etiquetaFalse = etiqueta2;
        resultado.valor = this.getValorImplicito(controlador,tabla);
        return resultado;
    }
}