import { Instruccion } from "../Interfaces/Instruccion";
import { StructA } from "../Interfaces/Struct";
import { Funcion} from "../Interfaces/Funcion";
import { Controlador } from "../Controlador";
import { TablaSimbolos } from "TablaSimbolos/TablaSimbolos";

export class AST{
    
    public instrucciones:Array<Instruccion>
    //public structs: Array<StructA>
    //public funciones: Array<Funcion>

    constructor(instrucciones:Array<Instruccion>){
        this.instrucciones = instrucciones;
        //this.structs = [];
        //this.funciones = [];
    }

    ejecutar(controlador: Controlador, tabla: TablaSimbolos){
        for(let i of this.instrucciones){
            i.ejecutar(controlador,tabla);
        }
    }    

}