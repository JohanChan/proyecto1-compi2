import {Errores} from "../Ast/Errores";
import Nodo from "../Ast/Nodo";
import {Controlador} from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { Instruccion } from "../Interfaces/Instruccion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";
import { Resultado3D, Temporal } from '../TablaSimbolos/Temporales';
import { Llamada } from "./FuncionesMetodos/Llamada";
import { RErrores } from "../TablaSimbolos/RErrores";

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
        if(tabla.existe(this.id)){
            //console.log('Que uvas');
            if(this.valor instanceof Llamada){
                    this.valor.ejecutar(controlador,tabla);
            }
            let aux = this.valor.getValorImplicito(controlador,tabla);
            let tip = this.valor.getTipo(controlador,tabla);
            let auxTipo = tabla.getSimbolo(this.id).tipo; 

            if(auxTipo.type === tip || (auxTipo.type === tipo.DOUBLE && tip === tipo.INT) || (auxTipo.type === tipo.CARACTER && tip === tipo.STRING) || (auxTipo.type === tipo.INT && tip === tipo.DOUBLE)){

                tabla.getSimbolo(this.id).setValor(aux);
            }else{
                console.log('Error semantico: variable no compatible');
                RErrores.agregarError("Semantico","variable no compatible",this.linea,this.columna)
            }
        }else{
            console.log('variable no existe');
            RErrores.agregarError("Semantico","variable no existe",this.linea,this.columna)
        }
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos){
        let resultado:Resultado3D = new Resultado3D(); //nodo
        if(tabla.existe(this.id)){
            let posStack = tabla.getSimbolo(this.id).posicionStack;
            let temporal;
            let aux = this.valor.getValorImplicito(controlador,tabla);
            let tip = this.valor.getTipo(controlador,tabla);
            let auxTipo = tabla.getSimbolo(this.id).tipo; 
            //if(auxTipo.type === tip || (auxTipo.type === tipo.DOUBLE && tip === tipo.INT) || (auxTipo.type === tipo.CARACTER && tip === tipo.STRING) || (auxTipo.type === tipo.INT && tip === tipo.DOUBLE)){
            tabla.getSimbolo(this.id).setValor(aux);
            Temporal.stack[posStack] = aux;
            resultado.codigo3D += (Temporal.nuevaLinea("stack[(int)" + posStack + "] = " + aux, "" ));
            //}else{
                //console.log('Error semantico: variable no compatible');
            //}
        }else{
            console.log('variable no existe');
        }
        console.log("C3D Asignacion... \n", resultado.codigo3D);
        return resultado;
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