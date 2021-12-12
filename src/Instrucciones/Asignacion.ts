import {Errores} from "../Ast/Errores";
import Nodo from "../Ast/Nodo";
import {Controlador} from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { Instruccion } from "../Interfaces/Instruccion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";

export class Asignacion implements Instruccion{

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
        console.log('Aqui asignando :V');
        if(tabla.existe(this.id)){
            let aux = this.valor.getValorImplicito(controlador,tabla);
            let tip = this.valor.getTipo(controlador,tabla);
            let auxTipo = tabla.getSimbolo(this.id).tipo; 
            console.log('=========')
            console.log(tip, auxTipo.type);
            console.log('=========')
            if(auxTipo.type === tip || (auxTipo.type === tipo.INT && tip === tipo.DOUBLE) || (auxTipo.type === tipo.CARACTER && tip === tipo.STRING)){
                tabla.getSimbolo(this.id).setValor(aux);
            }else{
                console.log('Error semantico: variable no compatible');
            }
        }else{
            console.log('variable no existe');
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