import {Errores} from "../Ast/Errores";
import Nodo from "../Ast/Nodo";
import {Controlador} from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { Instruccion } from "../Interfaces/Instruccion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";
import { RErrores } from "../TablaSimbolos/RErrores";

export class ModArreglo implements Instruccion{

    public id: string;
    public posicion: Expresion;
    public valor: Expresion;
    public linea: number;
    public columna: number;

    constructor(id: string, posicion: Expresion, valor: Expresion, fila: number, columna:number){
        this.columna= columna;
        this.linea= fila;
        this.id= id;
        this.valor= valor;
        this.posicion = posicion;
    }

    
    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        if(tabla.existe(this.id)){
            let tip = this.valor.getTipo(controlador,tabla);
            let auxTipo = tabla.getSimbolo(this.id).tipo; 
            if(auxTipo.type === tip || (auxTipo.type === tipo.DOUBLE && tip === tipo.INT) || (auxTipo.type === tipo.CARACTER && tip === tipo.STRING) || (auxTipo.type === tipo.INT && tip === tipo.DOUBLE)){
                let val = this.valor.getValorImplicito(controlador,tabla);
                //console.log("Valor: ", val);
                let pos = this.posicion.getValorImplicito(controlador,tabla);
                //console.log("Posicion: ", pos);
                //console.log("Tamaño del arreglo a modificar " + tabla.getSimbolo(this.id).getTamArr());
                if (pos >= tabla.getSimbolo(this.id).getTamArr()) {
                    console.log("El indice excede el tamaño del arreglo");
                    RErrores.agregarError("Semantico","El indice excede el tamaño del arreglo",this.linea,this.columna)
                    return
                }else{
                    tabla.getSimbolo(this.id).setValorArr(val,pos);
                    //console.log("Se modifico el arreglo :D");
                }
            }else{
                console.log('Error semantico: Tipo de dato no compatible');
                RErrores.agregarError("Semantico","Tipo de dato no compatible",this.linea,this.columna)
            }
        }else{
            console.log('Arreglo no existe');
            RErrores.agregarError("Semantico","Arreglo no existe",this.linea,this.columna)
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