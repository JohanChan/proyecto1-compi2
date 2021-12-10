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
"-"                  { console.log("Reconocio : "+ yytext); return 'MENOS'}
"++"                 { console.log("Reconocio : "+ yytext); return 'INCRE'}
"--"                 { console.log("Reconocio : "+ yytext); return 'DECRE'}
"+"                  { console.log("Reconocio : "+ yytext); return 'MAS'}
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
"="                  { console.log("Reconocio : "+ yytext); return 'IGUAL'}
"=="                 { console.log("Reconocio : "+ yytext); return 'IGUALIGUAL'}
"!="                 { console.log("Reconocio : "+ yytext); return 'DIFERENCIA'}
"<"                  { console.log("Reconocio : "+ yytext); return 'MENORQ'}
"<="                 { console.log("Reconocio : "+ yytext); return 'MENORIGUAL'}
">"                  { console.log("Reconocio : "+ yytext); return 'MAYORQ'}
">="                 { console.log("Reconocio : "+ yytext); return 'MAYORIGUAL'}
"||"                 { console.log("Reconocio : "+ yytext); return 'OR'}
"&&"                 { console.log("Reconocio : "+ yytext); return 'AND'}
"!"                  { console.log("Reconocio : "+ yytext); return 'NOT'}
":"                  { console.log("Reconocio : "+ yytext); return 'DOSP'}
"?"                  { console.log("Reconocio : "+ yytext); return 'INTERRC'}
"#"                  { console.log("Reconocio : "+ yytext); return 'NUMERAL'}
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
.                     return 'ERROR'

/lex

/* Area de imports */

%{
    const {Print} = require("../Instrucciones/Primitivas/Print");
    const {Primitivo} = require("../Expresiones/Primitivo");
    const {Operacion, Operador} = require("../Expresiones/Operacion");
    const {Objeto} = require("../Expresiones/Objeto");
    const {Atributo} = require("../Expresiones/Atributo");

%}

/* Precedencia de operadores */

%left 'OR'
%left 'AND'
%right 'NOT'
%left 'IGUALIGUAL' 'DIFERENCIA' 'MENORQ' 'MENORIGUAL' 'MAYORQ' 'MAYORIGUAL'
%left 'MAS' 'MENOS'
%left 'DIV' 'MULTI' 'MOD'
%right 'UNARIO'


%start inicio

%% /* Gramatica */
inicio:     instrucciones EOF               { $$ = $1; return $$; }
            ;

instrucciones:  instrucciones instruccion   { $1.push($2); $$ = $1;}
            |   instruccion                 { $$ = [$1]; }
            ;

instruccion:    declaracion PYC         { $$ = $1; }
            |   asignacion PYC          { $$ = $1; }
            |   imprimir PYC            { $$ = $1; }
            |   if_instr                { $$ = $1; }
            |   switch_instr            { $$ = $1; }
            |   while_instr             { $$ = $1; }
            |   dowhile_instr PYC       { $$ = $1; }
            |   for_instr               { $$ = $1; }
            |   break_instr PYC         { $$ = $1; }
            |   continue_instr PYC      { $$ = $1; }
            |   funcion_instr           { $$ = $1; }
            |   llamada_instr PYC       { $$ = $1; }
            |   return_instr PYC        { $$ = $1; }
            |   arreglos_instr PYC      { $$ = $1; }
            |   modArreglos_instr PYC   { $$ = $1; }
            |   push_instr PYC          { $$ = $1; }
            |   pop_instr PYC           { $$ = $1; }
            ;

declaracion:    tipo ListaId
            |   tipo IDENTIFICADOR IGUAL expresion
            ;

ListaId:        ListaId COMA IDENTIFICADOR
        |       IDENTIFICADOR
        ;

tipo:           INT
    |           DOUBLE
    |           BOOLEAN
    |           CHAR
    |           STRING
    ;

asignacion:     IDENTIFICADOR IGUAL expresion
            ;

imprimir:       PRINT PARA expresion PARC       { $$ = new Print($3, @1.first_line, @1.last_column);}
            |   PRINTLN PARA expresion PARC     { $$ = new Print($3, @1.first_line, @1.last_column);}
            ;

if_instr:       IF PARA expresion PARC LLAVEA instrucciones LLAVEC
            |   IF PARA expresion PARC instruccion 
            |   IF PARA expresion PARC LLAVEA instrucciones LLAVEC ELSE LLAVEA instrucciones LLAVEC
            |   IF PARA expresion PARC LLAVEA instrucciones LLAVEC ELSE instruccion
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

while_instr:    WHILE PARA expresion PARC LLAVEA instrucciones LLAVEC
            ;

dowhile_instr:  DO LLAVEA instrucciones LLAVEC WHILE PARA expresion PARC
            ;

for_instr:      FOR IDENTIFICADOR IN expresion LLAVEA instrucciones LLAVEC
            |   FOR PARA declaracion PYC expresion PYC expresion PARC LLAVEA instrucciones LLAVEC
            |   FOR PARA asignacion PYC expresion PYC expresion PARC LLAVEA instrucciones LLAVEC
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
            |   NOT expresion
            |   expresion_log
            |   expresion_rel
            |   expresion_arit
            |   expr_nativa
            |   expresion_cad
            |   expresion_cast
            |   PARA expresion PARC
            |   DECIMAL                 { $$ = new Primitivo(Number($1), @1.first_line, @1.first_column); }
            |   ENTERO                  { $$ = new Primitivo(Number($1), @1.first_line, @1.first_column); }
            |   CADENA                  { $$ = new Primitivo($1, @1.first_line, @1.first_column); }
            |   CARACTER                { $$ = new Primitivo($1, @1.first_line, @1.first_column); }
            |   TRUE                    { $$ = new Primitivo(true, @1.first_line, @1.first_column); }
            |   FALSE                   { $$ = new Primitivo(false, @1.first_line, @1.first_column); }
            |   NULL                    { $$ = new Primitivo(null, @1.first_line, @1.first_column); }
            |   IDENTIFICADOR
            |   IDENTIFICADOR INCRE
            |   IDENTIFICADOR DECRE
            |   acceso_arr
            |   llamada_instr /*ASIGNAR A UNA VARIABLE EL VALOR DE UNA FUNCION CON RETORNO*/
            ;

expresion_arit: expresion MAS expresion
            |   expresion MENOS expresion
            |   expresion MULTI expresion
            |   expresion DIV expresion
            |   expresion MOD expresion
            ;

expresion_rel:  expresion MENORQ expresion
            |   expresion MENORIGUAL expresion
            |   expresion MAYORQ expresion
            |   expresion MAYORIGUAL expresion
            |   expresion IGUALIGUAL expresion
            |   expresion DIFERENCIA expresion
            ;

expresion_log:  expresion AND expresion
            |   expresion OR expresion
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