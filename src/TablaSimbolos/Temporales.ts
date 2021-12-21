export class Temporal{
    public static temporales:Array<String> = new Array();
    public static contadorTemp: number = 0;
    public static heap:Array<any> = new Array();
    public static stack:Array<any> = new Array();
    public static h:any;
    public static s:number = 0;
    public static nombre:any;
    public static utilizado:boolean;

    public static generarTemporal(): string{
        let num = Temporal.contadorTemp;
        Temporal.contadorTemp++;
        return "t" + String(num);
    }

    public static nuevaLinea(linea:string, comentario:string){
        return linea + ";\n" + comentario;
    }

}

export class Etiqueta{
    public static etiquetas:Array<any>;
    public static contadorEtiq: number = 1;
    public static nombre:any;
    public static utilizado:boolean;

    public static generarEtiqueta(): string{
        let num = Etiqueta.contadorEtiq;
        Etiqueta.contadorEtiq++;
        return "L" + String(num);
        
    }
}


export class Resultado3D{
    public codigo3D: string; 
    public temporal: string;
    public tipo: any;
    public valor: any;
    public etiquetaTrue: string;
    public etiquetaFalse: string;

    constructor(){
        this.codigo3D = "";
        this.temporal = "";
        this.tipo = null;
        this.valor = null;
        this.etiquetaFalse = "";
        this.etiquetaTrue = "";
    }
}



function printString(cadena:any){
    
}

function nuevoTemporal(){
    
}
