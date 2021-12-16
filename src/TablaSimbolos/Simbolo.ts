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
    public valores: Array<any>;
    public parametros: Array<Simbolo>;
    public meotodo: boolean;

    constructor(simbolo: number, tipo:Tipo, id:string, valor:any, valores?:Array<any>, parametros?, metodo? ){
        this.simbolo = simbolo; //1=variable;2=arreglo
        this.indentificador = id;
        this.tipo = tipo;
        this.valor = valor;
	this.valores = valores; //VALORES POR SI ES ARREGLO
        this.parametros = parametros;
        this.meotodo = metodo;
    }
    
    getValorImplicito(controlador: Controlador, tabla: TablaSimbolos) {
        return this.valor;
    }
    setValor(valor: any){
        this.valor = valor;
    }

    setValorArr(valor:any, pos:any){
        this.valores[pos] = valor;
    }
    pushArr(valor:any){
        this.valores.push(valor);
    }
    popArr(){
        this.valores.pop();
    }
    getTamArr(){
        return this.valores.length;
    }
}
