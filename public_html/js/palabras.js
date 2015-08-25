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
    
    alert("palabra más larga "+palabras[i]);

    var max=2*palabras[i].length;

    alert(max);
    matriz=new Array(max);

    for(c=0;c<max;c++){
        matriz[c]=new Array(max);
    }
    
    for(var i=0; i<max;i++){
        for(var j=0; j<max; j++){
            matriz[i][j] = 0;
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
