import Nodo from "../Ast/Nodo";
import {Controlador} from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";


export class Ternario implements Expresion{

    public condicion: Expresion;
    public verdadero: Expresion;
    public falso: Expresion;
    public linea: number;
    public columna: number;

    constructor(condicion,verdadero,falso,fila,columna){
        this.condicion = condicion;
        this.verdadero = verdadero;
        this.falso = falso;
        this.linea = fila;
        this.columna = columna;
    }


    getTipo(controlador: Controlador, tabla: TablaSimbolos): tipo {
        let valor = this.condicion.getValorImplicito(controlador,tabla);
        
        if(typeof valor === 'boolean'){
            return valor ? this.verdadero.getTipo(controlador,tabla) : this.falso.getTipo(controlador,tabla);
        }else{

        }
        //throw new Error("Method not implemented.");
    }
    getValorImplicito(controlador: Controlador, tabla: TablaSimbolos) {
        let valor = this.condicion.getValorImplicito(controlador,tabla);
        
        if(typeof valor === 'boolean'){
            return valor ? this.verdadero.getValorImplicito(controlador,tabla) : this.falso.getValorImplicito(controlador,tabla);
        }else{
            
        }
        //throw new Error("Method not implemented.");
    }

    getValor(controlador: Controlador, tabla: any) {
        //throw new Error("Method not implemented.");
    }

    recorrer(): Nodo {
        /*
        let raiz = new Nodo('Ternario','');
        raiz.agregarHijo(this.condicion.recorrer());
        raiz.agregarHijo(new Nodo('?',''));        
        raiz.agregarHijo(this.verdadero.recorrer());
        raiz.agregarHijo(new Nodo(':',''));
        raiz.agregarHijo(this.falso.recorrer());
        return raiz;
        */
        throw new Error('Method not implemented.');
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        throw new Error('Method not implemented.');
    }
    
}