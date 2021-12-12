import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";
import { tipo, Tipo } from "../TablaSimbolos/Tipo";
import { Controlador } from '../Controlador'
import { TablaSimbolos } from "TablaSimbolos/TablaSimbolos";
export interface Expresion{
     linea:number;
     columna: number;
    
     getTipo(contolador:Controlador, tabla:TablaSimbolos):tipo ;
     getValorImplicito(controlador:Controlador, tabla:TablaSimbolos):any;
     traducir(controlador:Controlador, tabla:TablaSimbolos):any ;
     
}