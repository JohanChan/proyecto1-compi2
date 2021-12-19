export class Temporal{
    public static temporales:Array<any> = new Array();
    public static contadorTemp: number = 1;
    public heap:Array<any>;
    public stack:Array<any>;
    public h:any;
    public s:any;
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
    public static contadorEtiq: number;
    public static nombre:any;
    public static utilizado:boolean;

    public static generarEtiqueta(): string{
        let num = Etiqueta.contadorEtiq;
        Etiqueta.contadorEtiq++;
        return "l" + String(num);
        
    }
}


export class Resultado3D{
    public codigo3D: string; 
    public temporal: string;
    public tipo: any;
    public valor: any;

    constructor(){
        this.codigo3D = "";
        this.temporal = "";
        this.tipo = null;
        this.valor = null;
    }
}



function printString(cadena:any){
    
}

function nuevoTemporal(){
    
}
