function cariModus(arr) {
  /* -membuat variable penampung yang menyimpan value dari nilai
   *  yang berulang
   */
  var store = [];
  /* loop pertama yang berfungsi sebagai filter bilangan yg akan
   * di sortir
   */
  for (var init = 0; init < arr.length - 1; init++) {
    /* loop kedua yg berfungsi penentu bilangan mana yg seharusnya
     * di pilih untuk di bandingkan dengan bilangan penyortir
     */
    for (var init1 = 1; init1 < arr.length ; init1++) {
      /* -kondisi if yg berguna untuk menyortir dari bilangan yg
       *  dipilih secara brurutan oleh loop pertama dan di 
       *  dibandingkan dengan bilangan arr satu-persatu.
       * -apabila bilangan penyortir sama dengan bilangan yg di
       *  jadikan pembanding, maka perintah berikutnya adalah
       *  memasukan bilangan penyortir ke variable penampung
       */ 
      if (arr[init] === arr[init + init1]) {
        store.push(arr[init]);
      }
    }
  }
  /* membuat variable yg berisikan int -1 apabila tidak adalah
   * bilangan yg sama atau value array yg sama lebih dari 1
   */ 
  var a = -1;
  /* kondisi if dsni berfungsi apabila bilangan array yg sama
   * lebih dari 3
   * kodisi else ini berfungsi untuk mereturn value sortiran 
   * bilangan pertama atau -1 (apabila bilangan tidak ada yg sama) 
   */
  if (store[0] === store[2]) {
    return a
  } else {
    return store[0]
  }
}
