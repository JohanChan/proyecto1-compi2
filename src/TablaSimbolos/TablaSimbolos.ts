import { Simbolo } from "./Simbolo";

export class TablaSimbolos{
    public anterior: TablaSimbolos;
    public tabla: Map<string,Simbolo>;

    constructor(anterior: TablaSimbolos){
        this.anterior= anterior;
        this.tabla = new Map<string,Simbolo>();
    }

    agregar(identificador: string, simbolo: Simbolo){
        this.tabla.set(identificador,simbolo);
    }

    existe(identificador: string):boolean{
        let tablaSimbolo: TablaSimbolos = this;
        while(tablaSimbolo != null){
            let existe = tablaSimbolo.tabla.get(identificador);
            if(existe!=null){
                return true;
            }
            tablaSimbolo = tablaSimbolo.anterior;
        }
        return false;
    }

    existeActual(identificador: string):boolean{
        let tablaSimbolo: TablaSimbolos = this;
        let existe = tablaSimbolo.tabla.get(identificador);

        if(existe!=null){
            return true;
        }
        return false;
    }

    getSimbolo(identificador: string){
        let tablaSimbolo: TablaSimbolos = this;

        while(tablaSimbolo!= null){
            let existe = tablaSimbolo.tabla.get(identificador);

            if(existe!= null){
                return existe;
            }
            tablaSimbolo = tablaSimbolo.anterior;
        }
        return null;
    }
}