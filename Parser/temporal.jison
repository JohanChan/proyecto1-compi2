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
            |   push_instr PYC
            |   pop_instr PYC
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
            |   DECIMAL
            |   ENTERO
            |   CADENA
            |   CARACTER
            |   IDENTIFICADOR
            |   IDENTIFICADOR INCRE
            |   IDENTIFICADOR DECRE
            |   TRUE
            |   FALSE
            |   NULL
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

/******************REPETICION, CONCATENACION***************************/
expresion_cad:  expresion CONCATENACION expresion 
            |   expresion REPETICION expresion
            |   IDENTIFICADOR PUNTO CARACTEROFPOSITION PARA ENTERO PARC
            |   IDENTIFICADOR PUNTO SUBSTRING PARA ENTERO COMA ENTERO PARC
            |   IDENTIFICADOR PUNTO LENGTH PARA PARC
            |   IDENTIFICADOR PUNTO TOUPPERCASE PARA PARC
            |   IDENTIFICADOR PUNTO TOLOWERCASE PARA PARC
            ;
/********************************************************************/

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