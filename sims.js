function converte1(){
    var massa = document.getElementById("massa").value;
    massa=parseFloat(massa);
    var grama=55.8;
    var result = massa/grama;
    var resultado =  "55,8 g - 1 mol<br>" + massa +" g - X mol <br> 55,8 . X = 1 . " + massa + " <br> X = " + massa + " /" + " 55,8 <br> X = " + result + " mol(s) <br><br> " + massa + " g = " + result + " mol(s)";
    document.getElementById("grama").innerHTML = resultado;
}

function converte2(){
    var mol = document.getElementById("mols").value;
    mol=parseFloat(mol);
    var grama=55.8;
    var result = mol*grama;
    var resultado =  "1 mol - 55,8 g <br> X mol - " + mol +" g <br> <br> 55,8 . X = 1 . " + mol + " <br> X = " + mol + "/" + " 55,8 <br> X = " + result + " mol(s) <br><br> " + mol + " g = " + result + " mol(s)";
    document.getElementById("mol").innerHTML = resultado;
}
