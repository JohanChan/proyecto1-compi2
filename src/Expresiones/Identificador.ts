import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";

export class Identificador implements Expresion{
    linea: number;
    columna: number;
    public identificador: string;
    constructor(identificador: string, linea: number, columna: number){
        this.identificador = identificador;
        this.linea = linea;
        this.columna = columna;
    }
    getTipo(contolador: Controlador, tabla: TablaSimbolos): tipo {
        let idExiste = tabla.getSimbolo(this.identificador);
        if(idExiste != null){
            return idExiste.tipo.type;
        }
    }
    getValorImplicito(controlador: Controlador, tabla: TablaSimbolos) {
        let idExiste = tabla.getSimbolo(this.identificador);
        if(idExiste != null){
            return idExiste.valor;
        }else{
            console.log('Error semantico: no existe la variables ',idExiste);
        }
    }
    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        throw new Error("Method not implemented.");
    }
    
}