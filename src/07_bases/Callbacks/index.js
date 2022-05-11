function execute(some) {
  console.log("execute ");
  console.log(some);
}

function suma(x, y, execute) {
  let sumaNumero = x + y;
  execute(sumaNumero);
}

suma(1, 2, execute);
