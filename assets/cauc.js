function insert(num) {
  let inserir = (document.getElementById("visorCauculadora").innerHTML += num);
  limiteVisor(inserir.length);
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
  resultado = document.getElementById("visorCauculadora").innerHTML =
    eval(resultado);
  let res = parseFloat(resultado);
  let NumTratado = (document.getElementById("visorCauculadora").innerHTML =
    res.toLocaleString());
  return NumTratado;
}
function limiteVisor(quantidadeCaracters) {
  if (quantidadeCaracters > 14) {
    document.getElementById("visorCauculadora").innerHTML = "erro";
    setTimeout(clean, 500);
  }
}

document.addEventListener("keyup", function (e) {
  if (e.key == 1) insert(1);
  else if (e.key == 2) insert(2);
  else if (e.key == 3) insert(3);
  else if (e.key == 4) insert(4);
  else if (e.key == 5) insert(5);
  else if (e.key == 6) insert(6);
  else if (e.key == 7) insert(7);
  else if (e.key == 8) insert(8);
  else if (e.key == 9) insert(9);
  else if (e.key == 0) insert(0);
  else if (e.key == ".") insert(".");
  else if (e.key == "c") clean();
  else if (e.key == "Backspace") back();
  else if (e.key == "=") calculo();
  else if (e.key == "+") insert("+");
  else if (e.key == "-") insert("-");
  else if (e.key == "/") insert("/");
  else if (e.key == "*") insert("*");
});
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
