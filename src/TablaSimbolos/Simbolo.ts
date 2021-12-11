import { Expresion } from "../Interfaces/Expresion";
import { AST } from "../AST/AST";
import {TablaSimbolos} from "../TablaSimbolos/TablaSimbolos"
import { Entorno } from "../AST/Entorno";
import { tipo, Tipo } from "./Tipo";
import { Controlador } from "Controlador";

export class Simbolo {
    public simbolo: number;
    public tipo: Tipo;
    public identificador: string;
    public valor: any;

    public listaParams: Array<Simbolo>;
    public metodo: boolean;

    constructor(simbolo: number, tipo: Tipo, identificador: string, valor: any, listaParams?, metodo?){
        this.simbolo = simbolo;
        this.tipo = tipo;
        this.identificador = identificador;
        this.valor = valor;
        this.listaParams = listaParams;
        this.metodo = metodo;
    }
    /*
    traducir(controlador: Controlador, arbol: TablaSimbolos) {
        throw new Error("Method not implemented.");
    }

    getTipo(controlador: Controlador, arbol: TablaSimbolos): tipo {
        return this.tipo;
    }
    getValor(controlador: Controlador, arbol: TablaSimbolos) {
        return this.valor;
    }
    */

    setValor(valor: any){
        this.valor = valor;
    }

    getValor(): any{
        return this.valor;
    }
    
}
