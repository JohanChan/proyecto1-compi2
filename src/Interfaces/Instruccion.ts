import { Controlador } from "Controlador";
import { AST } from "../AST/AST";
import {TablaSimbolos} from "../TablaSimbolos/TablaSimbolos"
import { Entorno } from "../AST/Entorno";

export interface Instruccion{
     fila:number;
     columna: number;
    
     ejecutar(controlador: Controlador, arbol:TablaSimbolos):any ;
     traducir(controlador: Controlador, arbol:TablaSimbolos):any ;
}