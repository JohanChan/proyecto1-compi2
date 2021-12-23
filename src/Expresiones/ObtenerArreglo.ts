import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";
import { RErrores } from "../TablaSimbolos/RErrores";

export class ObtenerArreglo implements Expresion{
    linea: number;
    columna: number;
    public identificador: string;
    public inicio: Expresion;
    public final: Expresion;
    public begin: number;
    public end: number;

    constructor(identificador: string, inicio:any, final:any, begin:number, end:number, linea: number, columna: number){
        this.identificador = identificador;
        this.linea = linea;
        this.columna = columna;
        this.inicio = inicio;
        this.final = final;
        this.begin = begin;
        this.end = end;
        //console.log("Obteniendo arreglo... ", this.inicio);
    }
    getTipo(contolador: Controlador, tabla: TablaSimbolos): tipo {
        let idExiste = tabla.getSimbolo(this.identificador);
        if(idExiste != null){
            return idExiste.tipo.type;
        }
    }
    getValorImplicito(controlador: Controlador, tabla: TablaSimbolos) {
        let idExiste = tabla.getSimbolo(this.identificador);
        if(idExiste != null){
            let ini;
            let fin;
            if (this.begin == 0 && this.end == null) {
                //Viene begin y no viene end
                ini = 0;
                fin = this.final.getValorImplicito(controlador,tabla);
            }else if(this.begin == null && this.end == -1){
                //No viene begin y viene end
                ini = this.inicio.getValorImplicito(controlador,tabla);
                fin = (tabla.getSimbolo(this.identificador).getTamArr() - 1);
            }else if(this.begin == 0 && this.end == -1){
                //Viene begin y viene end
                ini = 0;
                fin = (tabla.getSimbolo(this.identificador).getTamArr() - 1);
            }else{
                ini = this.inicio.getValorImplicito(controlador,tabla);
                fin = this.final.getValorImplicito(controlador,tabla);
            }
            let tamArr = tabla.getSimbolo(this.identificador).getTamArr();
            console.log("Inicio: ", ini, " Final: ", fin);
            if ((ini < 0) || (fin >= tamArr) || (ini >= tamArr) || (fin < ini)) {
                console.log("Error: Indice fuera del rango");
                RErrores.agregarError("Semantico","indice fuera del rango",this.linea,this.columna);
            }else{
                console.log("Rango Solicitado: ", idExiste.getArregloRang(ini,fin));
                return idExiste.getArregloRang(ini,fin);
            }
            
        }else{
            console.log('Error semantico: no existe el arreglo ');
            RErrores.agregarError("Semantico","no exite el arreglo",this.linea,this.columna);
        }
    }
    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        throw new Error("Method not implemented.");
    }
    
}