import * as parser from 'parser'

const code: string = 'int x = 0;'

const compileBtn = document.getElementById('compilar')
compileBtn?.addEventListener('click', () => {
  try {
    let txt = (<HTMLInputElement>document.getElementById('code')).value;
    let ast = parser.parse(txt)
    console.log(ast);
  } catch(e) {
    
    console.log("Error al analizar ",e);
  }
})
export default {}
