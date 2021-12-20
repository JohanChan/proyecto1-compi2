import { Instruccion } from "../Interfaces/Instruccion";
import { StructA } from "../Interfaces/Struct";
import { Funcion } from "../Interfaces/Funcion";
import { Controlador } from "../Controlador";
import { TablaSimbolos } from "TablaSimbolos/TablaSimbolos";
import { Main } from '../Instrucciones/FuncionesMetodos/Main'
import { Metodo } from "../Instrucciones/FuncionesMetodos/Metodo";
import { Declaracion } from '../Instrucciones/Declaracion'
import { Temporal } from "TablaSimbolos/Temporales";
export class AST {

    public instrucciones: Array<Instruccion>
    //public structs: Array<StructA>
    //public funciones: Array<Funcion>

    constructor(instrucciones: Array<Instruccion>) {
        this.instrucciones = instrucciones;
        //this.structs = [];
        //this.funciones = [];
    }

    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {
        for (let instruccion of this.instrucciones) {
            if (instruccion instanceof Metodo) {
                let metodo = instruccion as Metodo;
                metodo.agregarSimbolosFuncion(controlador, tabla);
            }
        }
        let bandera: number = 0;
        for (let instruccion of this.instrucciones) {
            if (instruccion instanceof Main && bandera === 0) {
                instruccion.ejecutar(controlador, tabla);
                bandera = 1;
            } if (bandera === 1) {
                console.log('Uno a la vez plgp');
                return;
            }
            if (instruccion instanceof Declaracion) {
                instruccion.ejecutar(controlador, tabla);
            }
        }
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        console.log("Traduciendo... ");
        let codigo: any;
        for (let instruccion of this.instrucciones) {
            codigo = instruccion.traducir(controlador, tabla);
        }
        return this.encabezado(codigo);
    }
    encabezado(codigo): string {
        let encabezado: string;

        encabezado += "#include <iostream>\n";
        encabezado += "#include <math.h>\n";
        encabezado += "float heap[30101999];\n";
        encabezado += "float stack[30101999];\n\n";
        encabezado += "float P;\n";
        encabezado += "float H;\n";

        let numeroT = codigo.temporal.split("t");
        if (numeroT.lenght > 0) {
            encabezado += "float ";
            //console.log("numero tmeporal ",numeroT);
            for (let i = 1; i <= numeroT[1]; i++) {
                if (i == numeroT[1]) {
                    encabezado += "t" + i + ";"
                } else {
                    encabezado += "t" + i + ", "
                }
            }
        }

        encabezado += "\n";
        encabezado += "/*------MAIN------*///\n";
        encabezado += "void main() { \n";
        encabezado += codigo.codigo3D
        encabezado += "return; \n }"
        return encabezado;
    }

}