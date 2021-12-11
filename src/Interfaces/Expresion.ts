import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";
import { tipo, Tipo } from "../TablaSimbolos/Tipo";
import { Controlador } from '../Controlador'
export interface Expresion{
     linea:number;
     columna: number;
    
     getTipo(contolador:Controlador, arbol:AST):tipo ;
     getValorImplicito(controlador:Controlador, arbol:AST):any;
     traducir(controlador:Controlador, arbol:AST):any ;
     
}