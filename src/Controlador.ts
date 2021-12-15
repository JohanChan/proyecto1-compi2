import { Simbolo } from "./TablaSimbolos/Simbolo";
import { tipo } from "./TablaSimbolos/Tipo";
import { TablaSimbolos } from './TablaSimbolos/TablaSimbolos'

export class Controlador {
    public consola: string;

    constructor() {
        this.consola = "";
    }

    public concatenar(txt: string) {
        this.consola += txt;
    }

    getValor(simbolo: Simbolo): string {
        if (simbolo.valor != null) {
            return simbolo.valor.toString();
        } else {
            return '---';
        }
    }

    getTipo(simbolo: any): string {
        return simbolo.tipo.stype.toLowerCase();
    }

    getRol(simbolo: any): string {
        let rol: string = "";
        switch (simbolo.simbolo) {
            case 1:
                rol = 'variable';
                break;
            case 2:
                rol = 'metodo';
                break;
            case 3:
                rol = 'funcion';
                break;
            case 4:
                rol = 'arreglo'
                break;
        }
        return rol;
    }

    parametros(simbolo: any){
        if(simbolo.listaParams != undefined){
            return simbolo.listaParams.length;
        }else{
            return '...';
        }
    }
}