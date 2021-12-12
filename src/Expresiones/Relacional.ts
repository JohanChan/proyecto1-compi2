import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
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
}