//var fs = require('fs');
//import * as fs from 'fs';
export class RSimbolo {

    public static registro:Array<String> = new Array();

    public static agregarSimbolo(id:any, tipo:any, valor:any, fila:any, columna:any){
        RSimbolo.registro.push(String(id) + "-" + String(valor) + "-" + String(tipo) + "-" + String(fila) + "-" + String(columna));
        //console.log("ARREGLO", RSimbolo.registro[RSimbolo.registro.length-1]);
    }

    public static obtenerSimbolo(){
        let contador = RSimbolo.registro.length;
        let html:string = "";
        html = "";
        html += "<!DOCTYPE html> <html> <head> <meta charset=\"utf-8\"> <title>TABLA DE SIMBOLOS</title> </head> <body>";
        html += "<table border id=\"tablaCabecera\"> <tr> <th> ID </th> <th> VALOR </th> <th> TIPO </th> <th> FILA </th> <th> COLUMNA </th> </tr>";
        for (let index = 0; index < RSimbolo.registro.length; index++) {
            html += "<tr>"
            let fila = String(RSimbolo.registro[index]).split("-")
            //console.log("FILA" , fila);
            for (let cont = 0; cont < fila.length; cont++) {
                html += "<td>"
                html += String(fila[cont])
                html += "</td>"
            }
            html += "</tr>"
        }
        html += "</table> </body> </html>"
        console.log("SIMBOLOS\n",html);
        console.log("Se registraron " + String(contador) + " simbolos");

        
        /*fs.writeFile("RSimbolos.html", html, function(err) {
            if (err) {
                console.log("Error al crear archivo :c");
                return console.log(err);
              }
              console.log("El archivo fue creado correctamente");
        });
        /*
        dirname = os.path.dirname(__file__)
        direcc = os.path.join(dirname, 'TablaSimbolos.html')
        arch = open(direcc, "w+")
        arch.write(html)
        arch.close()
        */
    }

}