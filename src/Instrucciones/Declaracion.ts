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
