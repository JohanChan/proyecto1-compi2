import { Controlador } from "Controlador";
import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";

export interface Instruccion{
     linea:number;
     columna: number;
    
     ejecutar(controlador: Controlador, arbol:AST):any ;
     traducir(controlador: Controlador, arbol:AST):any ;
}