import { Expresion } from "../Interfaces/Expresion";
import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";
import { tipo, Tipo } from "./Tipo";

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
    
    traducir(ent: Entorno, arbol: AST) {
        throw new Error("Method not implemented.");
    }

    getTipo(ent: Entorno, arbol: AST): tipo {
        return this.tipo;
    }
    getValorImplicito(ent: Entorno, arbol: AST) {
        return this.valor;
    }
    
}
