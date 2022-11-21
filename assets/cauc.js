function insert(num) {
  document.getElementById("visorCauculadora").innerHTML += num;
  limiteVisor(num);
}

function clean() {
  document.getElementById("visorCauculadora").innerHTML = "";
}

function back() {
  let resultado = document.getElementById("visorCauculadora").innerHTML;
  document.getElementById("visorCauculadora").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calculo() {
  let resultado = document.getElementById("visorCauculadora").innerHTML;
  if (resultado === "") {
    document.getElementById("visorCauculadora").innerHTML = "calc vazio";
  } else {
    resultado = document.getElementById("visorCauculadora").innerHTML =
      eval(resultado);
    let res = parseFloat(resultado);
    if (res === ".") {
      document.getElementById("visorCauculadora").innerHTML = res.toFixed(1);
      limiteVisor(res);
      return res;
    } else if (res.length > 14) {
      document.getElementById("visorCauculadora").innerHTML = "erro";
    } else {
      document.getElementById("visorCauculadora").innerHTML = res;
      return res;
    }
  }
}
function limiteVisor(quantidadeCaracters) {
  let caracters = document.getElementById("visorCauculadora").innerHTML;
  if (caracters.length > 14) {
    document.getElementById("visorCauculadora").innerHTML = "erro";
    setTimeout(clean, 500);
  }
}

/*);
document.getElementById("btn3").addEventListener("click", insert(3));
document.getElementById("btn4").addEventListener("click", insert(4));
document.getElementById("btn5").addEventListener("click", insert(5));
document.getElementById("btn6").addEventListener("click", insert(6));
document.getElementById("btn7").addEventListener("click", insert(7));
document.getElementById("btn8").addEventListener("click", insert(8));
document.getElementById("btn9").addEventListener("click", insert(9));
document.getElementById("btn0").addEventListener("click", insert(0));
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


*/
