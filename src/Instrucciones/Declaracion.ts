import {Errores} from "../Ast/Errores";
import Nodo from "../Ast/Nodo";
import {Controlador} from "../Controlador";
import { Instruccion } from "../Interfaces/Instruccion";
import {Simbolo} from "../TablaSimbolos/Simbolo";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import {Tipo, tipo} from "../TablaSimbolos/Tipo";
import { Resultado3D, Temporal } from '../TablaSimbolos/Temporales';

export class Declaracion implements Instruccion{
    public type: Tipo;
    public tip: string = "";
    public simbolo: Array<Simbolo>;
    public linea:number;
    public columna: number;

    constructor(type: any, simbolo: Array<any>, fila:number, columna:number){
        this.columna=columna;
        this.linea=fila;
        this.simbolo=simbolo;
        this.type = type;
    }

    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
       //console.log('Simbolo ',this.simbolo);
        for(let simbol of this.simbolo){
            //console.log('Simnbolo ',simbol);
            if(tabla.existeActual(simbol.indentificador)){
                console.log('Error semantico: variable existe en entorno actual');
            }
            //console.log('Valor de simbolo entrante ',simbol.valor);
            if(simbol.valor != null){
                let valor = simbol.valor.getValorImplicito(controlador,tabla);

                let tip = simbol.valor.getTipo(controlador,tabla);
                //console.log(tip, this.type.type);
                if(tip === this.type.type || (tip === tipo.INT && this.type.type === tipo.DOUBLE) || (tip === tipo.STRING && this.type.type === tipo.CARACTER) || (tip === tipo.DOUBLE && this.type.type === tipo.INT)){
                   
                    let nuevo = new Simbolo(simbol.simbolo, this.type, simbol.indentificador, valor);
                    tabla.agregar(simbol.indentificador, nuevo);
                }
            }else{
                let nuevoS = new Simbolo(simbol.simbolo, this.type, simbol.indentificador, simbol.valor.valor);
                tabla.agregar(simbol.indentificador, nuevoS);
            }
        }
        
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos){
        let resultado:Resultado3D = new Resultado3D(); //nodo
        for(let simbol of this.simbolo){
            if(simbol.valor != null){
                let id = simbol.indentificador;
                console.log("EXPRESION... ", id);
                let valor = simbol.valor.getValorImplicito(controlador,tabla);
                let tip = simbol.valor.getTipo(controlador,tabla);
                let nuevo = new Simbolo(simbol.simbolo, this.type, simbol.indentificador, valor);
                Temporal.stack.push(valor); //Se le asigna al stack el valor de la variable (SI ES PRIMITIVO);
                Temporal.s++;
                nuevo.posicionStack = Temporal.s; //Posicion de stack donde esta almacenado el valor de la variable
                let temporal = Temporal.generarTemporal();
                Temporal.temporales.push(temporal);
                nuevo.temporal = temporal; //Temporal equivalente a la variable
                tabla.agregar(simbol.indentificador, nuevo);
                resultado.codigo3D += (Temporal.nuevaLinea("stack[(int)" + nuevo.posicionStack + "] = " + nuevo.valor, "" ));
                resultado.codigo3D += (Temporal.nuevaLinea(temporal + " = stack[(int)" + nuevo.posicionStack + "] " , "" ));
                //console.log("Declaracion con asignacion... ", resultado.codigo3D)
                
            }else{
                let nuevoS = new Simbolo(simbol.simbolo, this.type, simbol.indentificador, simbol.valor.valor);
                tabla.agregar(simbol.indentificador, nuevoS);
            }
        }
        console.log("C3D Declaracion... \n", resultado.codigo3D);
        return resultado;
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
