import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";
import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { Instruccion } from "../Interfaces/Instruccion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { Resultado3D, Temporal } from "../TablaSimbolos/Temporales";

// print("hola mundo");

export class Print implements Instruccion{
    linea: number;
    columna: number;
    public expresion:Expresion;
    public expresiones: Array<Expresion>;
    public salto: boolean;
    constructor(exps: Array<any>, linea:number, columna:number, salto){
        this.expresiones = exps;
        this.linea = linea;
        this.columna = columna;
        this.salto = salto;
        //console.log("Entro al print :D " + exps);
    }

    ejecutar(controlador: Controlador, tabla: TablaSimbolos) {

        //console.log("Entro al print");
        let tamExp = this.expresiones.length;
        console.log("Numero de parametros: ", tamExp);
            for (let index = 0; index < tamExp; index++) {
                let exp = this.expresiones[index].getValorImplicito(controlador,tabla);
                console.log(exp);
                controlador.concatenar(exp);
            }
            if (this.salto === true) {
                controlador.concatenar("\n");
            }
        
    }

    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        //throw new Error("Method not implemented.");
        console.log("Traduciendo Print... ", this.expresiones[0]);
        let resultado:Resultado3D = this.expresiones[0].traducir(controlador,tabla);
        resultado.codigo3D += Temporal.nuevaLinea(("************PRINTF***********"),"");
        resultado.codigo3D += Temporal.nuevaLinea(("printf(\"%f\", " + resultado.temporal + ")"),"");
        console.log("C3D Print.. ", resultado);
        return resultado;
    }

}