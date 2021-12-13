import Nodo from "../../Ast/Nodo";
import {Controlador} from "../../Controlador";
import { Instruccion } from "../../Interfaces/Instruccion";
import { TablaSimbolos } from "../../TablaSimbolos/TablaSimbolos";

export class Continuar implements Instruccion{
    public linea: number;
    public columna: number;
    constructor(){}
    
    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        return this;
        //throw new Error("Method not implemented.");
    }
    recorrer(): Nodo {
        return new Nodo('CONTINUE','');
    }
    
    traducir(controlador: Controlador, tabla: TablaSimbolos){

    }
}