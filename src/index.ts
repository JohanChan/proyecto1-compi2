import { Controlador } from './Controlador';
import * as parser from 'parser'
import { TablaSimbolos } from './TablaSimbolos/TablaSimbolos';
import { Resultado3D } from 'TablaSimbolos/Temporales';

const code: string = 'int x = 0;'

const compileBtn = document.getElementById('compilar')
compileBtn?.addEventListener('click', () => {
  try {
    let txt = (<HTMLInputElement>document.getElementById('code')).value;
    let ast:any = parser.parse(txt);
    let controlador = new Controlador();
    let tabla = new TablaSimbolos(null);
    ast.ejecutar(controlador,tabla);
    let traducido = ast.traducir(controlador,tabla);
    let consola = controlador.consola;
    (<HTMLInputElement>document.getElementById('consola')).value = consola;
    //console.log("C3D... ", traducido);
    (<HTMLInputElement>document.getElementById('traductor')).value = traducido;
    //console.log(ast);
  } catch(e) {
    console.log("Error al analizar ",e);
  }
})
export default {}
