function fpb(angka1, angka2) {
  /* -membuat variale penampung untuk bilangan fpb
   */
  var store = 0;
  /* -membuat looping increment agar variable init
   *  singkron dgn kondisi if
   * -membuat kondisi if untuk menyaring angka yg dpt membagi
   *  kedua inputan, apa bila true makan angka trsebut akan
   *  disimpan di var penampung
   */
  for (var init = 1; init <= angka1; init++) {
    if (angka1 % init === 0 && angka2 % init === 0) {
      store = init;
    }
  }
  // mreturn hasil variable penampung
  return store;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
