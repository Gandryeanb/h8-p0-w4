
function hitungHuruf(kata) {
  /* memecah str kata menjadi arr sesuai urutan menggunakan
   * split
   */
  var pecahKata = kata.split(" ");
  /* -membuat loop pertama yang berfungsi untuk meloop index array
   *  pecahKata[0]
   */ 
  for (var init0 = 0; init0 < pecahKata.length; init0++) {
    /* -membuat loop kedua yang berfungsi untuk meloop index array
     *  pecahKata[0][0](filter)
     */
    for (var init1 = 0; init1 < pecahKata[init0].length - 1;init1++ ) {
      /* -membuat loop ketiga yang berfungsi untuk meloop index array
       *  pecahKata[0][0 sampai akhir index](pembanding)
       */
      for (var init2 = 1; init2 < pecahKata[init0].length - 1;init2++) {
        /* -membuat kondisi if apabila bilangan pemilter dan pembanding      *  sama
         */
        if (pecahKata[init0][init1] === pecahKata[init0][init1 + init2]) {
          // mereturn pecahKata[] apabila kondisi if tercapai
          return pecahKata[init0];
        }
      }
    }
  }
}
