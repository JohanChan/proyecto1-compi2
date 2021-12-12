import Nodo from "../../Ast/Nodo";
import {Controlador} from "../../Controlador";
import { Instruccion } from "../../Interfaces/Instruccion";
import { TablaSimbolos } from "../../TablaSimbolos/TablaSimbolos";

export default class Detener implements Instruccion{
    public linea: number;
    public columna: number;
    constructor(){  }

    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        return this;
        //throw new Error("Method not implemented.");
    }
    recorrer(): Nodo {
        return new Nodo('BREAK','');
        //throw new Error("Method not implemented.");
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos){

    }

}