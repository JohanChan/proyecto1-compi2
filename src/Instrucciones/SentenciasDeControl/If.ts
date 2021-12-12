import Nodo from "../../Ast/Nodo";
import {Controlador} from "../../Controlador";
import { Expresion } from "../../Interfaces/Expresion";
import { Instruccion } from "../../Interfaces/Instruccion";
import { TablaSimbolos } from "../../TablaSimbolos/TablaSimbolos";
import {Tipo, tipo} from "../../TablaSimbolos/Tipo"
import Continuar from "../SentenciaTransferencia/Continuar";
import Detener from "../SentenciaTransferencia/Detener";
import Retonar from "../SentenciaTransferencia/Retornar";

export default class If implements Instruccion{
    
    public condicion: Expresion;
    public listadoIf: Array<Instruccion>;
    public listadoElse: Array<Instruccion>;
    public linea: number;
    public columna: number;

    constructor(condicion, listadoIf, listadoElse, fila, columna){
        this.condicion = condicion;
        this.listadoIf = listadoIf;
        this.listadoElse = listadoElse;
        this.linea = fila;
        this.columna = columna;
    }

    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        console.log("Esta ejecutando el if");
        let tablaLocal = new TablaSimbolos(tabla);
        
        let valor = this.condicion.getValorImplicito(controlador,tabla);

        if(this.condicion.getTipo(controlador,tabla) == tipo.BOOL){
            if(valor){
                for(let i of this.listadoIf){
                    let res = i.ejecutar(controlador,tablaLocal);
                    if(i instanceof Detener || res instanceof Detener){
                        return res;
                    }
                    if(i instanceof Continuar || res instanceof Continuar){
                        return res;
                    }
                    if(i instanceof Retonar || res instanceof Retonar){
                        return res;
                    }
                }
            }else{
                for(let i of this.listadoElse){
                    let res = i.ejecutar(controlador,tablaLocal);
                    if(i instanceof Detener || res instanceof Detener){
                        return res;
                    }
                    if(i instanceof Continuar || res instanceof Continuar){
                        return res;
                    }
                    if(i instanceof Retonar || res instanceof Retonar){
                        return res;
                    }
                }
            }
        } 
        return null;
        //throw new Error("Method not implemented.");
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos){

    }

    recorrer(): Nodo {
        /*
        let raiz = new Nodo('If','');

        raiz.agregarHijo(new Nodo('(',''));
        raiz.agregarHijo(this.condicion.recorrer());
        raiz.agregarHijo(new Nodo(')',''));
        raiz.agregarHijo(new Nodo('{',''));
        for(let i of this.listadoIf){
            raiz.agregarHijo(i.recorrer());
        }
        raiz.agregarHijo(new Nodo('}',''));
        if(this.listadoElse != null){
            let raux = new Nodo('Else','');
            //raiz.agregarHijo(new Nodo('Else',''));
            raux.agregarHijo(new Nodo('{',''));
            for(let i of this.listadoElse){
                raux.agregarHijo(i.recorrer());
            }
            raux.agregarHijo(new Nodo('}',''));
            raiz.agregarHijo(raux);
        }

        return raiz;
        */
        throw new Error("Method not implemented.");
    }
    
}