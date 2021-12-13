import Nodo from "../../Ast/Nodo";
import {Controlador} from "../../Controlador";
import { Expresion } from "../../Interfaces/Expresion";
import { Instruccion } from "../../Interfaces/Instruccion";
import { TablaSimbolos } from "../../TablaSimbolos/TablaSimbolos";
import {Tipo, tipo} from "../../TablaSimbolos/Tipo"
import {Detener} from "../SentenciaTransferencia/Detener";
import {Caso} from "./Case";

export class Switch implements Instruccion{
    public valor: Expresion;
    public listadoCasos: Array<Caso>;
    public instruccionesDef: Array<Instruccion>;
    public linea: number;
    public columna: number;

    constructor(valor, listadoCasos, instruccionesDef){
        this.valor = valor;
        this.listadoCasos = listadoCasos;
        this.instruccionesDef = instruccionesDef;
    }
    
    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        let tablaLocal = new TablaSimbolos(tabla);
        //if(this.valor != null){

            let valorSwitch = this.valor.getValorImplicito(controlador,tabla);
    
            if(this.listadoCasos != null){
                for(let casito of this.listadoCasos){
                    if(valorSwitch === casito.condicion.getValorImplicito(controlador,tablaLocal)){
                        let resultado = casito.ejecutar(controlador,tablaLocal);    
                        if(casito instanceof Detener || resultado instanceof Detener){
                            return resultado;
                        }                    
                    }
                }
            }

            if(this.instruccionesDef != null){
                for(let ins of this.instruccionesDef){
                    ins.ejecutar(controlador,tablaLocal);
                }
            }
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos){

    }

    recorrer(): Nodo {
        /*
        let raiz = new Nodo('Switch','');
        raiz.agregarHijo(new Nodo('(',''));
        raiz.agregarHijo(this.valor.recorrer());
        raiz.agregarHijo(new Nodo(')',''));
        raiz.agregarHijo(new Nodo('{',''));
        for(let ins of this.listadoCasos){
            raiz.agregarHijo(ins.recorrer());
        }


        if(this.instruccionesDef != null){
            let rdfa = new Nodo('Default','');
//            raiz.agregarHijo(new Nodo('Default','')); 
            rdfa.agregarHijo(new Nodo('{',''));        
           for(let i of this.instruccionesDef){
            rdfa.agregarHijo(i.recorrer());
            }            
            rdfa.agregarHijo(new Nodo('}',''));
            raiz.agregarHijo(rdfa);
        }

        raiz.agregarHijo(new Nodo('}',''));
        
        return raiz;
        */
        throw new Error("Method not implemented.");
    }
    
}