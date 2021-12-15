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
    public parametros: Array<Simbolo>;
    public meotodo: boolean;

    constructor(simbolo: number, tipo:Tipo, id:string, valor:any, parametros?, metodo? ){
        this.simbolo = simbolo;
        this.indentificador = id;
        this.tipo = tipo;
        this.valor = valor;
        this.parametros = parametros;
        this.meotodo = metodo;
    }
    
    getValorImplicito(controlador: Controlador, tabla: TablaSimbolos) {
        return this.valor;
    }
    setValor(valor: any){
        this.valor = valor;
    }
}
