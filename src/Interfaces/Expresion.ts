import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";
import { tipo, Tipo } from "../TablaSimbolos/Tipo";

export interface Expresion{
     linea:number;
     columna: number;
    
     getTipo(ent:Entorno, arbol:AST):tipo ;
     getValorImplicito(ent:Entorno, arbol:AST):any;
     traducir(ent:Entorno, arbol:AST):any ;
     
}