import { Controlador } from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";
import { Errores } from "../AST/Errores";
import { RErrores } from "../TablaSimbolos/RErrores";

export class AccesoArreglo implements Expresion{
    linea: number;
    columna: number;
    public identificador: string;
    public posicion: Expresion

    constructor(identificador: string, posicion: Expresion, linea: number, columna: number){
        this.identificador = identificador;
        this.posicion = posicion;
        this.linea = linea;
        this.columna = columna;
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
            let pos = this.posicion.getValorImplicito(controlador,tabla);
            //console.log("Posicion a llamar: ", pos);
            if (pos >= tabla.getSimbolo(this.identificador).getTamArr()) {
                console.log("El indice excede el tamaño del arreglo ", this.linea, " ", this.columna);
                RErrores.agregarError("Semantico","El indice excede el tamaño del arreglo",this.linea,this.columna)
                return
            }else{
                return idExiste.valores[pos];
            }
        }else{
            console.log('Error semantico: no existe el arreglo ',idExiste,  " ", this.linea, " ", this.columna);
            RErrores.agregarError("Semantico","no existe el arreglo",this.linea,this.columna)
        }
    }
    traducir(controlador: Controlador, tabla: TablaSimbolos) {
        throw new Error("Method not implemented.");
    }
    
}