import Nodo from "../../Ast/Nodo";
import {Controlador} from "../../Controlador";
import { Expresion } from "../../Interfaces/Expresion";
import { Instruccion } from "../../Interfaces/Instruccion";
import { TablaSimbolos } from "../../TablaSimbolos/TablaSimbolos";

export default class Retonar implements Instruccion{
    public linea: number;
    public columna: number;
    public retorno: Expresion;

    constructor(retorno){
        this.retorno = retorno;
    }
    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        if(this.retorno != null){

            return this.retorno.getValorImplicito(controlador, tabla);
        }else{
            return this;
        }
    }

    recorrer(): Nodo {
        /*
        let raiz = new Nodo('Return','');
        if(this.retorno != null){
            raiz.agregarHijo(this.retorno.recorrer());
        }
        return raiz;
        */
        throw new Error("Method not implemented.");
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos){

    }
    
}