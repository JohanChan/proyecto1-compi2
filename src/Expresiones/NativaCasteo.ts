import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { Tipo, tipo } from "../TablaSimbolos/Tipo";
import { Operacion, Operador } from "./Operacion";
import { RErrores } from "../TablaSimbolos/RErrores";

export class NativaCasteo implements Expresion {
    public expresion: Expresion;
    public operador: string;
    public linea: number;
    public columna: number;
    public tipo:Tipo;

    constructor(expresion, operador, linea, columna, tipo=null) {
        this.expresion = expresion;
        this.operador = operador;
        this.linea = linea;
        this.columna = columna;
        if (tipo != null) {
            this.tipo = tipo
        }
        //console.log("Tipo: " + this.tipo.stype);
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

    getValorImplicito(controlador: Controlador, tabla: TablaSimbolos):any {
        let exp = this.expresion.getValorImplicito(controlador,tabla);
        console.log("Expresion a castear: " + exp);
        switch(this.operador){
            case "toint":
                try {
                    return Math.floor(exp);
                } catch (error) {
                    console.log("Numero no flotante")
                    RErrores.agregarError("Semantico","numero no flotante",this.linea,this.columna);
                }
            break;
            case "todouble": 
                try {
                    return parseFloat(String(exp)).toFixed(1);
                } catch (error) {
                    console.log("Numero no entero")
                    RErrores.agregarError("Semantico","numero no entero",this.linea,this.columna);
                }
            break;
            case "tostring": 
                try {
                    return String(exp);
                } catch (error) {
                    console.log("No se pudo convertir a string")
                    RErrores.agregarError("Semantico","no se pudo convertir a string",this.linea,this.columna);
                }
            break;
            case "parse":
                let temp;
                temp = exp.replace(/(\")/gm,""); 
                try {
                    switch (this.tipo.stype) {
                        case "INT":
                            return parseInt(temp);
                        break;
                        case "DOUBLE":
                            return parseFloat(String(temp)).toFixed(1);
                        break;
                        case "BOOL":
                            if (temp == "1" || temp == "0") {
                                return parseInt(temp);
                            }else {
                                console.log("No se puede convertir a boolean")
                                RErrores.agregarError("Semantico","no se pudo convertir a bool",this.linea,this.columna);
                                return;
                            }
                        break;
                    
                        default:
                            console.log("Tipo no valido");
                            RErrores.agregarError("Semantico","tipo no valido",this.linea,this.columna);
                    }
                } catch (error) {
                    console.log("No se reconocio el tipo")
                    RErrores.agregarError("Semantico","no se reconocio el tipo",this.linea,this.columna);
                }
            break;
        }
        
    }

    traducir(controlador: Controlador, tabla: any) {
        throw new Error("Method not implemented.");
    }
    
}