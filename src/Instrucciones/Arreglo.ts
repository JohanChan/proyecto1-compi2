import {Controlador} from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { Simbolo } from "../TablaSimbolos/Simbolo";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import {Tipo, tipo} from "../TablaSimbolos/Tipo"

export class Arreglo implements Expresion{
    public type: Tipo;
    public id: Simbolo;
    expresion: Array<Expresion>;
    linea: number;
    columna: number;
    valores: Array<any>;

    constructor(id:any, type:any, expresion: Array<any>, fila:number, columna:number){
        this.id = id;
        this.expresion = expresion;
        this.linea = fila;
        this.columna = columna;
        this.type = type;
        this.valores = new Array();
        //console.log("Entro al arreglo :D " + expresion);
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
        throw new Error('Method not implemented.');
    }

    ejecutar(controlador: Controlador, tabla: TablaSimbolos):any {
        let tamArr = this.expresion.length;
        //console.log("Tipo del arreglo: " , this.type.type);
        //console.log("Nombre del arreglo: " + this.id.indentificador);
        //console.log("Tamaño del arreglo: " + tamArr);
        if(tabla.existeActual(this.id.indentificador)){
            console.log('Error semantico: Arreglo existe en entorno actual');
            return;
        }else{

            for (let index = 0; index < tamArr; index++) {
                let exp = this.expresion[index].getValorImplicito(controlador,tabla);
                //console.log("Arreglo en la posicion " + "[" + index + "]"+ " = " + exp );
                //console.log("Tipo de dato: " + this.expresion[index].getTipo(controlador,tabla));
                if (this.type.type == this.expresion[index].getTipo(controlador,tabla)) {
                    //console.log("Valor del mismo tipo :D");
                    this.valores.push(exp);
                }else{
                    console.log("Tipo de dato diferente a la expresion");
                    return;
                }
            }
            let nuevoArr = new Simbolo(this.id.simbolo, this.type, this.id.indentificador, null, this.valores);
            tabla.agregar(this.id.indentificador, nuevoArr);
            console.log("Se guardo el arreglo :) ", this.valores);
        }

        
        /*
        //console.log('Simnbolo ',simbol);
        if(tabla.existeActual(this.id.indentificador)){
            console.log('Error semantico: variable existe en entorno actual');
        }
        //console.log('Valor de simbolo entrante ',simbol.valor);
        if(this.id.valor != null){
            let valor = this.id.valor.getValorImplicito(controlador,tabla);
            let tip = this.id.valor.getTipo(controlador,tabla);

            if(tip === this.type.type || (tip === tipo.INT && this.type.type === tipo.DOUBLE) || (tip === tipo.STRING && this.type.type === tipo.CARACTER)){
                let nuevo = new Simbolo(this.id.simbolo, this.type, this.id.indentificador, this.expresiones);
                tabla.agregar(this.id.indentificador, nuevo);
            }
            //console.log(valor);
        }else{
            let nuevoS = new Simbolo(this.id.simbolo, this.type, this.id.indentificador, null, this.id.valor.valor);
            tabla.agregar(this.id.indentificador, nuevoS);
        }
        */
    }
    

    traducir(controlador: Controlador, tabla: TablaSimbolos){
        throw new Error('Method not implemented.');
    }

}
