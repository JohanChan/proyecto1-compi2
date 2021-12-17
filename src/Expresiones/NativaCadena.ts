import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";
import { Operacion, Operador } from "./Operacion";

export class NativaCadena implements Expresion {

    public entero1: Expresion;
    public entero2: Expresion;
    public identificador: string;
    public operador: string;
    public linea: number;
    public columna: number;

    constructor(identificador, operador, linea, columna, entero1, entero2) {
        this.identificador = identificador;
        this.entero1 = entero1;
        this.entero2 = entero2;
        this.operador = operador;
        this.linea = linea;
        this.columna = columna;
        
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
        if(this.entero2 != null){
            let aux = tabla.getSimbolo(this.identificador);
            console.log(aux);
            let e1, e2;
            try {
                e1 = this.entero1.getValorImplicito(controlador,tabla);
                e2 = this.entero2.getValorImplicito(controlador,tabla);
            } catch (error) {
                console.log("Negativo");
            }
            
            console.log("Enteros: " + e1 + " " + e2);
            switch(this.operador){
                case "charposition": 
                    if(typeof aux.valor === 'string'){
                        let temp = aux.valor.replace(/(\")/gm,"");
                        return temp.substring(e1,e1+1);
                    }
                break;
                case "length": 
                    let tipoSimbolo = tabla.getSimbolo(this.identificador).simbolo;
                    if (tipoSimbolo == 2) { 
                        let tamArr = tabla.getSimbolo(this.identificador).getTamArr();
                        console.log("Se quiere obtener el tam de un arreglo " + tamArr);
                        return tamArr;
                    }else{
                        console.log("Se quiere obtener el tam de una cadena")
                        if(typeof aux.valor === 'string'){
                            let temp = aux.valor.replace(/(\")/gm,"");
                            return temp.length;
                        }
                    }
                    
                break;
                case "substring": 
                    if(typeof aux.valor === 'string'){
                        let temp = aux.valor.replace(/(\")/gm,"");
                        //console.log("Entro al substring " + " " + this.entero1.toString() + " " + this.entero2.toString());
                        return temp.substring(e1,e2+1);
                    }
                break;
                case "touppercase":
                    if(typeof aux.valor === 'string'){
                        let temp = aux.valor.replace(/(\")/gm,"");
                        return temp.toUpperCase();
                    }
                break;
                case "tolowercase":
                    if(typeof aux.valor === 'string'){
                        let temp = aux.valor.replace(/(\")/gm,"");
                        return temp.toLowerCase();
                    }
                break;
            }

        }
        console.log(tabla.getSimbolo(this.identificador).valor);
    }
    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        throw new Error("Method not implemented.");
    }

}