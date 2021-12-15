import Nodo from "../../Ast/Nodo";
import { Controlador } from "../../Controlador";
import { Expresion } from "../../Interfaces/Expresion";
import { Instruccion } from "../../Interfaces/Instruccion";
import { TablaSimbolos } from "../../TablaSimbolos/TablaSimbolos";

export class Retonar implements Instruccion {
    public linea: number;
    public columna: number;
    public retorno: Expresion;

    constructor(retorno) {
        this.retorno = retorno;
    }

    /**
     * void hola(){ return hola(); }
     * 
     */
    ejecutar(controlador: Controlador, tabla: TablaSimbolos, metodo?: any) {
        if (this.retorno != null) {
            try {
                metodo.valor = this.retorno.getValorImplicito(controlador, tabla);
            } catch (e) {

            }
            if (this.retorno.getValorImplicito(controlador, tabla) != null) {
                return this.retorno.getValorImplicito(controlador, tabla);
            }
        } else {
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

    traducir(controlador: Controlador, tabla: TablaSimbolos) {

    }

}