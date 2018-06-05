function tukarBesarKecil(kalimat) { 
  /* membuat variable penampung untuk display
   */
  var store = "";
  /* membuat foor loop untuk memfilter huruf dari kalimat satu
   * persatu
   */
  for (var init = 0; init < kalimat.length; init++) {
    /* membuat kondisi if untuk memfilter inputan yg akan di check
     *
     * if pertama untuk mengecek huruf toUpperCase,
     * apabila toUpperCase case, maka store disini dengan
     * value kebalikan dari toUpperCase
     */
    if (kalimat[init] === kalimat[init].toUpperCase()) {
      store =  store + kalimat[init].toLowerCase();
     /* if kedua untuk mengecek huruf toLowerCase,
      * apabila toLowerCase case, maka store disini dengan
      * value kebalikan dari toLowerCase
      */
    } else if (kalimat[init] === kalimat[init].toLowerCase()) {
      store =  store + kalimat[init].toUpperCase();
      /* -kondisi else apabila huruf yg di cek bukanlah suatu huruf
       *  bisa jadi bilangan maupun dll
       * -apabila kondisi terpenuhi, maka perintah berikutnya 
       *  memasukan value yg sama ke variable store
       */
    } else {
      store =  store + kalimat[init];
    }
  }
  return store;
}
