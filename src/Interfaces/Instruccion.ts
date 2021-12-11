import { Controlador } from "Controlador";
import { TablaSimbolos } from "TablaSimbolos/TablaSimbolos";
import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";

export interface Instruccion{
     linea:number;
     columna: number;
    
     ejecutar(controlador: Controlador, tabla:TablaSimbolos):any ;
     traducir(controlador: Controlador, tabla:TablaSimbolos):any ;
}