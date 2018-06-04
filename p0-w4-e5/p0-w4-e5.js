function ubahHuruf(kata) {
  /* -membuat variable yg menampung alphabet
   * -membuat variable yg menampung value hasil perubahan str kata
   */ 
  var alphabet = "abcdefghijklmnopqrstuvwxyza"
  var store = "";
  /* -membuat loop yg berfungsi sebagai proses memasukan alphabet
   *  yang telah di proses dengan perulangan sesuai length
   *  dari kata
   */
  for (var init = 0; init < kata.length; init++) {
    /* variable alphaIndex tediri dari nilai index dari huruf kata
     * yg mengikuti alur loop
     */
    var alphaIndex = alphabet.indexOf(kata[init]);
    store = store + alphabet[alphaIndex + 1]
  }
  return store;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
