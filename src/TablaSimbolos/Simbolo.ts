import { Expresion } from "../Interfaces/Expresion";
import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";
import { tipo, Tipo } from "./Tipo";
import { Controlador } from "Controlador";
import { TablaSimbolos } from "./TablaSimbolos";

export class Simbolo implements Expresion {
    public indentificador: string;
    public valor: any;
    private tipo: tipo;
    linea: number;
    columna: number;

    constructor(tipo:tipo, id:string, linea:number, columna:number, valor:any){
        this.indentificador = id;
        this.linea = linea;
        this.columna = columna;
        this.tipo = tipo;
        this.valor = valor;
    }
    
    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        throw new Error("Method not implemented.");
    }

    getTipo(controlador: Controlador, tabla: TablaSimbolos): tipo {
        return this.tipo;
    }
    getValorImplicito(controlador: Controlador, tabla: TablaSimbolos) {
        return this.valor;
    }
}
