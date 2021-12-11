import { AST } from "../AST/AST";
import Nodo from "../AST/Nodo";
import {TablaSimbolos} from "../TablaSimbolos/TablaSimbolos"
import { Entorno } from "../AST/Entorno";
import { tipo, Tipo } from "../TablaSimbolos/Tipo";
import { Controlador } from '../Controlador'
export interface Expresion{
     linea:number;
     columna: number;
    
     getTipo(contolador:Controlador, arbol:TablaSimbolos):tipo ;
     getValor(controlador:Controlador, arbol:TablaSimbolos):any;
     traducir(controlador:Controlador, arbol:TablaSimbolos):any ;

     recorrer():Nodo;
     
}