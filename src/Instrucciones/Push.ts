import {Errores} from "../Ast/Errores";
import Nodo from "../Ast/Nodo";
import {Controlador} from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { Instruccion } from "../Interfaces/Instruccion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";
import { RErrores } from "../TablaSimbolos/RErrores";

export class Push implements Instruccion{

    public id: string;
    public valor: Expresion;
    public linea: number;
    public columna: number;

    constructor(id: string, valor: Expresion, fila: number, columna:number){
        this.columna= columna;
        this.linea= fila;
        this.id= id;
        this.valor= valor;
    }

    
    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        if(tabla.existe(this.id)){
            let tip = this.valor.getTipo(controlador,tabla);
            let auxTipo = tabla.getSimbolo(this.id).tipo; 
            if(auxTipo.type === tip || (auxTipo.type === tipo.DOUBLE && tip === tipo.INT) || (auxTipo.type === tipo.CARACTER && tip === tipo.STRING) || (auxTipo.type === tipo.INT && tip === tipo.DOUBLE)){
                let val = this.valor.getValorImplicito(controlador,tabla);
                //console.log("Valor push: ", val);
                tabla.getSimbolo(this.id).pushArr(val);
                //console.log("Se hizo push al arreglo :D");
            }else{
                console.log('Error semantico: variable no compatible');
                RErrores.agregarError("Semantico","arreglo no compatible",this.linea,this.columna)
            }
        }else{
            console.log('Arreglo no existe');
            RErrores.agregarError("Semantico","arreglo no existe",this.linea,this.columna)
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