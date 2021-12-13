import Nodo from "../../Ast/Nodo";
import {Controlador} from "../../Controlador";
import { Expresion } from "../../Interfaces/Expresion";
import { Instruccion } from "../../Interfaces/Instruccion";
import { TablaSimbolos } from "../../TablaSimbolos/TablaSimbolos";
import {Detener} from "../SentenciaTransferencia/Detener";

export class Caso implements Instruccion{
    public condicion: Expresion;
    public listadoInstrucciones: Array<Instruccion>;
    public linea: number;
    public columna: number;

    constructor(condicion, listadoInstrucciones){
        this.condicion = condicion;
        this.listadoInstrucciones = listadoInstrucciones;
    }   
    
    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        if(this.condicion != null){
            let tablaLocal = new TablaSimbolos(tabla);
            for(let instruccion of this.listadoInstrucciones){
                let resultado = instruccion.ejecutar(controlador,tablaLocal);
                if(instruccion instanceof Detener || resultado instanceof Detener){
                    return resultado;
                }
            }
        }
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos){

    }

    recorrer(): Nodo {
        /*
        let raiz = new Nodo('Case','');
        raiz.agregarHijo(new Nodo('{',''));
        for(let ins of this.listadoInstrucciones){
            raiz.agregarHijo(ins.recorrer());
        }
        raiz.agregarHijo(new Nodo('}',''));
        return raiz;
        */
        throw new Error("Method not implemented.");
    }

}