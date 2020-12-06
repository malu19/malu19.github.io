var botao1 = document.getElementById('botao1');
botao1.onclick = function transformação(){

	var massa = document.getElementById('massa').value;
	massa = parseFloat(massa);
	var gramas = 55.8;
	var result = (massa/gramas);
	result = result.toFixed(2);
	var resultado = "1 mol - 55,8 g <br> X mol - " + massa +" g <br> <br> 55,8 . X = 1 . " + massa + " <br> X = " + massa + "/" + " 55,8 <br> X = " + result + " mol(s). <br><br> " + massa + " g = " + result + " mol(s)";
	document.getElementById('resultado').innerHTML = resultado;


}

var botao2 = document.getElementById('botao2');
botao2.onclick = function transformação2(){

	var mol = document.getElementById('mol').value;
	mol = parseFloat(mol);
	var gramas = 55.8;
	var result = (gramas*mol);
	resultado = result.toFixed(2);
	var resultado = "55,8 g - 1 mol <br> X g - " + mol + " mol <br><br> 1 . X = 55,8 . " + mol + " <br> X = " + gramas*mol + "/1 <br> " + "X = " + result + " g <br><br> " + mol + " mol = " + result + " g";
	document.getElementById("resultado2").innerHTML = resultado;

}
