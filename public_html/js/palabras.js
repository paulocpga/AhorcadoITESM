var palabras=new Array();
var matriz;
function crearMatriz() {
    var k = 0;
    var i = 0;
    var n = $("#numero").val();
    
    //alert(n);
    for(con=0;con<n;con++){
        palabras[con]=prompt("Escriba la palabra","");
        //alert(palabras[con].length);
        if(k<palabras[con].length){
            k=palabras[con].length;
            i=con;
        }     
    } 
    
    //alert("palabra más larga "+palabras[i]);

    var max=2*palabras[i].length;

    //alert(max);
    matriz=new Array(max);

    for(c=0;c<max;c++){
        matriz[c]=new Array(max);
    }
    
    for(var i=0; i<max;i++){
        for(var j=0; j<max; j++){
            matriz[i][j] = 0;
        }
    }

    //separar palabra en caracteres
    for(var j=0; j<palabras.length;j++){
        var letra;
    
        var palabra = palabras[j];        
        //var x = Math.floor(Math.random() * max-1) + 1;  
        //var y = Math.floor(Math.random() * max-1) + 1;   
        var x = 8;
        var y = 2;
        
        //var id = Math.floor(Math.random() * 8) + 1;
        id = 1;    
        
        //caso 1: x-=1;
                
        switch(id){
            case 1: //x-=1 hacia arriba;
                var flag=0;
              
                if(max - x >=palabra.length){
                    for(var fila=x; fila<max; fila--){
                        if(matriz[fila][y]===0){
                            flag+=1;  
                            alert("holaa"+fila);
                        }
                    }
                }
                
                alert("flag"+flag);
                //var k = 0;
                
                if(flag===palabra.length){
                    /*for(var fila=x; fila<=palabra.length; fila--){
                        letra = palabra.charAt(k);  
                        matriz[fila][y] = letra;
                        k++;
                    } */
                    for (var k=0;k<palabra.length;k++){
                        letra = palabra.charAt(k);  
                        matriz[k][y] = letra;
                    }
                }else{
                    alert("no cabe la palabra");
                }
                break;
            case 2:
                x-=1;
                y+=1;
                break;
            case 3:
                y+=1;
                break;
            case 4:
                x+=1;
                y+=1;
                break;
            case 5:
                x+=1;
                break;
            case 6:
                x+=1;
                y-=1;
                break;
            case 7:
                y-=1;
                break;
            case 8:
                x-=1;
                y-=1;
                break;    
        }
    }   
    
    $("#container1").hide();
    $("#container2").show();
 
    //Create a HTML Table element.
    var table = $("<table />");
    //table[0].border = "1";

    //Add the data rows.
    for (var i = 0; i < max; i++) {
        row = $(table[0].insertRow(-1));
        for (var j = 0; j < max; j++) {
            var cell = $("<td />");
            cell.html(matriz[i][j]);
            row.append(cell);
        }
    }

    var dvTable = $("#table");
    dvTable.html("");
    dvTable.append(table);
    
    //$("#container2").html( "<p>All new content. <em>You bet!</em></p>" );
        
    //document.getElementById("matriz").innerHTML=matriz;      
}
