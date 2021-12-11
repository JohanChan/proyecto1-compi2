import { Operacion, Operador } from '../Expresiones/Operacion'
import { Expresion } from '../Interfaces/Expresion'
import { tipo } from '../TablaSimbolos/Tipo'
import { TablaSimbolos } from '../TablaSimbolos/TablaSimbolos'
import { AST } from '../AST/AST';
import { Entorno } from '../AST/Entorno';
import { Controlador } from '../Controlador';

export class Aritmetica extends Operacion implements Expresion{
    public constructor(expIzq, operador, exprDer, linea, columna, esUnario){
        super(expIzq,operador,exprDer,linea,columna,esUnario);
    }
    getTipo(controlador: Controlador, arbol: AST): tipo {
        let value = this.getValorImplicito(controlador,arbol);

        if(typeof value === 'number'){
            return tipo.DOUBLE;
        }else if(typeof value === 'boolean'){
            return tipo.BOOL;
        }else if(typeof value === 'string'){
            return tipo.STRING;
        }
    }
    getValorImplicito(controlador: Controlador, arbol: AST): void {
        
    }

    traducir(controlador: Controlador, arbol: AST): void {
        throw 'Sin data';
        
    }
}