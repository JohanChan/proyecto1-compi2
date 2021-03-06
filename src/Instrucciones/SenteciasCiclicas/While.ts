import { Controlador } from "../../Controlador";
import { Expresion } from "../../Interfaces/Expresion";
import { Instruccion } from "../../Interfaces/Instruccion";
import { TablaSimbolos } from "../../TablaSimbolos/TablaSimbolos";
import {Continuar} from "../SentenciaTransferencia/Continuar";
import {Detener} from "../SentenciaTransferencia/Detener";

export class While implements Instruccion{
    public linea: number;
    public columna: number;
    public condicion: Expresion;
    public listadoInstrucciones: Array<Instruccion>;

    constructor(condicion, listadoInstrucciones, linea, columna){
        this.condicion = condicion;
        this.listadoInstrucciones = listadoInstrucciones;
        this.linea = linea;
        this.columna = columna;
    }
    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        let valor = this.condicion.getValorImplicito(controlador,tabla);
        if(typeof valor === 'boolean'){
            sig:
            while(this.condicion.getValorImplicito(controlador,tabla)){
                let tablaLocal = new TablaSimbolos(tabla);
                for(let instruccion of this.listadoInstrucciones){
                    let resultado = instruccion.ejecutar(controlador,tablaLocal);
                    if(instruccion instanceof Detener || resultado instanceof Detener){
                        return resultado;
                    }
                    if(instruccion instanceof Continuar || resultado instanceof Continuar){
                        continue sig;
                    }
                }
            }
        }
    }
    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        throw new Error("Method not implemented.");
    }
    

}