function urutkanAbjad(str) {
  /* buat variable yg menampung str berebntuk array yg value
   * aplhabetnya terpisah di masing2 array
   */
  var strPecah = str.split("")
  /* menyusun value array di variable penampung menggunakan sort
   */
  strPecah.sort()
  /* membuat penampung terakhir yg bersifat str non array
   */
  var final = "";
  /* membuat loop yg akan mmemasukan value strPecah satupersatu
   * ke variable final yang kemudian di return
   */
  for (var init = 0; init < strPecah.length; init++) {
    final = final + strPecah[init]
  }
  return final;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
