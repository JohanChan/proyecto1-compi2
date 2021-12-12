import { Expresion } from "../Interfaces/Expresion";
import { Entorno } from "../AST/Entorno";
import { tipo, Tipo } from "./Tipo";
import { Controlador } from "Controlador";
import { TablaSimbolos } from "./TablaSimbolos";

export class Simbolo {
    public indentificador: string;
    public valor: any;
    public tipo: Tipo;
    public simbolo: number;


    constructor(simbolo: number, tipo:Tipo, id:string, valor:any){
        this.simbolo = simbolo;
        this.indentificador = id;
        this.tipo = tipo;
        this.valor = valor;
    }
    
    getValorImplicito(controlador: Controlador, tabla: TablaSimbolos) {
        return this.valor;
    }
    setValor(valor: any){
        this.valor = valor;
    }
}
