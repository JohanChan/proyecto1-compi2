import { AST } from "../AST/AST";
import { Entorno } from "../AST/Entorno";
import { Controlador } from "../Controlador";
import { Identificador } from "../Expresiones/Identificador";
import { Logica } from "../Expresiones/Logica";
import { Relacional } from "../Expresiones/Relacional";
import { Expresion } from "../Interfaces/Expresion";
import { Instruccion } from "../Interfaces/Instruccion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { Resultado3D, Temporal } from "../TablaSimbolos/Temporales";
import { Llamada } from "./FuncionesMetodos/Llamada";

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

        let tamExp = this.expresiones.length;
        console.log("Numero de parametros: ", tamExp);
            for (let index = 0; index < tamExp; index++) {
                let llamada = this.expresiones[index] as Expresion;
                if(llamada instanceof Llamada){
                    llamada.ejecutar(controlador,tabla);
                }
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
        let resultado:Resultado3D = new Resultado3D();
        for(let expresion of this.expresiones){
            if(expresion instanceof Logica || expresion instanceof Relacional){
                resultado = expresion.traducir(controlador,tabla);     
                resultado.codigo3D += resultado.etiquetaTrue+":\n";
                resultado.codigo3D += Temporal.nuevaLinea(("************PRINTF***********"),""); 
                resultado.codigo3D += Temporal.nuevaLinea("printf(\"%c\", (char)116);\nprintf(\"%c\", (char)114);\nprintf(\"%c\", (char)117);\nprintf(\"%c\", (char)101);","");
                resultado.codigo3D += resultado.etiquetaFalse+":\n";
                resultado.codigo3D += Temporal.nuevaLinea(("************PRINTF***********"),""); 
                resultado.codigo3D += Temporal.nuevaLinea("printf(\"%c\", (char)102);\nprintf(\"%c\", (char)97);\nprintf(\"%c\", (char)108);\nprintf(\"%c\", (char)115);\nprintf(\"%c\", (char)101);","");
            }
            /*if(expresion instanceof Identificador){
                console.log("La expresion es un identificador... ");
                let valor = expresion.traducir(controlador,tabla);
                resultado.codigo3D += Temporal.nuevaLinea(("************PRINTF***********"),""); 
                resultado.valor = valor;
                console.log("Variable a imprimir " + valor.temporal);
                
            }*/
            resultado = expresion.traducir(controlador,tabla);
        }
        if(resultado.temporal == ""){
            resultado.codigo3D += Temporal.nuevaLinea(("printf(\"%f\", " + resultado.valor + ")"),"");
        }else{
            let temp = tabla.getSimbolo(resultado.temporal).temporal
            if (temp != null) {
                console.log("Es un identificador :c");
                resultado.codigo3D += Temporal.nuevaLinea(("printf(\"%f\", " + temp + ")"),"");
            }else{
                resultado.codigo3D += Temporal.nuevaLinea(("printf(\"%f\", " + resultado.temporal + ")"),"");
            } 
            
        }
        return resultado;
    }

}