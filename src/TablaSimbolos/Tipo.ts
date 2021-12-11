export enum tipo {
    STRING,
    INT,
    DOUBLE,
    BOOL,
    VOID,
    STRUCT,
    ATRIBUTO,
    ARRAY
}

export class Tipo{
    public type: tipo;
    public stype: string;

    constructor(stype:string){
        this.stype = stype;
        this.type = this.getTipo(stype);
    }

    getTipo(stype: string): tipo{
        if(stype == 'INT'){
            return tipo.INT;
        }else if(stype == 'DOUBLE'){
            return tipo.DOUBLE;
        }else if(stype == 'STRING'){
            return tipo.STRING;
        }else if(stype == 'BOOL'){
            return tipo.BOOL;
        }else if(stype == 'VOID'){
            return tipo.VOID;
        }else if(stype == 'ARRAY'){
            return tipo.ARRAY;
        }else if(stype == 'STRUCT'){
            return tipo.STRUCT;
        }
    }
    getsType():string{
        return this.stype;
    }
}