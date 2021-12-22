import { Controlador } from '../../Controlador';
import { Instruccion } from '../../Interfaces/Instruccion';
import { Simbolo } from '../../TablaSimbolos/Simbolo'
import { TablaSimbolos } from '../../TablaSimbolos/TablaSimbolos';
import { Tipo } from '../../TablaSimbolos/Tipo';
import { Continuar } from '../SentenciaTransferencia/Continuar'
import { Retonar } from '../SentenciaTransferencia/Retornar'
export class Metodo extends Simbolo implements Instruccion {
    linea: number;
    columna: number;
    public listaInstrucciones: Array<Instruccion>;
    constructor(simbol: number, tipo: Tipo, identificador: string, parametros: any, metodo: any, listaInstrucciones: any, linea: number, columna: number) {
        super(simbol, tipo, identificador, null, parametros, metodo);
        this.listaInstrucciones = listaInstrucciones;
        this.linea = linea;
        this.columna = columna;
    }
    agregarSimbolosFuncion(controlador: Controlador, tabla: TablaSimbolos) {
        if (!tabla.existe(this.indentificador)) {
            tabla.agregar(this.indentificador, this);
        }
    }
    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        let tablaLocal = new TablaSimbolos(tabla);
        console.log("estoy en metodo ejec ", this.listaInstrucciones);
        for (let instruccion of this.listaInstrucciones) {
            let retorno: any;
            if (instruccion instanceof Continuar || retorno instanceof Retonar) {
                console.log('No se puede :v');
            }
            if (instruccion instanceof Retonar) {
                //if (this.valor === null) {
                    retorno = instruccion.ejecutar(controlador, tablaLocal, this);
                    return retorno;
                //}
            }else{
                retorno = instruccion.ejecutar(controlador,tablaLocal);
            }
        }
        return null;
    }
    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        throw new Error('Method not implemented.');
    }

}