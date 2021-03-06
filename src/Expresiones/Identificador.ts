import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";
import {Temporal, Resultado3D} from "../TablaSimbolos/Temporales";
import { RErrores } from "../TablaSimbolos/RErrores";

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
            console.log('Error semantico: no existe la variable ', idExiste, " ", this.linea, " ", this.columna);
            RErrores.agregarError("Semantico","no existe la variable",this.linea,this.columna);
        }
    }
    
    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        /*let idExiste = tabla.getSimbolo(this.identificador); //Devuelve un objeto de tipo Simbolo
        if(idExiste != null){
            console.log("Traduciendo identificador... ", idExiste.valor);
            return idExiste.valor;
        }else{
            console.log('Error semantico: no existe la variables ',idExiste);
        }*/
        let resultado3D = new Resultado3D();
        resultado3D.codigo3D = "";
        resultado3D.tipo = tabla.getSimbolo(this.identificador).tipo.type;
        resultado3D.valor = tabla.getSimbolo(this.identificador).getValorImplicito(controlador,tabla);
        resultado3D.temporal = this.identificador;
        console.log("Traduciendo Identificador... " + resultado3D.valor + resultado3D.temporal);
        return resultado3D;
    }
    
}