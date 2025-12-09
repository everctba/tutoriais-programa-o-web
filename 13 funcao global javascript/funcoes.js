

function define() {
   let porcentagem = 0;
   porcentagem = parseFloat(Math.random().toFixed(2));
   console.log("procentagem = " + porcentagem);
   if (porcentagem < 0.5) {


      vies2 = "compra";
      console.log("Entrou na porcentagem menor que 50% = " + porcentagem);
      console.log("vies2 = " + vies2);

      // return "compra";
   } else {
      vies2 = "venda";
      console.log("vies2 = " + vies2);
   }
}