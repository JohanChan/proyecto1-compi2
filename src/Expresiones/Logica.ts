import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";
import { Operacion, Operador } from "./Operacion";

export class Logical extends Operacion implements Expresion{

    constructor(expIzq, operador ,expDer,linea, columna, esUnario){
        super(expIzq,operador,expDer,linea,columna,esUnario);
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
            case Operador.AND:
                if(typeof valorIzq === 'boolean'){
                    if(typeof valorDer === 'boolean'){
                        return valorIzq && valorDer;
                    }else{
                        console.log('Error semantico: se esperaba tipo boolean');
                    }
                }else{
                    console.log('Error semantico: se esperaba tipo boolean');
                }
                break;
            case Operador.OR:
                if(typeof valorIzq === 'boolean'){
                    if(typeof valorDer === 'boolean'){
                        return valorIzq || valorDer;
                    }else{
                        console.log('Error semantico: se esperaba tipo boolean');
                    }
                }else{
                    console.log('Error semantico: se esperaba tipo boolean');
                }
                break;
            case Operador.NOT:
                if(typeof valorUnario === 'boolean'){
                    return !valorUnario;
                }else{
                    console.log('Error semantico: se esperaba tipo boolean');
                }
                break;
        }
    }
}