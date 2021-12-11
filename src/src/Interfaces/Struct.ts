import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";

export interface StructA{
     linea:number;
     columna: number;
    
     ejecutar(ent:Entorno, arbol:AST):any ;
     traducir(ent:Entorno, arbol:AST):any ;
}