function h2o()
{
    var grama_h2o =18; 
    var grama_o2 =32;    
	var litro_h2 =22.4;
	var valor = document.getElementById("valor").value;
	valor =  parseFloat(valor);
	var reagente = document.getElementById("reagente").value;
	var reagente2 = document.getElementById("reagente2").value;
	var resultado = "";
	if(reagente == "H2" && reagente2 == "H2O")
	{
		var conta1 = valor * grama_h2o;
		var result=  conta1 / litro_h2; 
		
		resultado = "22,4l de H2 - 18g de H2O <br>" + valor + "l de H2 - xg de H2O" +  
		"<br> 22,4 . x = 18 . " + valor + "<br> 22,4x = " + conta1 + "<br>x = " + result + "g de H2O";
		document.getElementById("conta").innerHTML = resultado;
	}

	if(reagente == "H2" && reagente2 == "H2" || reagente == "O2" && reagente2 == "H2O")
	{
		resultado = "Entrada inválidada. Selecionar a correlação H2OG - H2G ou O2G - H2OG.";
		document.getElementById("conta").innerHTML = resultado;
	}
	if(reagente == "O2" && reagente2 == "H2")
	{
		var conta1 = valor * litro_h2;
		var result=  conta1 / grama_o2; 
		
		resultado = "32g de O2 - 22,4l de H2 <br>" + valor + "g de O2 - xl de H2" +  
		"<br> 32 . x = 22,4 . " + valor + "<br> 32x = " + conta1 + "<br>x = " + result + "l de H2";
		document.getElementById("conta").innerHTML = resultado;
	}
}
