%lex
%options case-sensitive
%option yylineno

/* Expresiones regulares */
entero  [0-9]+
letra  [a-zA-ZÑñ]+
identificador  {letra} ({letra} | {entero} | "_")*
escapeChar [\'\"\\ntr] 
escape \\{escapeChar}
acepta [^\"\\]+ 
cadena (\"({escape} | {acepta})*\") 
decimal [0-9]+("."[0-9]+)?\b

escapeChar2 [\\ntr]
escape2 \\{escapeChar2} 
acepta2 [^\'\\] 
caracter (\'({escape2}|{acepta2})\') 

%%

/* COMENTARIOS */
"//".*             {/* Ignoro los comentarios simples */}
"/*"((\*+[^/*])|([^*]))*\**"*/"     {/*Ignorar comentarios con multiples lneas*/}

/* SIMBOLOS DEL PROGRAMA */

"*"                  { console.log("Reconocio : "+ yytext); return 'MULTI'}
"/"                  { console.log("Reconocio : "+ yytext); return 'DIV'}
"++"                 { console.log("Reconocio : "+ yytext); return 'INCRE'}
"--"                 { console.log("Reconocio : "+ yytext); return 'DECRE'}
"+"                  { console.log("Reconocio : "+ yytext); return 'MAS'}
"-"                  { console.log("Reconocio : "+ yytext); return 'MENOS'}
"%"                  { console.log("Reconocio : "+ yytext); return 'MOD'}
"("                  { console.log("Reconocio : "+ yytext); return 'PARA'}
")"                  { console.log("Reconocio : "+ yytext); return 'PARC'}
"["                  { console.log("Reconocio : "+ yytext); return 'CORA'}
"]"                  { console.log("Reconocio : "+ yytext); return 'CORC'}
"{"                  { console.log("Reconocio : "+ yytext); return 'LLAVEA'}
"}"                  { console.log("Reconocio : "+ yytext); return 'LLAVEC'}
";"                  { console.log("Reconocio : "+ yytext); return 'PYC'}
"."                  { console.log("Reconocio : "+ yytext); return 'PUNTO'}
","                  { console.log("Reconocio : "+ yytext); return 'COMA'}
"=="                 { console.log("Reconocio : "+ yytext); return 'IGUALIGUAL'}
"="                  { console.log("Reconocio : "+ yytext); return 'IGUAL'}
"!="                 { console.log("Reconocio : "+ yytext); return 'DIFERENCIA'}
">="                 { console.log("Reconocio : "+ yytext); return 'MAYORIGUAL'}
"<="                 { console.log("Reconocio : "+ yytext); return 'MENORIGUAL'}
"<"                  { console.log("Reconocio : "+ yytext); return 'MENORQ'}
">"                  { console.log("Reconocio : "+ yytext); return 'MAYORQ'}
"||"                 { console.log("Reconocio : "+ yytext); return 'OR'}
"!"                  { console.log("Reconocio : "+ yytext); return 'NOT'}
":"                  { console.log("Reconocio : "+ yytext); return 'DOSP'}
"?"                  { console.log("Reconocio : "+ yytext); return 'INTERRC'}
"#"                  { console.log("Reconocio : "+ yytext); return 'NUMERAL'}
"&&"                 { console.log("Reconocio : "+ yytext); return 'AND'}
"&"                  { console.log("Reconocio : "+ yytext); return 'CONCATENACION'}
"^"                  { console.log("Reconocio : "+ yytext); return 'REPETICION'}

/* Palabras reservadas */
"null"              { console.log("Reconocio : "+ yytext); return 'NULL'}
"int"               { console.log("Reconocio : "+ yytext); return 'INT'}
"double"            { console.log("Reconocio : "+ yytext); return 'DOUBLE'}
"boolean"           { console.log("Reconocio : "+ yytext); return 'BOOLEAN'}
"char"              { console.log("Reconocio : "+ yytext); return 'CHAR'}
"String"            { console.log("Reconocio : "+ yytext); return 'STRING'}
"if"                { console.log("Reconocio : "+ yytext); return 'IF'}
"else"              { console.log("Reconocio : "+ yytext); return 'ELSE'}
"switch"            { console.log("Reconocio : "+ yytext); return 'SWITCH'}
"list"              { console.log("Reconocio : "+ yytext); return 'LIST'}
"new"               { console.log("Reconocio : "+ yytext); return 'NEW'}
"true"              { console.log("Reconocio : "+ yytext); return 'TRUE'}
"false"             { console.log("Reconocio : "+ yytext); return 'FALSE'}
"print"             { console.log("Reconocio : "+ yytext); return 'PRINT'}
"printf"            { console.log("Reconocio : "+ yytext); return 'PRINTF'}
"println"           { console.log("Reconocio : "+ yytext); return 'PRINTLN'}
"while"             { console.log("Reconocio : "+ yytext); return 'WHILE'}
"do"                { console.log("Reconocio : "+ yytext); return 'DO'}
"for"               { console.log("Reconocio : "+ yytext); return 'FOR'}
"in"                { console.log("Reconocio : "+ yytext); return 'IN'}
"void"              { console.log("Reconocio : "+ yytext); return 'VOID'}

"parse"             { console.log("Reconocio : "+ yytext); return 'PARSE'}
"toInt"             { console.log("Reconocio : "+ yytext); return 'TOINT'}
"toDouble"          { console.log("Reconocio : "+ yytext); return 'TODOUBLE'}
"string"            { console.log("Reconocio : "+ yytext); return 'STRING_CAST'}
"typeof"            { console.log("Reconocio : "+ yytext); return 'TYPEOF'}
"function"          { console.log("Reconocio : "+ yytext); return 'FUCTION'}
"pow"               { console.log("Reconocio : "+ yytext); return 'POW'}

"sqrt"              { console.log("Reconocio : "+ yytext); return 'SQRT'}
"sin"               { console.log("Reconocio : "+ yytext); return 'SIN'}
"cos"               { console.log("Reconocio : "+ yytext); return 'COS'}
"tan"               { console.log("Reconocio : "+ yytext); return 'TAN'}
"log10"             { console.log("Reconocio : "+ yytext); return 'LOG10'}

"begin"              { console.log("Reconocio : "+ yytext); return 'BEGIN'}
"end"              { console.log("Reconocio : "+ yytext); return 'END'}
"push"              { console.log("Reconocio : "+ yytext); return 'PUSH'}
"pop"               { console.log("Reconocio : "+ yytext); return 'POP'}
"length"            { console.log("Reconocio : "+ yytext); return 'LENGTH'}

"caracterOfPosition"    { console.log("Reconocio : "+ yytext); return 'CARACTEROFPOSITION'}
"subString"             { console.log("Reconocio : "+ yytext); return 'SUBSTRING'}
"toUppercase"           { console.log("Reconocio : "+ yytext); return 'TOUPPERCASE'}
"toLowercase"           { console.log("Reconocio : "+ yytext); return 'TOLOWERCASE'}

"default"           { console.log("Reconocio : "+ yytext); return 'DEFAULT'}
"case"              { console.log("Reconocio : "+ yytext); return 'CASE'}
"break"             { console.log("Reconocio : "+ yytext); return 'BREAK'}
"continue"          { console.log("Reconocio : "+ yytext); return 'CONTINUE'}
"return"            { console.log("Reconocio : "+ yytext); return 'RETURN'}
"struct"            { console.log("Reconocio : "+ yytext); return 'STRUCT'}

/* SIMBOLOS ER */
{decimal}           { console.log("Reconocio : "+ yytext); return 'DECIMAL'}
{entero}            { console.log("Reconocio : "+ yytext); return 'ENTERO'}
{cadena}            { console.log("Reconocio : "+ yytext); return 'CADENA'}
{identificador}     { console.log("Reconocio : "+ yytext); return 'IDENTIFICADOR'}
{caracter}          { console.log("Reconocio : "+ yytext); return 'CARACTER'}
/* Espacios */
[\s\r\n\t]                  {/* skip whitespace */}


<<EOF>>               return 'EOF'

/* Errores lexicos */
.                     
            { console.log("Error Lexico "+yytext
                        +" linea "+yylineno
                        +" columna "+(yylloc.last_column+1));

                        /*new errores('Lexico', 'El caracter ' + yytext 
                                + ' no forma parte del lenguaje', 
                                yylineno+1, 
                                yylloc.last_column+1); */
                                      
            }

/lex

/* Area de imports */

%{
    const {Print} = require("../Instrucciones/Print");
    const {Primitivo} = require("../Expresiones/Primitivo");
    const {Objeto} = require("../Expresiones/Objeto");
    const {Atributo} = require("../Expresiones/Atributo");
    const { errores } = require("../AST/Errores");
    const { Logica } = require('../Expresiones/Logica');
    const { Relacional } = require('../Expresiones/Relacional');
    const { Aritmetica } = require('../Expresiones/Aritmetica');
    const { Tipo } = require('../TablaSimbolos/Tipo');
    const { Cadena } = require('../Expresiones/Cadena');
    const { AST } = require('../AST/AST');
    const { Declaracion } = require('../Instrucciones/Declaracion');
    const { Asignacion } = require('../Instrucciones/Asignacion');
    const { Simbolo } = require('../TablaSimbolos/Simbolo');
    const { Identificador } = require('../Expresiones/Identificador');
    const { For } = require('../Instrucciones/SenteciasCiclicas/For');
    const { While } = require('../Instrucciones/SenteciasCiclicas/While');
    const { DoWhile } = require('../Instrucciones/SenteciasCiclicas/DoWhile');
    
    const { If } = require('../Instrucciones/SentenciaDeControl/If');
    const { Detener } = require('../Instrucciones/SentenciaTransferencia/Detener');
    const { Continuar } = require('../Instrucciones/SentenciaTransferencia/Continuar');
    const { Retornar } = require('..s/Instrucciones/SentenciaTransferencia/Retornar');
    
%}

/* Precedencia de operadores */

%left 'OR'
%left 'AND'
%right 'NOT'
%left 'IGUALIGUAL' 'DIFERENCIA' 'MENORQ' 'MENORIGUAL' 'MAYORQ' 'MAYORIGUAL'
%left 'MAS' 'MENOS'
%left 'DIV' 'MULTI' 'MOD'
%left 'CONCATENACION' 'REPETICION'
%right 'UNARIO'


%start inicio

%% /* Gramatica */
inicio:     instrucciones EOF               { $$ = new AST($1);
                                            return $$; }
            ;

instrucciones:  instrucciones instruccion   { $$ = $1; $1.push($2); }
            |   instruccion                 { $$ = new Array(); $$.push($1); }
            ;

instruccion:    declaracion PYC         { $$ = $1; }
            |   asignacion PYC          { $$ = $1; }
            |   imprimir PYC            { $$ = $1; }
            |   if_instr                { $$ = $1; }
            |   switch_instr            { $$ = $1; }
            |   while_instr             { $$ = $1; }
            |   dowhile_instr PYC       { $$ = $1; }
            |   for_instr               { $$ = $1; }
            |   actualizar PYC          { $$ = $1; }
            |   break_instr PYC         { $$ = $1; }
            |   continue_instr PYC      { $$ = $1; }
            |   funcion_instr           { $$ = $1; }
            |   llamada_instr PYC       { $$ = $1; }
            |   return_instr PYC        { $$ = $1; }
            |   arreglos_instr PYC      { $$ = $1; }
            |   modArreglos_instr PYC   { $$ = $1; }
            |   push_instr PYC          { $$ = $1; }
            |   pop_instr PYC           { $$ = $1; }
            |   error                   { console.log("Error sintactico "+yytext+" linea: "+this._$.first_line+" columna "+this._$.first_column);
                                          //new errores("Error Sintactico", "No se esperaba simbolo "+ yytext, this._$.first_line, this._$.first_column);
                                        }
            ;

declaracion:    tipo ListaId                        {    
                                                        if($1.type === 0){
                                                            let arr = new Array();
                                                            for(let ide of $2){
                                                                let nuevoS = new Simbolo(1, null, ide, new Primitivo("",@1.first_line,@1.first_column));
                                                                arr.push(nuevoS);
                                                            }
                                                            $$ = new Declaracion($1, arr, @1.first_line, @1.first_column);
                                                        }else if($1.type === 1){
                                                            let arr = new Array();
                                                            for(let ide of $2){
                                                                let nuevoS = new Simbolo(1, null, ide, new Primitivo(0,@1.first_line,@1.first_column));
                                                                arr.push(nuevoS);
                                                            }
                                                            $$ = new Declaracion($1, arr, @1.first_line, @1.first_column);
                                                        }else if($1.type === 2){
                                                            let arr = new Array();
                                                            for(let ide of $2){
                                                                let nuevoS = new Simbolo(1, null, ide, new Primitivo(0.0,@1.first_line,@1.first_column));
                                                                arr.push(nuevoS);
                                                            }
                                                            $$ = new Declaracion($1, arr, @1.first_line, @1.first_column);
                                                        }else if($1.type === 3){
                                                            let arr = new Array();
                                                            for(let ide of $2){
                                                                let nuevoS = new Simbolo(1, null, ide, new Primitivo(true,@1.first_line,@1.first_column));
                                                                arr.push(nuevoS);
                                                            }
                                                            $$ = new Declaracion($1, arr, @1.first_line, @1.first_column);
                                                        }else if($1.type === 4){
                                                            let arr = new Array();
                                                            for(let ide of $2){
                                                                let nuevoS = new Simbolo(1, null, ide, new Primitivo('\0',@1.first_line,@1.first_column));
                                                                arr.push(nuevoS);
                                                            }
                                                            $$ = new Declaracion($1, arr, @1.first_line, @1.first_column);
                                                        }
                                                    }
            |   tipo IDENTIFICADOR IGUAL expresion  { 
                                                        let arr = new Array();
                                                        arr.push(new Simbolo(1,null,$2,$4));
                                                        $$ = new Declaracion($1, arr, @1.first_line, @1.first_column); 
                                                    }
            ;

ListaId:        ListaId COMA IDENTIFICADOR          { $$ = $1; $1.push($3); }
        |       IDENTIFICADOR                       { $$ = new Array(); $$.push($1);
                                                        /*if($1.type === 0){
                                                            $$ = new Declaracion($1, new Simbolo(1, null, $2, new Primitivo("",@1.first_line,@1.first_column)), @1.first_line, @1.first_column);
                                                        }else if($1.type === 1){
                                                            $$ = new Declaracion($1, new Simbolo(1, null, $2, new Primitivo(0,@1.first_line,@1.first_column)), @1.first_line, @1.first_column);
                                                        }else if($1.type === 2){
                                                            $$ = new Declaracion($1, new Simbolo(1, null, $2, new Primitivo(0.0,@1.first_line,@1.first_column)), @1.first_line, @1.first_column);
                                                        }else if($1.type === 3){
                                                            $$ = new Declaracion($1, new Simbolo(1, null, $2, new Primitivo(true,@1.first_line,@1.first_column)), @1.first_line, @1.first_column);
                                                        }else if($1.type === 4){
                                                            $$ = new Declaracion($1, new Simbolo(1, null, $2, new Primitivo('\0',@1.first_line,@1.first_column)), @1.first_line, @1.first_column);
                                                        }*/
                                                    }   
        ;

tipo:           INT         { $$ = new Tipo('INT'); console.log('Se reconocio rint'); }
    |           DOUBLE      { $$ = new Tipo('DOUBLE'); console.log('Se reconocio rdouble'); }
    |           BOOLEAN     { $$ = new Tipo('BOOL'); console.log('Se reconocio rbool'); }
    |           CHAR        { $$ = new Tipo('CHAR'); console.log('Se reconocio rchar'); }
    |           STRING      { $$ = new Tipo('STRING'); console.log('Se reconocio rstring'); }
    ;

asignacion:     IDENTIFICADOR IGUAL expresion   { $$ = new Asignacion($1, $3, @1.first_line, @1.first_column); }
            ;

imprimir:       PRINT PARA expresion PARC       { console.log('print'); $$ = new Print($3, @1.first_line, @1.last_column);}
            |   PRINTLN PARA expresion PARC     { console.log('print'); $$ = new Print($3, @1.first_line, @1.last_column);}
            ;

if_instr:       IF PARA expresion PARC LLAVEA instrucciones LLAVEC                                  { $$ = new If.default($3, $6, [], @1.first_line, @1.last_column); }
            |   IF PARA expresion PARC instruccion                                                  { $$ = new If.default($3, $5, [], @1.first_line, @1.last_column); }
            |   IF PARA expresion PARC LLAVEA instrucciones LLAVEC ELSE LLAVEA instrucciones LLAVEC { $$ = new If.default($3, $6, $10, @1.first_line, @1.last_column); }
            |   IF PARA expresion PARC LLAVEA instrucciones LLAVEC ELSE instruccion                 { $$ = new If.default($3, $6, $9, @1.first_line, @1.last_column); }
            /*|   IF PARA expresion PARC LLAVEA instrucciones LLAVEC ELSE if_instr*/
            ;

switch_instr:   SWITCH PARA expresion PARC LLAVEA listaCases default_instr LLAVEC   
            |   SWITCH PARA expresion PARC LLAVEA listaCases LLAVEC       
            |   SWITCH PARA expresion PARC LLAVEA default_instr LLAVEC             
            ;

listaCases:     listaCases CASE expresion DOSP instrucciones 
            |   CASE expresion DOSP instrucciones              
            ;

default_instr:  DEFAULT DOSP instrucciones
            ;

while_instr:    WHILE PARA expresion PARC LLAVEA instrucciones LLAVEC       { $$ = new While($3, $6, @1.first_line, @1.first_column); }
            ;

dowhile_instr:  DO LLAVEA instrucciones LLAVEC WHILE PARA expresion PARC    { $$ = new DoWhile($7, $3, @1.first_line, @1.first_column); }
            ;

for_instr:      FOR IDENTIFICADOR IN expresion LLAVEA instrucciones LLAVEC
            |   FOR PARA declaracion PYC expresion PYC expresion PARC LLAVEA actualizar LLAVEC   { $$ = new For($3, null, $5, $7, $10, @1.first_line, @1.first_column); }
            |   FOR PARA asignacion PYC expresion PYC expresion PARC LLAVEA actualizar LLAVEC    { $$ = new For(null, $3, $5, $7, $10, @1.first_line, @1.first_column); }
            ;

actualizar:     IDENTIFICADOR INCRE     { $$ = new Asignacion($1, new Aritmetica(new Identificador($1, @1.first_line, @1.first_column), '+', new Primitivo(1, @1.first_line, @1.last_column),@1.first_line, @1.last_column, false), @1.first_line, @1.last_column); }
            |   IDENTIFICADOR DECRE     { $$ = new Asignacion($1, new Aritmetica(new Identificador($1, @1.first_line, @1.first_column), '-', new Primitivo(1, @1.first_line, @1.last_column),@1.first_line, @1.last_column, false), @1.first_line, @1.last_column); }

            ;
break_instr:    BREAK
            ;

continue_instr: CONTINUE
            ;

/* DECLARACION DE UNA FUNCION */
funcion_instr:  VOID IDENTIFICADOR PARA parametros PARC LLAVEA instrucciones LLAVEC
            |   VOID IDENTIFICADOR PARA PARC LLAVEA instrucciones LLAVEC
            |   tipo IDENTIFICADOR PARA parametros PARC LLAVEA instrucciones LLAVEC
            |   tipo IDENTIFICADOR PARA PARC LLAVEA instrucciones LLAVEC
            ; 

parametros:     parametros COMA tipo IDENTIFICADOR
            |   tipo IDENTIFICADOR
            ;

/* LLAMADA A UNA FUNCION */
llamada_instr:  IDENTIFICADOR PARA parametros_llamada PARC
            |   IDENTIFICADOR PARA PARC
            ;

parametros_llamada: parametros_llamada COMA expresion
            |   expresion
            ;

return_instr:   RETURN expresion
            |   RETURN
            ;

/* DECLARACION DE ARREGLOS */
arreglos_instr: tipo CORA CORC IDENTIFICADOR IGUAL CORA lista_expr CORC
            |   tipo CORA CORC IDENTIFICADOR IGUAL CORA CORC
            ;

lista_expr:     lista_expr COMA expresion
            |   expresion
            ;
            
/* MODIFICACION DE UN ARREGLO */
modArreglos_instr:  IDENTIFICADOR CORA expresion CORC IGUAL expresion
            ;

push_instr:     IDENTIFICADOR PUNTO PUSH PARA PARC
            ;

pop_instr:      IDENTIFICADOR PUNTO POP PARA PARC
            ;


/* EXPRESIONES */
expresion:      MENOS expresion %prec UNARIO
            |   expresion_log           { $$ = $1; }
            |   expresion_rel           { $$ = $1; }
            |   expresion_arit          { $$ = $1; }
            |   expresion_cadena        { $$ = $1; }
            |   expr_nativa             { $$ = $1; }
            |   expresion_cad           { $$ = $1; }
            |   expresion_cast          { $$ = $1; }
            |   PARA expresion PARC     { $$ = $2; }
            |   DECIMAL                 { $$ = new Primitivo(Number($1), @1.first_line, @1.first_column); }
            |   ENTERO                  { $$ = new Primitivo(Number($1), @1.first_line, @1.first_column); }
            |   CADENA                  { $$ = new Primitivo($1, @1.first_line, @1.first_column); }
            |   CARACTER                { $$ = new Primitivo($1, @1.first_line, @1.first_column); }
            |   TRUE                    { $$ = new Primitivo(true, @1.first_line, @1.first_column); }
            |   FALSE                   { $$ = new Primitivo(false, @1.first_line, @1.first_column); }
            |   NULL                    { $$ = new Primitivo(null, @1.first_line, @1.first_column); }
            |   IDENTIFICADOR           { $$ = new Identificador($1, @1.first_line, @1.first_column); }
            |   acceso_arr
            |   llamada_instr /*ASIGNAR A UNA VARIABLE EL VALOR DE UNA FUNCION CON RETORNO*/
            ;

expresion_arit: expresion MAS expresion         { $$ = new Aritmetica($1, '+', $3, @1.first_line, @1.first_column, false); }
            |   expresion MENOS expresion       { $$ = new Aritmetica($1, '-', $3, @1.first_line, @1.first_column, false); }
            |   expresion MULTI expresion       { $$ = new Aritmetica($1, '*', $3, @1.first_line, @1.first_column, false); }
            |   expresion DIV expresion         { $$ = new Aritmetica($1, '/', $3, @1.first_line, @1.first_column, false); }
            |   expresion MOD expresion         { $$ = new Aritmetica($1, '%', $3, @1.first_line, @1.first_column, false); }
            |   expresion CONCATENACION expresion
            ;

expresion_rel:  expresion MENORQ expresion      { $$ = new Relacional($1, '<',  $3, @1.first_line, @1.first_column, false); }
            |   expresion MENORIGUAL expresion  { $$ = new Relacional($1, '<=', $3, @1.first_line, @1.first_column, false); }
            |   expresion MAYORQ expresion      { $$ = new Relacional($1, '>',  $3, @1.first_line, @1.first_column, false); }
            |   expresion MAYORIGUAL expresion  { $$ = new Relacional($1, '>=', $3, @1.first_line, @1.first_column, false); }
            |   expresion IGUALIGUAL expresion  { $$ = new Relacional($1, '==', $3, @1.first_line, @1.first_column, false); }
            |   expresion DIFERENCIA expresion  { $$ = new Relacional($1, '!=', $3, @1.first_line, @1.first_column, false); }
            ;

expresion_log:  expresion AND expresion         { $$ = Logica($1, '&&', $3,  @1.first_line, @1.first_column, false); }
            |   expresion OR expresion          { $$ = Logica($1, '||', $3,  @1.first_line, @1.first_column, false); }
            |   NOT expresion                   { $$ = Logica($1, '!', null, @1.first_line, @1.first_column, false); }
            ;

expr_nativa:    SQRT PARA expresion PARC 
            |   SIN PARA expresion PARC 
            |   COS PARA expresion PARC 
            |   TAN PARA expresion PARC 
            |   LOG10 PARA expresion PARC 
            ;

expresion_cad:  IDENTIFICADOR PUNTO CARACTEROFPOSITION PARA ENTERO PARC
            |   IDENTIFICADOR PUNTO SUBSTRING PARA ENTERO COMA ENTERO PARC
            |   IDENTIFICADOR PUNTO LENGTH PARA PARC
            |   IDENTIFICADOR PUNTO TOUPPERCASE PARA PARC
            |   IDENTIFICADOR PUNTO TOLOWERCASE PARA PARC
            ;

expresion_cast: tipo PUNTO PARSE PARA expresion PARC
            |   TOINT PARA expresion PARC
            |   TODOUBLE PARA expresion PARC
            |   TYPEOF PARA expresion PARC
            |   STRING_CAST PARA expresion PARC
            ;

acceso_arr:     IDENTIFICADOR CORA expresion CORC /*OBTENER VALOR EN POSICION DE ARREGLO*/
            |   IDENTIFICADOR CORA expresion DOSP expresion CORC
            |   IDENTIFICADOR CORA BEGIN DOSP expresion CORC
            |   IDENTIFICADOR CORA expresion DOSP END CORC
            |   NUMERAL IDENTIFICADOR /*COPIAR ARREGLO*/
            ;
