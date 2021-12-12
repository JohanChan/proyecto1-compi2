import {Errores} from "../Ast/Errores";
import Nodo from "../Ast/Nodo";
import {Controlador} from "../Controlador";
import { Instruccion } from "../Interfaces/Instruccion";
import {Simbolo} from "../TablaSimbolos/Simbolo";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import {Tipo, tipo} from "../TablaSimbolos/Tipo"

export class Declaracion implements Instruccion{
    public type: Tipo;
    public tip: string = "";
    public simbolo: Array<Simbolo>;
    public fila:number;
    public columna: number;

    constructor(type: any, simbolo: Array<any>, fila:number, columna:number){
        this.columna=columna;
        this.fila=fila;
        this.simbolo=simbolo;
        this.type = type;
    }
    linea: number;

    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
       //console.log('Simbolo ',this.simbolo);
        for(let simbol of this.simbolo){
            //console.log('Simnbolo ',simbol);

            let nuevoS = new Simbolo(simbol.simbolo, this.type, simbol.indentificador, simbol.valor.valor);
            tabla.agregar(simbol.indentificador, nuevoS);
            
        }
        /*let aux = this.simbolo;

        if(tabla.existeActual(aux.identificador)){
            let err = new Errores('Semantico', `La variable ${aux.identificador} existe en el entorno actual`, this.fila, this.columna);
            //controlador.errores.push(err);
            controlador.concatenar(`Err semantico: La variable ${aux.identificador} existe en el entorno actual, fila: ${this.fila}, columna: ${this.columna}`);
        }

        if(aux.valor != null){
            let val = aux.valor.getValor(controlador, tabla);

            let v = aux.valor.getTipo(controlador, tabla);
            console.log(v, this.type.type)
            if(v == this.type.type || (v == tipo.DOUBLE && this.type.type == tipo.INT) || (v == 4 && this.type.type == 3)){
                let nuevo = new Simbolo(aux.simbolo, this.type, aux.identificador, val);
                console.log(nuevo);
                tabla.agregar(aux.identificador,nuevo)

            }else{
                controlador.errores.push(new Errores('Semantico', `La asignacion no es del mismo tipo`, this.fila, this.columna));
                controlador.concatenar(`Err semantico: La asignacion no es del mismo tipo, fila: ${this.fila}, columna: ${this.columna}`);
            }
        }else{
            let nuevo = new Simbolo(aux.simbolo, this.type, aux.identificador, null);
            tabla.agregar(aux.identificador, nuevo);
        }*/
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos){

    }

    recorrer(): Nodo {
        /*let raiz = new Nodo('Declaracion','');
        raiz.agregarHijo(new Nodo(this.type.stype,''),);
        
        raiz.agregarHijo(new Nodo(this.simbolo.identificador,''));

        if(this.simbolo.valor != null){
            raiz.agregarHijo(new Nodo('=',''));
            raiz.agregarHijo(this.simbolo.valor.recorrer());
        }

        return raiz;*/
        throw new Error('Method not implemented.');
    }
}
