import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";
import { Operacion, Operador } from "./Operacion";

export class NativaAritmetica extends Operacion implements Expresion {

    public entero1: number;
    public entero2: number;
    public identificador: string;
    constructor(identificador, operador, linea, columna, entero1, entero2) {
        super(null, operador, null, linea, columna, false);
        this.identificador = identificador;
        this.entero1 = entero1;
        this.entero2 = entero2;
    }
    getTipo(controlador: Controlador, tabla: TablaSimbolos): tipo {
        let value = this.getValorImplicito(controlador, tabla);
        
        if (typeof value === 'number') {
            return tipo.DOUBLE;
        } else if (typeof value === 'boolean') {
            return tipo.BOOL;
        } else if (typeof value === 'string') {
            return tipo.STRING;
        }
    }
    getValorImplicito(controlador: Controlador, tabla: TablaSimbolos): any {
        if(this.entero2 === -1){
            let aux = tabla.getSimbolo(this.identificador);
            console.log(aux);
            switch(this.operador){
                case Operador.LENGTH: 
                    if(typeof aux.valor === 'string'){
                        return aux.valor.length;
                    }
                break;
            }

        }
        //console.log(tabla.getSimbolo(this.identificador).valor);
    }
    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        throw new Error("Method not implemented.");
    }

}