import { Instruccion } from "../Interfaces/Instruccion";
import { StructA } from "../Interfaces/Struct";
import { Funcion} from "../Interfaces/Funcion";
import { Controlador } from "../Controlador";
import { TablaSimbolos } from "TablaSimbolos/TablaSimbolos";
import { Main } from '../Instrucciones/FuncionesMetodos/Main'
import { Metodo } from "../Instrucciones/FuncionesMetodos/Metodo";
import { Declaracion } from '../Instrucciones/Declaracion'
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
        for(let instruccion of this.instrucciones){
            if(instruccion instanceof Metodo){
                let metodo = instruccion as Metodo;
                metodo.agregarSimbolosFuncion(controlador,tabla);
            }
        }
        let bandera:number=0;
        for(let instruccion of this.instrucciones){
            if(instruccion instanceof Main && bandera === 0){
                instruccion.ejecutar(controlador,tabla);
                bandera = 1;
            } if(bandera === 1){
                console.log('Uno a la vez plgp');
                return;
            }
            if(instruccion instanceof Declaracion){
                instruccion.ejecutar(controlador,tabla);
            }
        }
    }    

}