import { Controlador } from '../../Controlador';
import { Expresion } from '../../Interfaces/Expresion';
import { Instruccion } from '../../Interfaces/Instruccion'
import { TablaSimbolos } from '../../TablaSimbolos/TablaSimbolos';
import { Declaracion } from '../Declaracion';
import { Asignacion } from '../Asignacion';
import { tipo } from '../../TablaSimbolos/Tipo';
import {Continuar} from '../SentenciaTransferencia/Continuar';
import {Detener} from '../SentenciaTransferencia/Detener';

export class For implements Instruccion {
    public linea: number;
    public columna: number;
    public declaracion: Declaracion;
    public asignacion: Asignacion;
    public condicion: Expresion;
    public actualizar: Asignacion;
    public listadoInstrucciones: Array<Instruccion>;
    constructor(declaracion, asignacion, condicion, actualizar, listadosInstrucciones, linea, columna) {
        this.declaracion = declaracion;
        this.asignacion = asignacion;
        this.condicion = condicion;
        this.actualizar = actualizar;
        this.listadoInstrucciones = listadosInstrucciones;
        this.linea = linea;
        this.columna = columna;
    }
    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        console.log('Wenas');
        console.log(this.declaracion);
        console.log('Asignacion perro ',this.asignacion);
        if (this.declaracion != null) {
            let tablaLocal = new TablaSimbolos(tabla);
            let tip = this.declaracion.type.type;
            if (tip === tipo.INT) {
                this.declaracion.ejecutar(controlador, tablaLocal);
                while (this.condicion.getValorImplicito(controlador, tablaLocal)) {
                    let tLocal = new TablaSimbolos(tablaLocal);
                    for (let i of this.listadoInstrucciones) {
                        let retorno = i.ejecutar(controlador, tLocal);
                        if (i instanceof Detener || retorno instanceof Detener) {
                            return retorno;
                        }
                        if (i instanceof Continuar || retorno instanceof Continuar) {
                            this.actualizar.ejecutar(controlador, tLocal);
                        }
                    }
                    this.actualizar.ejecutar(controlador, tablaLocal);
                }
            }  
        }else if (this.asignacion != null) {
            console.log("Hola bb");
            let tablaLocal = new TablaSimbolos(tabla);
            if (tabla.getSimbolo(this.asignacion.id).tipo.type === tipo.INT) {
                this.asignacion.ejecutar(controlador, tablaLocal);
                
                while (this.condicion.getValorImplicito(controlador, tabla)) {
                    
                    let tLocal = new TablaSimbolos(tablaLocal);
                    for (let i of this.listadoInstrucciones) {
                        let retorno = i.ejecutar(controlador, tLocal);
                        if (i instanceof Detener || retorno instanceof Detener) {
                            return retorno;
                        }
                        if (i instanceof Continuar || retorno instanceof Continuar) {
                            
                            this.actualizar.ejecutar(controlador, tLocal);
                        }
                    }
                    this.actualizar.ejecutar(controlador, tablaLocal);
                }
            }
        }
    }
    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        throw new Error('Method not implemented.');
    }

}