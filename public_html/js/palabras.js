var palabras = new Array();
var matriz;
var max;

function mostrar(){
    var cantidad = parseInt(document.getElementById("numero").value);
    var textHTML = "";
    var buttonHTML = "";
    
    for(i=0; i < cantidad; i++){
        textHTML += "<input type='text' id='palabra" + i + "'/><br/>";
    }
    
    buttonHTML+="<button type='button' onclick='crearMatriz();'>Crear</button>";
    document.getElementById("mostrar").innerHTML = textHTML;
    document.getElementById("generar").innerHTML = buttonHTML;
                
                
}

function crearMatriz() {
    var k = 0;
    var i = 0;
    //obtener número de palabras
    var n = $("#numero").val();
    
    //leer palabras
    for(var con=0;con<n;con++){
        var idPal='#palabra'+con;
        palabras[con]=$(idPal).val();
        if(k<palabras[con].length){
            k=palabras[con].length;
            i=con;
        }     
    } 
    
    //determinar tamaño de la matriz
    max=2*palabras[i].length;

    //Crea arreglo 2D
    matriz=new Array(max);
    for(c=0;c<max;c++){
        matriz[c]=new Array(max);
    }
    
    //Llenar matriz con 0
    for(var i=0; i<max;i++){
        for(var j=0; j<max; j++){
            matriz[i][j] = 0;
        }
    }
        
    //separar palabra en caracteres
    for(var j=0; j<palabras.length;j++){    
        var palabra = $.trim(palabras[j]); 
        acomodarPalabra(palabra);
    }   
    
    $("#container1").hide();
    $("#container2").show();
    
    //llanarLetrasAleatorias();
    mostrarTitulo();
    mostrarTabla();
}

function mostrarTitulo(){
    var t=$("#titulo").val();;
    var tituloHTML="";
    tituloHTML+="<label>"+t+"</label><br>";
    document.getElementById("sopaT").innerHTML = tituloHTML;
    
    var d=$("#descripcion").val();;
    var descripcionHTML="";
    descripcionHTML+="<label>"+d+"</label><br>";
    document.getElementById("sopaD").innerHTML = descripcionHTML;
}

function acomodarPalabra(palabra){
    var palabrachars = new Array();
    //var flag = 0;
    var tam = 0;    
    
    //Parte la palabra
    for(var i=0; i<palabra.length; i++){
        palabrachars[i] = palabra.charAt(i).toUpperCase();
    }
   
    var flag = 0;
    
    do{
        var x = Math.floor(Math.random() * max-1) + 1;  
        var y = Math.floor(Math.random() * max-1) + 1;
        
        var orientacion = Math.floor(Math.random() * 4) + 1;
        //var orientacion = 6;
        
        switch(orientacion){
            //hacia abajo
            case 1: 
                if(max - x >= palabra.length){
                    for(var i = 0; i < palabra.length; i++){
                        if(matriz[x+i][y]===0){
                            tam += 1;
                        }
                    }
                    if(tam === palabra.length){
                        for(var i = 0; i < palabra.length; i++){
                            if(matriz[x+i][y]===0){
                                matriz[x+i][y] = palabrachars[i];
                            }
                        }
                        flag = 1;
                    }            
                }
                tam = 0;
                break;
            //hacia la derecha
            case 2:
                if(max - y >= palabra.length){
                    for(var i = 0; i < palabra.length; i++){
                        if(matriz[x][y+i]===0){
                            tam += 1;
                        }
                    }
                    if(tam === palabra.length){
                        for(var i = 0; i < palabra.length; i++){
                            if(matriz[x][y+i]===0){
                                matriz[x][y+i] = palabrachars[i];
                            }
                        }
                        flag = 1;
                    }            
                }
                tam = 0;                
                break;
            //diagonal hacia abajo y derecha
            case 3:
                if((max - x >= palabra.length)&&(max - y >= palabra.length)){
                    for(var i = 0; i < palabra.length; i++){
                        if(matriz[x+i][y+i]===0){
                            tam += 1;
                        }
                    }
                    if(tam === palabra.length){
                        for(var i = 0; i < palabra.length; i++){
                            if(matriz[x+i][y+i]===0){
                                matriz[x+i][y+i] = palabrachars[i];
                            }
                        }
                        flag = 1;
                    }            
                }
                tam = 0;
                break;
            //hacia arriba
            case 4: 
                if(max - x >= palabra.length){
                    for(var i = 0; i < palabra.length; i++){
                        if(matriz[x+i][y]===0){
                            tam += 1;
                        }
                    }
                    if(tam === palabra.length){
                        for(var i = 0; i < palabra.length; i++){
                            if(matriz[x+i][y]===0){
                                matriz[x+i][y] = palabrachars[(palabra.length-1)-i];
                            }
                        }
                        flag = 1;
                    }            
                }
                tam = 0;
                break;
            //hacia izquierda
            case 5:
                if(max - y >= palabra.length){
                    for(var i = 0; i < palabra.length; i++){
                        if(matriz[x][y+i]===0){
                            tam += 1;
                        }
                    }
                    if(tam === palabra.length){
                        for(var i = 0; i < palabra.length; i++){
                            if(matriz[x][y+i]===0){
                                matriz[x][y+i] = palabrachars[(palabra.length-1)-i];
                            }
                        }
                        flag = 1;
                    }            
                }
                tam = 0;                
                break;
            //diagonal hacia arriba y derecha
            case 6:
                if((max - x >= palabra.length)&&(max - y >= palabra.length)){
                    for(var i = 0; i < palabra.length; i++){
                        if(matriz[x-i][y+i]===0){
                            tam += 1;
                        }
                    }
                    if(tam === palabra.length){
                        for(var i = 0; i < palabra.length; i++){
                            if(matriz[x-i][y+i]===0){
                                matriz[x-i][y+i] = palabrachars[i];
                            }
                        }
                        flag = 1;
                    }            
                }
                tam = 0;
                break;
        }
    }while(flag === 0);
}

function mostrarTabla(){
    //Create a HTML Table element.
    var table = $("<table />");
    //table[0].border = "1";

    //Add the data rows.
    for (var i = 0; i < max; i++) {
        row = $(table[0].insertRow(-1));
        for (var j = 0; j < max; j++) {
            var cell = $("<td></td>");
            cell.html(matriz[i][j]);
            row.append(cell);
        }
    }

    var dvTable = $("#table");
    dvTable.html("");
    dvTable.append(table);
}

function llenarLetrasAleatorias(){
    var abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    
    for(var i = 0; i < max; i++){
        for(var j = 0; j < max; j++){
            if(matriz[i][j] === 0){
                matriz[i][j] = abecedario.charAt(Math.floor(Math.random() * 25) + 1);
            }
        }
    }
}