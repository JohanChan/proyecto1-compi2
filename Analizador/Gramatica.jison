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
inicio:     instrucciones EOF
;

instrucciones:  instrucciones instruccion 
            |   instruccion
            ;

instruccion:    declaracion PYC
            |   asignacion PYC
            |   imprimir PYC
            |   if_instr
            |   switch_instr
            |   while_instr
            |   dowhile_instr PYC
            |   for_instr
            |   break_instr PYC
            |   continue_instr PYC
            |   funcion_instr
            |   llamada_instr PYC
            |   return_instr PYC
            |   arreglos_instr PYC
            |   modArreglos_instr PYC
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

imprimir:       PRINT PARA expresion PARC
            |   PRINTLN PARA expresion PARC
            ;

if_instr:       IF PARA expresion PARC LLAVEA instrucciones LLAVEC
            |   IF PARA expresion PARC instruccion 
            |   IF PARA expresion PARC LLAVEA instrucciones LLAVEC ELSE LLAVEA instrucciones LLAVEC
            |   IF PARA expresion PARC LLAVEA instrucciones LLAVEC ELSE instruccion
            
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
arreglos_instr: tipo CORA CORC IGUAL CORA lista_expr CORC
            |   tipo CORA CORC IGUAL CORA CORC
            ;

lista_expr:     lista_expr COMA expresion
            |   expresion;
            ;
            
/* MODIFICACION DE UN ARREGLO */
modArreglos_instr:  IDENTIFICADOR CORA expresion CORC
            ;


/* EXPRESIONES */
expresion:      MENOS expresion %prec UNARIO
            |   NOT expresion
            |   expresion MAS expresion
            |   expresion MENOS expresion
            |   expresion MULTI expresion
            |   expresion DIV expresion
            |   expresion MOD expresion
            |   expresion MENORQ expresion
            |   expresion MENORIGUAL expresion
            |   expresion MAYORQ expresion
            |   expresion MAYORIGUAL expresion
            |   expresion IGUALIGUAL expresion
            |   expresion DIFERENCIA expresion
            |   expresion AND expresion
            |   expresion OR expresion
            |   PARA expresion PARC
            |   DECIMAL
            |   ENTERO
            |   CADENA
            |   CARACTER
            |   IDENTIFICADOR
            |   TRUE
            |   FALSE
            |   NULL
            |   IDENTIFICADOR CORA expresion CORC 
            ;

