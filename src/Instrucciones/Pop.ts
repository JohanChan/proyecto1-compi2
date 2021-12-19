import {Errores} from "../Ast/Errores";
import Nodo from "../Ast/Nodo";
import {Controlador} from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { Instruccion } from "../Interfaces/Instruccion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";

export class Pop implements Instruccion{

    public id: string;
    public linea: number;
    public columna: number;

    constructor(id: string,  fila: number, columna:number){
        this.columna= columna;
        this.linea= fila;
        this.id= id;
    }

    
    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        if(tabla.existe(this.id)){
            tabla.getSimbolo(this.id).popArr();
            //console.log("Se hizo pop al arreglo :D");
        }else{
            console.log('Arreglo no existe');
        }
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos){

    }

    recorrer(): Nodo {
        /*let raiz = new Nodo('Asignacion','');
        raiz.agregarHijo(new Nodo(this.id,''),);
        raiz.agregarHijo(new Nodo('=',''));        
        raiz.agregarHijo(this.valor.recorrer());
        return raiz;*/
        
        throw new Error("Method not implemented.");
    }

    
}