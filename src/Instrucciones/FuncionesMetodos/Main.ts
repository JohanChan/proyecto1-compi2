import { Controlador } from '../../Controlador';
import { Instruccion } from '../../Interfaces/Instruccion';
import { Simbolo } from '../../TablaSimbolos/Simbolo';
import { TablaSimbolos } from '../../TablaSimbolos/TablaSimbolos';
import { Tipo } from '../../TablaSimbolos/Tipo';
import { Continuar } from '../SentenciaTransferencia/Continuar';
import { Retonar } from '../SentenciaTransferencia/Retornar';
import { Llamada } from './Llamada';

export class Main extends Simbolo implements Instruccion {
    linea: number;
    columna: number;
    public listaInstrucciones: Array<Instruccion>;
    constructor(simbol: number, tipo: Tipo, identificador: string,  metodo: any,listaInstrucciones: Array<any>, linea, columna) {
        super(simbol,tipo,identificador,null,null,metodo);
        this.listaInstrucciones = listaInstrucciones;
        this.linea = linea;
        this.columna = columna;
    }
    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        let tablaLocal = new TablaSimbolos(tabla);
        for(let instruccion of this.listaInstrucciones){
            if(instruccion instanceof Continuar){
                console.log('nel mijo no se puede en el main un continue');
            }
            if(instruccion instanceof Retonar){
                 if(this.valor != null){
                    console.log('Nel mijo no se puede ');
                 }
            }else{
                instruccion.ejecutar(controlador,tablaLocal);
            }

        }
        //throw new Error('Method not implemented.');
    }
    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        //throw new Error('Method not implemented.');
    }

}