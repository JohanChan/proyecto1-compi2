export class RErrores {

    public static registro:Array<String> = new Array();

    public static agregarError(tipo:any, descripcion:any, fila:any, columna:any){
        RErrores.registro.push(String(tipo) + "-" + String(descripcion) + "-" + String(fila) + "-" + String(columna));
    }

    public static obtenerErrores(){
        let contador = RErrores.registro.length;
        let html:string = "";
        html = "";
        html += "<!DOCTYPE html> <html> <head> <meta charset=\"utf-8\"> <title>TABLA DE ERRORES</title> </head> <body>";
        html += "<table border id=\"tablaCabecera\"> <tr> <th> TIPO </th> <th> DESCRIPCION </th> <th> FILA </th> <th> COLUMNA </th> </tr>";
        for (let index = 0; index < RErrores.registro.length; index++) {
            html += "<tr>"
            let fila = String(RErrores.registro[index]).split("-")
            //console.log("FILA" , fila);
            for (let cont = 0; cont < fila.length; cont++) {
                html += "<td>"
                html += String(fila[cont])
                html += "</td>"
            }
            html += "</tr>"
        }
        html += "</table> </body> </html>"
        console.log("ERRORES\n",html);
        console.log("Se registraron " + String(contador) + " errores")

        /*const fs = require("fs");
        fs.writeFile("RErrores.html", html, (err) => {
        if (err) throw err;
        console.log("Se creo la tabla de errores");
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