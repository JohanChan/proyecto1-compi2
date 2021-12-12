import { Controlador } from './Controlador';
import * as parser from 'parser'
import { TablaSimbolos } from './TablaSimbolos/TablaSimbolos';

const code: string = 'int x = 0;'

const compileBtn = document.getElementById('compilar')
compileBtn?.addEventListener('click', () => {
  try {
    let txt = (<HTMLInputElement>document.getElementById('code')).value;
    let ast:any = parser.parse(txt);
    let controlador = new Controlador();
    let tabla = new TablaSimbolos(null);
    ast.ejecutar(controlador,tabla);
    //console.log(ast);
  } catch(e) {
    console.log("Error al analizar ",e);
  }
})
export default {}
