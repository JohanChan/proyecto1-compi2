
import { Controlador } from "../../Controlador";
import { Expresion } from "../../Interfaces/Expresion";
import { Instruccion } from "../../Interfaces/Instruccion";
import { TablaSimbolos } from "../../TablaSimbolos/TablaSimbolos";
import { tipo } from "../../TablaSimbolos/Tipo";
import { Retonar } from "../SentenciaTransferencia/Retornar";
import { Metodo } from "./Metodo";
import { RErrores } from "../../TablaSimbolos/RErrores";

export class Llamada implements Instruccion, Expresion {
    linea: number;
    columna: number;
    public identificador: string;
    public parametros: Array<Expresion>;
    constructor(identificador, parametros, linea, columna) {
        this.identificador = identificador;
        this.parametros = parametros;
        this.linea = linea;
        this.columna = columna
    }
    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        console.log('Estoy en llamada');
        if (tabla.existe(this.identificador)) {
            let tablaLocal = new TablaSimbolos(tabla);
            let simbol = tabla.getSimbolo(this.identificador) as Metodo;
            if (this.mismoMetodo(simbol, controlador, tablaLocal)) {
                let retorno = simbol.ejecutar(controlador, tablaLocal);
                if (retorno != null) {
                    console.log('Retorno llamada '+retorno);
                    return retorno;
                }
            }else{
                console.log('No es el mismo metodo :c');
                RErrores.agregarError("Semantico","No es el mismo metodo",this.linea,this.columna);
            }
        }else{
            console.log(this.identificador);
        }
    }
    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        /*let resultado3D = new Resultado3D();
        resultado3D.codigo3D = "";
        //resultado3D.tipo = this.tipo;
        resultado3D.temporal = new Temporal(String("t1")); //(this.temporal)
        return resultado3D;*/
        //throw new Error("Method not implemented.");
    }
    getTipo(contolador: Controlador, tabla: TablaSimbolos): tipo {
        let tip = tabla.getSimbolo(this.identificador) as Metodo;
        return tip.tipo.type;
    }
    getValorImplicito(controlador: Controlador, tabla: TablaSimbolos) {
        console.log("tabla valor I ",tabla.getSimbolo(this.identificador).valor);
        return tabla.getSimbolo(this.identificador).valor;
        /*console.log('Estoy en llamada como expresion :v');
        let simbol = tabla.getSimbolo(this.identificador) as Metodo;
        let tablaLocal = new TablaSimbolos(tabla);
        if (this.mismoMetodo(simbol, controlador, tablaLocal)) {
            console.log("Si es el mismo metodo :D");
            for (let instruccion of simbol.listaInstrucciones) {
                if (instruccion instanceof Retonar) {
                    //console.log(instruccion.ejecutar(controlador, tabla));
                    let ret = instruccion.ejecutar(controlador, tabla);
                    console.log('Retorno llamada '+ret);
                    //return ret;
                }
            }
        }else{
            console.log("No es el mismo metodo :v");
        }*/
    }
    mismoMetodo(simbol: Metodo, controlador: Controlador, tablaLocal: TablaSimbolos): boolean {
        let contador = 0;
        if (this.parametros.length === simbol.parametros.length) {
            for (let i = 0; i < this.parametros.length; i++) {
                let auxiliar = this.parametros[i].getTipo(controlador, tablaLocal);
                let auxiliar2 = simbol.parametros[i].tipo;
                if (auxiliar === auxiliar2.type || auxiliar === tipo.DOUBLE && auxiliar2.type === tipo.INT) {
                    /*if (simbol.parametros[i].valores != null) {
                        simbol.parametros[i].setValores(this.parametros[i].)
                    }*/
                    simbol.parametros[i].setValor(this.parametros[i].getValorImplicito(controlador, tablaLocal));
                    tablaLocal.agregar(simbol.parametros[i].indentificador, simbol.parametros[i]);
                    contador++;
                }
            }
            if (contador === this.parametros.length) {
                return true;
            } else {
                return false
            }
        }
    }


}